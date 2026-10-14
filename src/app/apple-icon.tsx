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
          background: "#0A0908",
          color: "#D97757",
          fontSize: 120,
          fontWeight: 700,
          fontFamily: "monospace",
          letterSpacing: -6,
        }}
      >
        R/
      </div>
    ),
    { ...size },
  );
}