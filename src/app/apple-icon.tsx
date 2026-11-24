import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0B1112",
          borderRadius: 40,
          border: "6px solid #00E5C3",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(0, 229, 195, 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00E5C3",
            fontSize: 82,
            fontWeight: 800,
            fontFamily: "monospace",
            letterSpacing: -3,
            textShadow: "0 0 24px rgba(0, 229, 195, 0.7)",
          }}
        >
          HS
        </div>
      </div>
    ),
    { ...size },
  );
}
