"use client";
import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll";

const productionTypes = [
  "Campanha publicitária",
  "Filme / Série",
  "Fashion film",
  "Videoclipe",
  "Branded content",
  "Editorial de moda",
  "Outro",
];

export default function Contact() {
  const [selected, setSelected] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // SUBSTITUIR: conectar ao backend, Formspree, Notion API, etc.
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      style={{
        background: "var(--dark-section)",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background elements */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle at bottom left, rgba(200,113,74,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "10%",
          width: "1px",
          height: "100%",
          background: "rgba(245,242,237,0.04)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "96px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left: Copy */}
          <RevealOnScroll direction="left">
            <div>
              <div
                className="section-label"
                style={{ marginBottom: "24px", color: "rgba(200,113,74,0.7)" }}
              >
                10 / Enviar briefing
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(32px, 4vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.02em",
                  color: "var(--ivory)",
                  marginBottom: "28px",
                }}
              >
                Tem uma produção<br />fora do padrão?
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  color: "rgba(245,242,237,0.5)",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  marginBottom: "48px",
                  maxWidth: "400px",
                }}
              >
                Quando a locação precisa acompanhar a ambição da produção, a Quickspot
                entra. Compartilhe o briefing — mesmo que incompleto — e a equipe
                retorna com atenção real.
              </p>

              {/* Bullets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  "Resposta em até 24h",
                  "Atendimento consultivo desde o primeiro contato",
                  "Curadoria personalizada para o seu projeto",
                  "Prospecção ativa se necessário",
                ].map((bullet) => (
                  <div key={bullet} style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        background: "var(--copper)",
                        flexShrink: 0,
                        borderRadius: "50%",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(245,242,237,0.55)",
                        fontWeight: 300,
                        lineHeight: 1.5,
                      }}
                    >
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Alternative contact */}
              <div
                style={{
                  marginTop: "56px",
                  paddingTop: "40px",
                  borderTop: "1px solid rgba(245,242,237,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    color: "rgba(245,242,237,0.3)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    fontFamily: "'Inter', sans-serif",
                    marginBottom: "14px",
                  }}
                >
                  Contato direto
                </div>
                {/* SUBSTITUIR: trocar por e-mail e WhatsApp reais */}
                <a
                  href="mailto:producoes@quickspot.com.br"
                  style={{
                    display: "block",
                    fontSize: "15px",
                    color: "rgba(245,242,237,0.6)",
                    fontWeight: 300,
                    marginBottom: "8px",
                    transition: "color 0.2s ease",
                  }}
                  className="contact-link"
                >
                  producoes@quickspot.com.br
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "14px",
                    color: "rgba(200,113,74,0.7)",
                    fontWeight: 400,
                    transition: "color 0.2s ease",
                  }}
                  className="contact-link-wa"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652c1.746.943 3.71 1.444 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896.001-3.176-1.24-6.165-3.48-8.45z"
                      fill="currentColor"
                      opacity="0.8"
                    />
                  </svg>
                  WhatsApp para produtoras
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right: Form */}
          <RevealOnScroll direction="right" delay={100}>
            <div
              style={{
                background: "rgba(245,242,237,0.04)",
                border: "1px solid rgba(245,242,237,0.07)",
                padding: "48px 44px",
              }}
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "48px 0",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      border: "1px solid rgba(200,113,74,0.4)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                      <path
                        d="M4 11l5 5L18 6"
                        stroke="var(--copper)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: "var(--ivory)",
                    }}
                  >
                    Briefing recebido.
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "rgba(245,242,237,0.45)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      maxWidth: "320px",
                    }}
                  >
                    A equipe Quickspot vai analisar e retornar em até 24h com atenção ao
                    que foi compartilhado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <label className="form-label">Nome completo *</label>
                    <input className="form-input" type="text" placeholder="Seu nome" required />
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div>
                      <label className="form-label">E-mail *</label>
                      <input className="form-input" type="email" placeholder="seu@email.com" required />
                    </div>
                    <div>
                      <label className="form-label">WhatsApp</label>
                      <input className="form-input" type="tel" placeholder="(11) 99999-9999" />
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Empresa / Produtora</label>
                    <input className="form-input" type="text" placeholder="Nome da empresa" />
                  </div>

                  <div>
                    <label className="form-label">Tipo de produção *</label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                      {productionTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelected(selected === type ? "" : type)}
                          style={{
                            padding: "7px 16px",
                            fontSize: "12px",
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: "0.03em",
                            cursor: "pointer",
                            border: "1px solid",
                            borderColor:
                              selected === type
                                ? "var(--copper)"
                                : "rgba(245,242,237,0.12)",
                            background:
                              selected === type
                                ? "rgba(200,113,74,0.15)"
                                : "transparent",
                            color:
                              selected === type
                                ? "var(--copper)"
                                : "rgba(245,242,237,0.4)",
                            transition: "all 0.2s ease",
                          }}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="form-label">Briefing / Descrição do projeto *</label>
                    <textarea
                      className="form-input"
                      rows={5}
                      placeholder="Descreva o projeto, data aproximada, locação que procura, referências visuais ou qualquer detalhe relevante..."
                      required
                      style={{ resize: "vertical", minHeight: "120px" }}
                    />
                  </div>

                  <button type="submit" className="btn-copper" style={{ width: "100%", justifyContent: "center" }}>
                    <span>Enviar briefing</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <p style={{ fontSize: "11px", color: "rgba(245,242,237,0.25)", textAlign: "center", lineHeight: 1.6 }}>
                    Seus dados são tratados com responsabilidade e não são compartilhados com terceiros.
                  </p>
                </form>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>

      <style>{`
        .form-label {
          display: block;
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(245,242,237,0.35);
          margin-bottom: 10px;
        }
        .form-input {
          width: 100%;
          background: rgba(245,242,237,0.04);
          border: 1px solid rgba(245,242,237,0.1);
          color: var(--ivory);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 300;
          padding: 13px 16px;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .form-input::placeholder { color: rgba(245,242,237,0.2); }
        .form-input:focus { border-color: rgba(200,113,74,0.5); }
        .contact-link:hover { color: rgba(245,242,237,0.9) !important; }
        .contact-link-wa:hover { color: var(--copper) !important; opacity: 1 !important; }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 56px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
