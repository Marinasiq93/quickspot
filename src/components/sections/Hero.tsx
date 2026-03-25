"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { const t = setTimeout(() => setLoaded(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section id="hero" style={{ minHeight: "100svh", background: "var(--ivory)", position: "relative", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "42%", height: "100%", background: "var(--graphite)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "15%", left: 0, width: "100%", height: "1px", background: "rgba(200,113,74,0.2)", zIndex: 1 }} />
      <div className="container-wide" style={{ flex: 1, display: "flex", alignItems: "center", paddingTop: "120px", paddingBottom: "80px", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 42%", gap: "0", width: "100%", alignItems: "center", minHeight: "500px" }} className="hero-grid">
          <div style={{ paddingRight: "64px" }} className="hero-copy">
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "40px", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s" }}>
              <span className="tag-label">Produções complexas</span>
              <span style={{ fontSize: "10px", color: "var(--stone)", letterSpacing: "0.1em", textTransform: "uppercase" }}>/ curadoria &amp; operação</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(40px, 5.5vw, 76px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--graphite)", marginBottom: "28px", maxWidth: "600px", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)", transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s" }}>
              Quando a produção<br />exige mais do que<br />
              <em style={{ color: "var(--copper)", fontStyle: "italic" }}>um catálogo.</em>
            </h1>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(15px, 1.4vw, 17px)", fontWeight: 300, lineHeight: 1.75, color: "var(--stone)", marginBottom: "48px", maxWidth: "460px", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(20px)", transition: "opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s" }}>
              A Quickspot encontra, viabiliza e conduz locações para produções que não se contentam com o óbvio. Da curadoria à operação — do briefing ao set.
            </p>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(16px)", transition: "opacity 0.8s ease 0.55s, transform 0.8s ease 0.55s" }}>
              <a href="#contato" className="btn-primary"><span>Enviar briefing</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              <a href="#como-funciona" className="btn-secondary"><span>Como funciona</span></a>
            </div>
            <div style={{ display: "flex", gap: "32px", marginTop: "64px", paddingTop: "28px", borderTop: "1px solid rgba(26,26,24,0.1)", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }} className="cred-strip">
              {[{num:"+300",label:"espaços no ecossistema"},{num:"7+",label:"anos em produção"},{num:"100%",label:"atendimento consultivo"}].map((item) => (
                <div key={item.num}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "24px", fontWeight: 700, color: "var(--graphite)", letterSpacing: "-0.02em" }}>{item.num}</div>
                  <div style={{ fontSize: "11px", color: "var(--stone)", marginTop: "2px" }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", height: "100%", minHeight: "560px", display: "flex", alignItems: "center", paddingLeft: "48px" }} className="hero-image-col">
            {/* SUBSTITUIR: trocar por imagem real de locação premium */}
            <div className="img-zoom-wrapper" style={{ width: "100%", height: "480px", opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.5s" }}>
              <div className="inner" style={{ width: "100%", height: "100%", background: "linear-gradient(160deg, #3A3A37 0%, #252523 40%, #1A1A18 100%)", display: "flex", alignItems: "flex-end", padding: "28px" }}>
                <div style={{ borderTop: "1px solid rgba(245,242,237,0.15)", paddingTop: "16px", width: "100%" }}>
                  <div style={{ fontSize: "10px", color: "rgba(245,242,237,0.4)", letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>Locação / Campanha Publicitária</div>
                  <div style={{ fontSize: "14px", color: "rgba(245,242,237,0.7)", marginTop: "4px", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>São Paulo · Espaço industrial premium</div>
                </div>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: "60px", left: "12px", background: "var(--copper)", padding: "20px 24px", maxWidth: "200px", opacity: loaded ? 1 : 0, transition: "opacity 1s ease 0.8s" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", fontWeight: 700, color: "white", lineHeight: 1, marginBottom: "6px" }}>01</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em", textTransform: "uppercase", lineHeight: 1.5 }}>Briefing ao<br />set conduzido</div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px", zIndex: 2, opacity: loaded ? 0.5 : 0, transition: "opacity 1s ease 1.2s" }}>
        <div style={{ fontSize: "9px", letterSpacing: "0.18em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", color: "var(--stone)" }}>scroll</div>
        <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, var(--stone), transparent)", animation: "scrollLine 2s ease-in-out infinite" }} />
      </div>
      <style>{`
        @keyframes scrollLine { 0%, 100% { opacity: 0.5; } 50% { opacity: 1; } }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; } .hero-copy { padding-right: 0 !important; } .hero-image-col { min-height: 340px !important; padding-left: 0 !important; } }
        @media (max-width: 600px) { .cred-strip { gap: 20px !important; } }
      `}</style>
    </section>
  );
}
