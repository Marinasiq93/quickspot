"use client";
import { useState } from "react";
import RevealOnScroll from "../ui/RevealOnScroll";

const faqs = [
  {
    q: "A Quickspot trabalha apenas com espaços do catálogo?",
    a: "Não. O catálogo é ponto de partida, não limite. Para demandas específicas, a Quickspot realiza prospecção ativa: mapeamento de espaços inéditos, abordagem direta a proprietários e viabilização de locações que ainda não estão prontas para receber produções. Se o espaço ideal não está listado, a equipe vai atrás.",
  },
  {
    q: "Vocês ajudam a encontrar locações específicas sob demanda?",
    a: "Sim. Esse é um dos pilares da atuação da Quickspot. A equipe recebe o briefing, entende o nível e as necessidades da produção, e inicia um processo de busca ativa — seja dentro do ecossistema próprio, seja por prospecção externa. Não trabalhamos com busca genérica: cada indicação é pensada para o projeto.",
  },
  {
    q: "A Quickspot acompanha produções de maior porte?",
    a: "Sim. A Quickspot está preparada para projetos com múltiplas variáveis — equipe grande, exigências técnicas específicas, dias de filmagem extensos ou necessidades operacionais complexas. O acompanhamento inclui o alinhamento prévio com o anfitrião, presença durante as filmagens e encerramento responsável da locação.",
  },
  {
    q: "Vocês fazem visita técnica antes da locação?",
    a: "Quando o projeto exige, sim. A visita técnica é parte do processo consultivo da Quickspot — reconhecimento presencial com olhar de produção: análise de acesso, elétrica, fluxo de câmera, pontos críticos e adequação ao escopo da produção. Isso reduz riscos e aumenta a qualidade da execução.",
  },
  {
    q: "A Quickspot atende apenas São Paulo ou também outras praças?",
    a: "A base principal de operação é São Paulo, com um ecossistema amplo de espaços na cidade e região metropolitana. Para projetos em outras praças, a Quickspot pode atuar em parceria ou acionar sua rede — dependendo do escopo e necessidade. Entre em contato para conversar sobre o seu projeto.",
  },
  {
    q: "Posso enviar um briefing mesmo sem ter todas as definições do projeto?",
    a: "Pode e deve. O atendimento consultivo da Quickspot começa antes mesmo das definições finais. Compartilhe o que você tem — referências visuais, conceito, data aproximada, escala da produção — e a equipe ajuda a organizar os próximos passos. Quanto antes, melhor para o resultado.",
  },
  {
    q: "Como funciona a relação da Quickspot com os anfitriões?",
    a: "A Quickspot cuida da relação com proprietários e anfitriões com atenção e responsabilidade. Isso inclui comunicação clara sobre o escopo da produção, alinhamento de expectativas, cuidado com o patrimônio e encerramento adequado da locação. Essa atenção protege tanto a produção quanto o espaço.",
  },
  {
    q: "A Quickspot atua na negociação de valores e condições?",
    a: "Sim. A negociação com anfitriões é parte integral do serviço. A Quickspot conduz esse processo — valores, janelas de tempo, condições de uso, equipe permitida, cobertura de seguro quando necessário — para que a produção receba uma proposta viável e sem surpresas.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{ background: "var(--ivory)", padding: "120px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "15%",
          width: "3px",
          height: "70%",
          background: "linear-gradient(to bottom, transparent, var(--copper-muted) 30%, var(--copper-muted) 70%, transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="container-wide">
        {/* Header */}
        <RevealOnScroll>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 2fr",
              gap: "80px",
              marginBottom: "80px",
              alignItems: "end",
            }}
            className="faq-header"
          >
            <div>
              <div className="section-label" style={{ marginBottom: "20px" }}>
                09 / Perguntas frequentes
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  color: "var(--graphite)",
                }}
              >
                Direto ao<br />
                <em style={{ color: "var(--copper)", fontStyle: "italic" }}>
                  ponto.
                </em>
              </h2>
            </div>
            <p
              style={{
                fontSize: "15px",
                color: "var(--stone)",
                lineHeight: 1.85,
                fontWeight: 300,
                maxWidth: "480px",
              }}
            >
              Perguntas que surgem com frequência em briefings e primeiros contatos.
              Se a sua dúvida não está aqui, a equipe responde diretamente.
            </p>
          </div>
        </RevealOnScroll>

        {/* FAQ Items */}
        <RevealOnScroll delay={80}>
          <div style={{ maxWidth: "900px" }}>
            {faqs.map((item, i) => (
              <div key={i} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <div style={{ display: "flex", alignItems: "baseline", gap: "20px", flex: 1 }}>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "var(--copper)",
                        opacity: 0.6,
                        flexShrink: 0,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "clamp(14px, 1.3vw, 16px)",
                        fontWeight: 500,
                        color: "var(--graphite)",
                        lineHeight: 1.4,
                        textAlign: "left",
                      }}
                    >
                      {item.q}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: "1px solid rgba(26,26,24,0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.3s ease, border-color 0.3s ease",
                      background: open === i ? "var(--graphite)" : "transparent",
                      borderColor: open === i ? "var(--graphite)" : "rgba(26,26,24,0.15)",
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      style={{
                        transform: open === i ? "rotate(45deg)" : "none",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <path
                        d="M6 1v10M1 6h10"
                        stroke={open === i ? "var(--ivory)" : "var(--graphite)"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>
                <div
                  className="faq-answer"
                  style={{
                    maxHeight: open === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <p
                    style={{
                      paddingLeft: "31px",
                      paddingBottom: "28px",
                      color: "var(--stone)",
                      fontSize: "15px",
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    {item.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Bottom CTA */}
        <RevealOnScroll delay={200}>
          <div
            style={{
              marginTop: "72px",
              paddingTop: "48px",
              borderTop: "1px solid rgba(26,26,24,0.08)",
              display: "flex",
              alignItems: "center",
              gap: "32px",
              flexWrap: "wrap",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "var(--stone)",
                fontWeight: 300,
                lineHeight: 1.7,
              }}
            >
              Tem uma dúvida específica sobre o seu projeto?
            </p>
            <a href="#contato" className="btn-secondary">
              <span>Falar com a Quickspot</span>
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
        @media (max-width: 768px) {
          .faq-header { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
