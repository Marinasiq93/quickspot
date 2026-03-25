"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

const audiences = [
  {
    num: "01",
    title: "Produtoras",
    body: "Equipes com produções recorrentes que precisam de um parceiro confiável para locações — com repertório, agilidade e padrão de entrega consistente.",
  },
  {
    num: "02",
    title: "Agências de publicidade",
    body: "Atendimento alinhado ao ritmo de agência: briefings que evoluem, prazos curtos e exigência criativa elevada. A Quickspot acompanha cada etapa.",
  },
  {
    num: "03",
    title: "Diretores e produtores de locação",
    body: "Para quem tem o olhar apurado e sabe o que quer. A Quickspot funciona como extensão de campo — viabilizando o que o scouting independente não consegue sozinho.",
  },
  {
    num: "04",
    title: "Marcas com demanda própria",
    body: "Marcas que produzem conteúdo de alto padrão internamente e precisam de suporte especializado em locação — com discrição, qualidade e execução confiável.",
  },
  {
    num: "05",
    title: "Diretores de cinema e série",
    body: "Produções com necessidades específicas de ambiente, período e logística. A Quickspot entende a linguagem cinematográfica e atua com o nível de cuidado que o projeto exige.",
  },
  {
    num: "06",
    title: "Fashion films e editoriais",
    body: "Projetos que dependem de estética apurada e atmosfera precisa. Curadoria com sensibilidade visual e olhar treinado para o universo de moda e imagem.",
  },
];

const categories = [
  "Campanhas publicitárias",
  "Filmes e séries",
  "Fashion films",
  "Videoclipes",
  "Branded content",
  "Editoriais de moda",
  "Conteúdo institucional",
  "Projetos com múltiplas locações",
];

export default function ForWho() {
  return (
    <section
      id="para-quem"
      style={{
        background: "var(--dark-section)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background texture lines */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            "repeating-linear-gradient(90deg, rgba(245,242,237,0.025) 0px, rgba(245,242,237,0.025) 1px, transparent 1px, transparent 14%)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <RevealOnScroll>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "60px",
              marginBottom: "96px",
              alignItems: "end",
            }}
            className="forwho-header"
          >
            <div>
              <div
                className="section-label"
                style={{ marginBottom: "20px", color: "rgba(200,113,74,0.8)" }}
              >
                06 / Para quem é
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  color: "var(--ivory)",
                }}
              >
                Feito para quem<br />
                <em style={{ color: "var(--copper)", fontStyle: "italic" }}>
                  produz com padrão.
                </em>
              </h2>
            </div>
            <div>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(245,242,237,0.5)",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  maxWidth: "440px",
                }}
              >
                A Quickspot é parceira de quem leva locação a sério — produtoras,
                agências, marcas e diretores que precisam de mais do que uma lista de
                endereços.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(245,242,237,0.06)",
            marginBottom: "80px",
          }}
          className="forwho-grid"
        >
          {audiences.map((item, i) => (
            <RevealOnScroll key={item.num} delay={i * 60}>
              <div
                style={{
                  background: "var(--dark-section)",
                  padding: "40px 32px",
                  borderBottom: "1px solid rgba(245,242,237,0.06)",
                  transition: "background 0.3s ease",
                }}
                className="forwho-card"
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "rgba(200,113,74,0.45)",
                    marginBottom: "20px",
                    letterSpacing: "0.12em",
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--ivory)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "rgba(245,242,237,0.45)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {item.body}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={100}>
          <div
            style={{
              borderTop: "1px solid rgba(245,242,237,0.1)",
              paddingTop: "56px",
              display: "flex",
              gap: "80px",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "0 0 auto" }}>
              <div
                className="section-label"
                style={{
                  marginBottom: "28px",
                  color: "rgba(245,242,237,0.3)",
                  fontSize: "9px",
                }}
              >
                Tipos de produção
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  maxWidth: "600px",
                }}
              >
                {categories.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      display: "inline-block",
                      padding: "7px 16px",
                      border: "1px solid rgba(245,242,237,0.12)",
                      fontSize: "12px",
                      fontFamily: "'Inter', sans-serif",
                      color: "rgba(245,242,237,0.5)",
                      letterSpacing: "0.04em",
                      background: "rgba(245,242,237,0.03)",
                      transition: "all 0.25s ease",
                    }}
                    className="cat-tag"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ flex: "1", minWidth: "260px" }}>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(245,242,237,0.4)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  marginBottom: "32px",
                  maxWidth: "380px",
                }}
              >
                Se o seu projeto exige discrição, padrão visual elevado e operação
                organizada — a Quickspot está preparada para isso.
              </p>
              <a href="#contato" className="btn-ghost-light">
                <span>Enviar briefing</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
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
          </div>
        </RevealOnScroll>
      </div>

      <style>{`
        .forwho-card:hover { background: rgba(245,242,237,0.03) !important; }
        .cat-tag:hover { border-color: rgba(200,113,74,0.4) !important; color: rgba(245,242,237,0.8) !important; }
        @media (max-width: 900px) {
          .forwho-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .forwho-header { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 600px) {
          .forwho-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
