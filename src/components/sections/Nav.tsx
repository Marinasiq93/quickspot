"use client";

import { useState, useEffect } from "react";
import Logo from "../ui/Logo";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "O que fazemos", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "background 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(245,242,237,0.96)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(26,26,24,0.08)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="container-wide">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
          <a href="#hero" aria-label="Quickspot home"><Logo variant="dark" size="sm" /></a>
          <nav style={{ display: "flex", alignItems: "center", gap: "36px" }} className="hidden-mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">{item.label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="#contato" className="btn-primary hidden-mobile" style={{ padding: "11px 24px", fontSize: "12px" }}>
              <span>Enviar briefing</span>
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: "8px", display: "none" }} className="show-mobile" aria-label="Menu">
              <div style={{ width: "22px", display: "flex", flexDirection: "column", gap: "5px" }}>
                <span style={{ height: "1.5px", background: "var(--graphite)", display: "block", transition: "transform 0.3s ease", transformOrigin: "center", transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : "none" }} />
                <span style={{ height: "1.5px", background: "var(--graphite)", display: "block", transition: "opacity 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
                <span style={{ height: "1.5px", background: "var(--graphite)", display: "block", transition: "transform 0.3s ease", transformOrigin: "center", transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div style={{ background: "var(--ivory)", borderTop: "1px solid rgba(26,26,24,0.08)", padding: menuOpen ? "24px 0" : "0", maxHeight: menuOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1), padding 0.4s ease" }}>
        <div className="container-wide" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 400, color: "var(--graphite)", padding: "12px 0", borderBottom: "1px solid rgba(26,26,24,0.06)", opacity: 0.8 }}>{item.label}</a>
          ))}
          <a href="#contato" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: "16px", alignSelf: "flex-start" }}><span>Enviar briefing</span></a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .hidden-mobile { display: none !important; } .show-mobile { display: flex !important; } }
        @media (min-width: 769px) { .show-mobile { display: none !important; } }
      `}</style>
    </header>
  );
}
