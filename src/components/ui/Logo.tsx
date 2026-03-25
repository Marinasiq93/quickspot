"use client";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const color = variant === "light" ? "#F5F2ED" : "#1A1A18";
  const accentColor = "#C8714A";
  const sizes = { sm: { icon: 28, text: 16 }, md: { icon: 36, text: 20 }, lg: { icon: 44, text: 24 } };
  const { icon, text } = sizes[size];
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <svg width={icon} height={icon} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke={color} strokeWidth="1.5" />
        <path d="M20 2 L26 14 L14 14 Z" fill={color} opacity="0.9" />
        <path d="M38 20 L26 26 L26 14 Z" fill={color} opacity="0.7" />
        <path d="M20 38 L14 26 L26 26 Z" fill={color} opacity="0.9" />
        <path d="M2 20 L14 14 L14 26 Z" fill={color} opacity="0.7" />
        <path d="M15 18 L22 15 L22 22 Z" fill={accentColor} />
        <circle cx="20" cy="20" r="5" fill={color} opacity="0.15" />
      </svg>
      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: `${text}px`, fontWeight: 600, letterSpacing: "-0.02em", color, lineHeight: 1 }}>
        quickspot
      </span>
    </div>
  );
}
