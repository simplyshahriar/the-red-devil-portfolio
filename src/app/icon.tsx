import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 14,
          border: "2px solid #00E5C3",
          position: "relative",
        }}
      >
        {/* Subtle cyan glow inside */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at center, rgba(0, 229, 195, 0.25) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#00E5C3",
            fontSize: 28,
            fontWeight: 800,
            fontFamily: "monospace",
            letterSpacing: -1,
            textShadow: "0 0 10px rgba(0, 229, 195, 0.6)",
          }}
        >
          HS
        </div>
      </div>
    ),
    { ...size },
  );
}
