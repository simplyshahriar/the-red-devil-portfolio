import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { Resend } from "resend";

let rateLimiter: Ratelimit | undefined;

function getRateLimiter(): Ratelimit {
  if (!rateLimiter) {
    const redis = Redis.fromEnv();

    rateLimiter = new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      analytics: true,
      prefix: "redtrace:contact",
    });
  }

  return rateLimiter;
}

function successResponse() {
  return NextResponse.json(
    {
      success: true,
      message: "Your message has been sent successfully!",
    },
    { status: 200 }
  );
}

export async function POST(request: Request) {
  try {
    // Trust these headers only when your hosting platform controls them.
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip")?.trim();

    if (!ip) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to verify your request. Please try again later.",
        },
        { status: 503 }
      );
    }

    // Shared rate limit: 5 requests per IP in a 10-minute sliding window.
    let isRateLimited = false;
    let resetAt = 0;

    try {
      const result = await getRateLimiter().limit(ip);
      isRateLimited = !result.success;
      resetAt = result.reset;
    } catch {
      console.error("Contact rate limiter is unavailable.");

      // Fail closed: do not send email when rate limiting cannot be checked.
      return NextResponse.json(
        {
          success: false,
          message: "Contact service is temporarily unavailable.",
        },
        { status: 503 }
      );
    }

    if (isRateLimited) {
      const retryAfter = Math.max(
        1,
        Math.ceil((resetAt - Date.now()) / 1000)
      );

      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfter) },
        }
      );
    }

    // Check content type.
    const contentType = request.headers.get("content-type") ?? "";

    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        {
          success: false,
          message: "Content-Type must be application/json.",
        },
        { status: 415 }
      );
    }

    // Reject oversized requests when Content-Length is provided.
    const contentLengthHeader = request.headers.get("content-length");
    const contentLength =
      contentLengthHeader === null ? 0 : Number(contentLengthHeader);

    if (
      !Number.isFinite(contentLength) ||
      contentLength < 0 ||
      contentLength > 10_000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Request body is too large or invalid.",
        },
        { status: 413 }
      );
    }

    let body: unknown;

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid JSON request." },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    // Honeypot: real visitors leave "website" empty.
    // Return a generic success to avoid telling basic bots they were detected.
    const honeypot = data.website;

    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return successResponse();
    }

    if (honeypot !== undefined && typeof honeypot !== "string") {
      return NextResponse.json(
        { success: false, message: "Invalid request body." },
        { status: 400 }
      );
    }

    const { name, email, message } = data;

    // Validate required fields.
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (
      cleanName.length < 2 ||
      cleanName.length > 80 ||
      cleanEmail.length < 3 ||
      cleanEmail.length > 254 ||
      cleanMessage.length < 10 ||
      cleanMessage.length > 3000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the length of your inputs.",
        },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !recipient) {
      console.error("Contact email configuration is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured yet.",
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "RedTrace Portfolio <onboarding@resend.dev>",
      to: [recipient],
      replyTo: cleanEmail,
      subject: `New portfolio message from ${cleanName}`,
      text: [
        "New message from your RedTrace portfolio",
        "",
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact email delivery failed.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to send your message right now. Please try again later.",
        },
        { status: 502 }
      );
    }

    return successResponse();
  } catch {
    console.error("Unexpected contact API error.");

    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
