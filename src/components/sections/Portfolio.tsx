"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

// SUBSTITUIR: Troque os placeholders por imagens reais de locações
// Estrutura: { id, category, title, location, size: "wide" | "tall" | "square" }
const items = [
  { id: 1, category: "Campanha publicitária", title: "Espaço industrial premium", location: "São Paulo — Zona Norte", size: "wide", gradient: "linear-gradient(145deg, #2C2926 0%, #1A1714 100%)" },
  { id: 2, category: "Fashion film", title: "Residência com arquitetura contemporânea", location: "São Paulo — Jardins", size: "tall", gradient: "linear-gradient(145deg, #3A3530 0%, #252018 100%)" },
  { id: 3, category: "Série", title: "Casarão histórico restaurado", location: "São Paulo — Higienópolis", size: "square", gradient: "linear-gradient(145deg, #2E2B28 0%, #1C1A18 100%)" },
  { id: 4, category: "Branded content", title: "Cobertura com vista panorâmica", location: "São Paulo — Itaim Bibi", size: "square", gradient: "linear-gradient(145deg, #322E2A 0%, #201E1C 100%)" },
  { id: 5, category: "Videoclipe", title: "Galpão com pé-direito duplo", location: "São Paulo — Lapa", size: "wide", gradient: "linear-gradient(145deg, #28262A 0%, #18161A 100%)" },
  { id: 6, category: "Editorial de moda", title: "Estúdio com luz natural generosa", location: "São Paulo — Vila Madalena", size: "tall", gradient: "linear-gradient(145deg, #2A2D28 0%, #181C16 100%)" },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{ background: "var(--graphite)", padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      <div className="container-wide">
        {/* Header */}
        <RevealOnScroll>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "64px",
              flexWrap: "wrap",
              gap: "32px",
            }}
          >
            <div>
              <div
                className="section-label"
                style={{ marginBottom: "20px", color: "rgba(200,113,74,0.8)" }}
              >
                08 / Espaços e produções
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--ivory)",
                  maxWidth: "480px",
                }}
              >
                O repertório que<br />
                <em style={{ color: "var(--copper)", fontStyle: "italic" }}>
                  orienta a curadoria.
                </em>
              </h2>
            </div>
            <div style={{ maxWidth: "340px" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(245,242,237,0.45)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Locações com personalidade, operacionalidade e padrão visual.
                Cada espaço é avaliado com olhar de produção — não apenas de estética.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Main Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto",
            gap: "10px",
          }}
          className="portfolio-grid"
        >
          {/* Row 1: wide (8 cols) + tall (4 cols, spans 2 rows) */}
          <RevealOnScroll delay={0}>
            <PortfolioCard item={items[0]} style={{ gridColumn: "1 / 9", height: "340px" }} />
          </RevealOnScroll>
          <RevealOnScroll delay={80} style={{ gridColumn: "9 / 13", gridRow: "1 / 3" }}>
            <PortfolioCard item={items[1]} style={{ height: "100%", minHeight: "690px" }} />
          </RevealOnScroll>

          {/* Row 2: two squares */}
          <RevealOnScroll delay={120} style={{ gridColumn: "1 / 5" }}>
            <PortfolioCard item={items[2]} style={{ height: "340px" }} />
          </RevealOnScroll>
          <RevealOnScroll delay={160} style={{ gridColumn: "5 / 9" }}>
            <PortfolioCard item={items[3]} style={{ height: "340px" }} />
          </RevealOnScroll>

          {/* Row 3: wide full */}
          <RevealOnScroll delay={80} style={{ gridColumn: "1 / 9" }}>
            <PortfolioCard item={items[4]} style={{ height: "300px" }} />
          </RevealOnScroll>
          <RevealOnScroll delay={120} style={{ gridColumn: "9 / 13" }}>
            <PortfolioCard item={items[5]} style={{ height: "300px" }} />
          </RevealOnScroll>
        </div>

        {/* Bottom Note */}
        <RevealOnScroll delay={100}>
          <div
            style={{
              marginTop: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              flexWrap: "wrap",
              paddingTop: "40px",
              borderTop: "1px solid rgba(245,242,237,0.08)",
            }}
          >
            <p
              style={{
                fontSize: "14px",
                color: "rgba(245,242,237,0.4)",
                fontWeight: 300,
                maxWidth: "460px",
                lineHeight: 1.7,
              }}
            >
              {/* SUBSTITUIR: adicionar texto sobre portfólio real */}
              Esses são exemplos de tipos de locação que fazem parte do ecossistema Quickspot.
              Para demandas específicas fora do catálogo, a equipe realiza prospecção ativa.
            </p>
            <a href="#contato" className="btn-ghost-light">
              <span>Solicitar curadoria</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 7h12M7 1l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .portfolio-grid { grid-template-columns: 1fr 1fr !important; }
          .portfolio-grid > * { grid-column: auto !important; grid-row: auto !important; }
          .portfolio-grid > * > * { min-height: 260px !important; height: 260px !important; }
        }
        @media (max-width: 600px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function PortfolioCard({
  item,
  style = {},
}: {
  item: (typeof items)[0];
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="portfolio-card"
      style={{
        position: "relative",
        overflow: "hidden",
        cursor: "pointer",
        ...style,
      }}
    >
      {/* SUBSTITUIR: trocar background por <Image> do Next.js com imagem real */}
      <div
        className="portfolio-inner"
        style={{
          width: "100%",
          height: "100%",
          background: item.gradient,
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          position: "relative",
        }}
      >
        {/* Overlay gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(10,10,9,0.85) 0%, transparent 55%)",
            zIndex: 1,
          }}
        />

        {/* Grid lines decoration */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(245,242,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,242,237,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            zIndex: 0,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "24px",
            zIndex: 2,
          }}
        >
          <div
            style={{
              fontSize: "9px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--copper)",
              marginBottom: "8px",
            }}
          >
            {item.category}
          </div>
          <div
            style={{
              fontSize: "14px",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              color: "var(--ivory)",
              marginBottom: "4px",
              letterSpacing: "-0.01em",
            }}
          >
            {item.title}
          </div>
          <div
            style={{
              fontSize: "11px",
              fontFamily: "'Inter', sans-serif",
              color: "rgba(245,242,237,0.4)",
              letterSpacing: "0.04em",
            }}
          >
            {item.location}
          </div>
        </div>

        {/* Hover arrow */}
        <div
          className="portfolio-hover-icon"
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "36px",
            height: "36px",
            border: "1px solid rgba(245,242,237,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 11L11 1M11 1H4M11 1V8"
              stroke="rgba(245,242,237,0.8)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <style>{`
        .portfolio-card:hover .portfolio-inner { transform: scale(1.04); }
        .portfolio-card:hover .portfolio-hover-icon { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
