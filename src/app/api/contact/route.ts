import { NextResponse } from "next/server";


type Body = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Body;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const website = typeof body.website === "string" ? body.website.trim() : "";

  // Honeypot: silently succeed to avoid teaching bots
  if (website) {
    return NextResponse.json({ success: true, message: "Message received." });
  }

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json(
      { success: false, message: "Please enter a name between 2 and 80 characters." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (message.length < 10 || message.length > 3000) {
    return NextResponse.json(
      { success: false, message: "Please enter a message between 10 and 3000 characters." },
      { status: 400 },
    );
  }

  // ---------------------------------------------------------------
  // OPTIONAL: Send email via Resend
  // ---------------------------------------------------------------
  // 1. `npm i resend`
  // 2. Add RESEND_API_KEY + CONTACT_TO_EMAIL to .env.local
  // 3. Uncomment below.
  //
  // try {
  //   const { Resend } = await import("resend");
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Portfolio <onboarding@resend.dev>", // replace with verified domain
  //     to: process.env.CONTACT_TO_EMAIL!,
  //     replyTo: email,
  //     subject: `New message from ${name}`,
  //     text: `From: ${name} <${email}>\n\n${message}`,
  //   });
  // } catch (err) {
  //   console.error("Resend error:", err);
  //   return NextResponse.json(
  //     { success: false, message: "Unable to send your message right now." },
  //     { status: 500 },
  //   );
  // }

  // Dev fallback: log to server console
  console.log("📩 Contact form:", { name, email, message });

  return NextResponse.json({
    success: true,
    message: "Thanks — your message was received. I'll get back to you soon.",
  });
}