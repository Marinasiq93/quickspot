"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

const stats = [
  { value: "+300", label: "Espaços no ecossistema Quickspot", sub: "acervo próprio + rede complementar" },
  { value: "7+", label: "Anos atuando em produção de locação", sub: "projetos audiovisuais de alto padrão" },
  { value: "100%", label: "Atendimento consultivo", sub: "sem self-service, sem catálogo frio" },
  { value: "24h", label: "Resposta de briefing", sub: "primeiras opções com agilidade real" },
];

// SUBSTITUIR: trocar por depoimentos reais quando disponíveis
const testimonials = [
  {
    quote:
      "A Quickspot entendeu o projeto antes de qualquer indicação. Recebemos opções que a gente jamais encontraria sozinho — e ainda com toda a negociação conduzida por eles.",
    author: "Diretora de Produção",
    company: "Produtora SP — Campanha publicitária",
  },
  {
    quote:
      "Precisávamos de um espaço industrial com características muito específicas e prazo curto. Eles foram a campo, encontraram e viabilizaram em 48h. Impressionante.",
    author: "Produtor Executivo",
    company: "Agência — Branded content",
  },
  {
    quote:
      "O que diferencia a Quickspot é o acompanhamento. Não é só 'encontrei o espaço'. É ter alguém do lado cuidando da relação com o proprietário do início ao fim.",
    author: "Diretora de Arte",
    company: "Fashion film — São Paulo",
  },
];

const demands = [
  "Casarões históricos em São Paulo",
  "Espaços industriais com pé-direito alto",
  "Coberturas com visibilidade urbana",
  "Estúdios com iluminação natural",
  "Ambientes com arquitetura brutalista",
  "Fazendas e propriedades rurais premium",
  "Apartamentos com identidade visual forte",
  "Espaços comerciais desativados",
  "Galpões com logística de acesso",
  "Locações com exclusividade total",
];

export default function Credibility() {
  return (
    <section
      id="credibilidade"
      style={{ background: "var(--ivory)", padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Decorative corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "320px",
          height: "320px",
          background:
            "radial-gradient(circle at top right, rgba(200,113,74,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide">
        {/* Section Header */}
        <RevealOnScroll>
          <div style={{ marginBottom: "96px" }}>
            <div className="section-label" style={{ marginBottom: "20px" }}>
              07 / Repertório e confiança
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "end",
              }}
              className="cred-header"
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--graphite)",
                }}
              >
                Construído sobre<br />
                <em style={{ color: "var(--copper)", fontStyle: "italic" }}>
                  projetos reais.
                </em>
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--stone)",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  maxWidth: "440px",
                }}
              >
                A credibilidade da Quickspot vem de um histórico de demandas
                complexas atendidas com padrão, atenção e presença real em campo.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Stats Row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(26,26,24,0.07)",
            marginBottom: "96px",
          }}
          className="stats-grid"
        >
          {stats.map((stat, i) => (
            <RevealOnScroll key={stat.value} delay={i * 80}>
              <div
                style={{
                  background: "var(--ivory)",
                  padding: "44px 32px",
                  transition: "background 0.3s ease",
                }}
                className="stat-card"
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(36px, 3.5vw, 52px)",
                    fontWeight: 700,
                    color: "var(--graphite)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: "14px",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--graphite)",
                    lineHeight: 1.4,
                    marginBottom: "6px",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "var(--stone-light)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {stat.sub}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Testimonials */}
        <RevealOnScroll>
          <div className="section-label" style={{ marginBottom: "40px" }}>
            Quem trabalhou com a Quickspot
          </div>
        </RevealOnScroll>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(26,26,24,0.07)",
            marginBottom: "96px",
          }}
          className="testimonials-grid"
        >
          {/* SUBSTITUIR: trocar por depoimentos reais */}
          {testimonials.map((t, i) => (
            <RevealOnScroll key={i} delay={i * 90}>
              <div
                style={{
                  background: "var(--cream)",
                  padding: "48px 36px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "32px",
                  minHeight: "280px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "36px",
                      color: "var(--copper)",
                      lineHeight: 1,
                      marginBottom: "20px",
                      opacity: 0.6,
                    }}
                  >
                    &ldquo;
                  </div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "15px",
                      fontStyle: "italic",
                      color: "var(--graphite)",
                      lineHeight: 1.75,
                      fontWeight: 400,
                    }}
                  >
                    {t.quote}
                  </p>
                </div>
                <div
                  style={{
                    borderTop: "1px solid rgba(26,26,24,0.1)",
                    paddingTop: "20px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "var(--graphite)",
                      letterSpacing: "0.04em",
                      marginBottom: "4px",
                    }}
                  >
                    {t.author}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--stone-light)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {t.company}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Demand Types */}
        <RevealOnScroll delay={100}>
          <div
            style={{
              background: "var(--graphite)",
              padding: "56px 48px",
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "60px",
              alignItems: "center",
            }}
            className="demands-block"
          >
            <div>
              <div
                className="section-label"
                style={{ color: "rgba(200,113,74,0.7)", marginBottom: "16px" }}
              >
                Exemplos de demandas
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--ivory)",
                  lineHeight: 1.3,
                }}
              >
                Tipos de locação<br />que viabilizamos
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {demands.map((d) => (
                <span
                  key={d}
                  style={{
                    display: "inline-block",
                    padding: "8px 18px",
                    border: "1px solid rgba(245,242,237,0.12)",
                    fontSize: "12px",
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(245,242,237,0.55)",
                    letterSpacing: "0.03em",
                    transition: "all 0.2s ease",
                  }}
                  className="demand-tag"
                >
                  {d}
                </span>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .stat-card:hover { background: var(--cream) !important; }
        .demand-tag:hover { border-color: rgba(200,113,74,0.4) !important; color: rgba(245,242,237,0.85) !important; }
        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .demands-block { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .cred-header { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
