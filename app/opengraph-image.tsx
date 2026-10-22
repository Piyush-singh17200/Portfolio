import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site-config"

export const alt = `${siteConfig.name} — Full-Stack Developer`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#080C0F",
          backgroundImage:
            "linear-gradient(135deg, #080C0F 0%, #101A1D 55%, #171410 100%)",
          color: "#F4F0E9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundImage: "linear-gradient(135deg, #54A894, #D9B77E)",
              fontSize: 22,
              fontWeight: 800,
              color: "#0B1115",
            }}
          >
            PS
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 22, fontWeight: 700 }}>{siteConfig.name}</span>
            <span style={{ fontSize: 14, color: "#D9B77E", letterSpacing: 3 }}>
              FULL-STACK DEVELOPER
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <span
            style={{
              fontSize: 74,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Building reliable products with MERN, Next.js & AI
          </span>
          <span style={{ fontSize: 25, color: "#A8A29A", maxWidth: 850 }}>
            DriveEasy · YojanaSetu · EduAI
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 14, fontSize: 16, color: "#C9C4BB" }}>
            <span>piyushsingh.tech</span>
            <span style={{ color: "#334155" }}>|</span>
            <span>github.com/Piyush-singh17200</span>
          </div>
          <div style={{ display: "flex", height: 6, width: 180, borderRadius: 3, backgroundImage: "linear-gradient(90deg, #54A894, #D9B77E)" }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
