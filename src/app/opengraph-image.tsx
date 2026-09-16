import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { site } from "@/config/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const logoSrc = `data:image/png;base64,${await readFile(
  join(process.cwd(), "public/images/new-vision-logo.png"),
  "base64",
)}`;

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#061a33",
          color: "#ffffff",
        }}
      >
        <img src={logoSrc} width={220} height={220} alt="" />
        <div
          style={{
            display: "flex",
            fontSize: 52,
            fontWeight: 700,
            marginTop: 28,
            letterSpacing: "-0.02em",
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#c8102e",
            marginTop: 12,
            fontWeight: 600,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#cbd5e1",
            marginTop: 10,
          }}
        >
          Mobile Auto Glass in {site.location}
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
