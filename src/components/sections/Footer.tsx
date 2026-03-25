import RevealOnScroll from "../ui/RevealOnScroll";

const navLinks = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Para quem", href: "#para-quem" },
  { label: "FAQ", href: "#faq" },
  { label: "Enviar briefing", href: "#contato" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--graphite)",
        borderTop: "1px solid rgba(245,242,237,0.06)",
        padding: "80px 0 48px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "300px",
          height: "200px",
          background:
            "radial-gradient(circle at bottom right, rgba(200,113,74,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <RevealOnScroll>
          {/* Top row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              gap: "48px",
              alignItems: "start",
              marginBottom: "72px",
              paddingBottom: "56px",
              borderBottom: "1px solid rgba(245,242,237,0.07)",
            }}
            className="footer-top"
          >
            {/* Brand */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {/* Logo mark */}
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <circle cx="14" cy="14" r="13" stroke="rgba(245,242,237,0.5)" strokeWidth="1" />
                  <path d="M14 4 L22 10 L22 18 L14 24 L6 18 L6 10 Z" fill="none" stroke="rgba(200,113,74,0.6)" strokeWidth="1" />
                  <circle cx="14" cy="14" r="3" fill="rgba(245,242,237,0.8)" />
                </svg>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "17px",
                    fontWeight: 600,
                    color: "rgba(245,242,237,0.9)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  quickspot
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(245,242,237,0.3)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  maxWidth: "280px",
                }}
              >
                Curadoria e operação de locação para produções audiovisuais complexas.
                Da busca ao set — com padrão e responsabilidade.
              </p>
            </div>

            {/* CTA central */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                textAlign: "center",
              }}
              className="footer-cta"
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 700,
                  color: "var(--ivory)",
                  lineHeight: 1.3,
                  maxWidth: "280px",
                }}
              >
                Seu próximo projeto pede mais do que um espaço.
              </div>
              <a href="#contato" className="btn-copper" style={{ whiteSpace: "nowrap" }}>
                <span>Enviar briefing</span>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* Nav links */}
            <nav
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "14px",
              }}
              className="footer-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 400,
                    color: "rgba(245,242,237,0.4)",
                    letterSpacing: "0.02em",
                    transition: "color 0.2s ease",
                  }}
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </RevealOnScroll>

        {/* Bottom row */}
        <RevealOnScroll delay={100}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                color: "rgba(245,242,237,0.2)",
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.04em",
              }}
            >
              © {new Date().getFullYear()} Quickspot. Todos os direitos reservados.
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <span
                style={{
                  fontSize: "9px",
                  color: "rgba(245,242,237,0.18)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Curadoria &amp; Produção de Locação
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
              }}
            >
              {/* SUBSTITUIR: adicionar links reais para redes sociais */}
              <a
                href="#"
                style={{
                  fontSize: "11px",
                  color: "rgba(245,242,237,0.25)",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s ease",
                }}
                className="footer-social"
              >
                Instagram
              </a>
              <a
                href="#"
                style={{
                  fontSize: "11px",
                  color: "rgba(245,242,237,0.25)",
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.08em",
                  transition: "color 0.2s ease",
                }}
                className="footer-social"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .footer-link:hover { color: rgba(245,242,237,0.8) !important; }
        .footer-social:hover { color: var(--copper) !important; }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 48px !important; }
          .footer-nav { align-items: flex-start !important; flex-direction: row !important; flex-wrap: wrap !important; }
          .footer-cta { align-items: flex-start !important; text-align: left !important; }
        }
      `}</style>
    </footer>
  );
}
