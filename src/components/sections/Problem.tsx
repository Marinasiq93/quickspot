"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

const painPoints = [
  { num: "01", title: "O espaço bonito não basta", body: "Uma locação precisa ser viável, não só fotogênica. Isso envolve acesso de equipe, carga elétrica, janelas de tempo, e um proprietário que entenda o que uma produção realmente demanda." },
  { num: "02", title: "Disponibilidade não é o mesmo que prontidão", body: "Muitos espaços estão 'disponíveis', mas não estão preparados para uma grande produção. Adaptações, alinhamentos e negociações precisam acontecer antes — e alguém precisa conduzir isso." },
  { num: "03", title: "O espaço ideal frequentemente não está listado", body: "Produções exigentes raramente encontram o que precisam em um catálogo padrão. A locação certa muitas vezes exige prospecção ativa, relacionamento e capacidade de viabilizar o que ainda não existe." },
  { num: "04", title: "Sem acompanhamento, os riscos se multiplicam", body: "A relação com anfitriões, a logística no dia, o cuidado com o patrimônio — quando ninguém cuida disso com atenção, a produção paga o preço. Em tempo, em imprevistos, em confiança perdida." },
];

export default function Problem() {
  return (
    <section id="problema" style={{ background: "var(--cream)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40px", right: "-20px", fontFamily: "'Playfair Display', serif", fontSize: "clamp(160px, 20vw, 280px)", fontWeight: 900, color: "transparent", WebkitTextStroke: "1px rgba(26,26,24,0.04)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>02</div>
      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <RevealOnScroll>
          <div style={{ marginBottom: "80px", maxWidth: "640px" }}>
            <div className="section-label" style={{ marginBottom: "20px" }}>O problema real</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--graphite)", marginBottom: "24px" }}>
              Produções maiores precisam de mais do que{" "}<em style={{ fontStyle: "italic", color: "var(--copper)" }}>uma lista de espaços.</em>
            </h2>
            <p style={{ fontSize: "16px", color: "var(--stone)", lineHeight: 1.75, fontWeight: 300 }}>Encontrar uma locação para uma produção que exige padrão, fluxo, controle e sensibilidade não se resolve com uma busca rápida. Precisa de alguém que entenda de produção — e que opere com isso em mente.</p>
          </div>
        </RevealOnScroll>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1px", background: "rgba(26,26,24,0.08)" }} className="pain-grid">
          {painPoints.map((point, i) => (
            <RevealOnScroll key={point.num} delay={i * 80}>
              <div style={{ background: "var(--cream)", padding: "48px 40px", transition: "background 0.3s ease" }} className="pain-card">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 700, color: "var(--copper-muted)", marginBottom: "20px" }}>{point.num}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "17px", fontWeight: 600, color: "var(--graphite)", marginBottom: "14px", lineHeight: 1.35 }}>{point.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--stone)", lineHeight: 1.8, fontWeight: 300 }}>{point.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={200}>
          <div style={{ marginTop: "80px", padding: "48px", background: "var(--graphite)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "40px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "280px" }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "16px" }}>A virada</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "var(--ivory)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>A Quickspot entra exatamente onde o catálogo para.</h3>
            </div>
            <div style={{ flex: "1", minWidth: "280px" }}>
              <p style={{ fontSize: "15px", color: "rgba(245,242,237,0.55)", lineHeight: 1.8, fontWeight: 300, marginBottom: "28px" }}>Com abordagem consultiva e operacional, a Quickspot assume a locação como parte integrante da produção — não como serviço paralelo.</p>
              <a href="#servicos" className="btn-ghost-light"><span>Ver como atuamos</span></a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <style>{`.pain-card:hover { background: var(--ivory-dark) !important; } @media (max-width: 700px) { .pain-grid { grid-template-columns: 1fr !important; } .pain-card { padding: 36px 28px !important; } }`}</style>
    </section>
  );
}
