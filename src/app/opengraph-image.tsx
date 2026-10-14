import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Hasnain Shahriar — The Red Devil";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0908",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#5A554C",
            fontSize: 20,
            letterSpacing: 4,
          }}
        >
          <span>THE RED DEVIL · PORTFOLIO</span>
          <span>2026</span>
        </div>

        {/* middle */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              color: "#7EA88A",
              fontSize: 22,
              letterSpacing: 4,
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 6,
                background: "#7EA88A",
              }}
            />
            AVAILABLE FOR COLLABORATION
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 128,
              fontWeight: 700,
              letterSpacing: -6,
              lineHeight: 0.95,
              color: "#F0EBE0",
            }}
          >
            <span>HASNAIN</span>
            <span style={{ color: "#5A554C" }}>SHAHRIAR</span>
          </div>
        </div>

        {/* bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#8E887B",
            fontSize: 22,
            letterSpacing: 3,
          }}
        >
          <span>WEB APPLICATION SECURITY</span>
          <span style={{ color: "#D97757" }}>◆</span>
          <span>PENETRATION TESTING</span>
        </div>
      </div>
    ),
    { ...size },
  );
}