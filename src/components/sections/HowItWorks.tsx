"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

const steps = [
  { num: "01", title: "Você envia o briefing", body: "Compartilha o projeto, o tipo de produção, referências visuais, data, orçamento estimado e necessidades específicas. Não precisa ter tudo definido — a conversa começa pela escuta.", detail: "Briefing inicial" },
  { num: "02", title: "Entendemos a produção", body: "A equipe mergulha no projeto para entender o nível de exigência, o que é imprescindível e o que pode ser adaptado. Aqui começa o trabalho consultivo.", detail: "Escuta e análise" },
  { num: "03", title: "Curadoria + busca ativa", body: "Acionamos o acervo curado e, se necessário, realizamos prospecção ativa de espaços fora do catálogo. Realizamos visita técnica e alinhamos viabilidade.", detail: "Scouting e viabilidade" },
  { num: "04", title: "Proposta com opções alinhadas", body: "Apresentamos um recorte qualificado de locações com informações técnicas, visuais e operacionais. Sem volume por volume — só o que realmente tem potencial para o projeto.", detail: "Apresentação consultiva" },
  { num: "05", title: "Operação e acompanhamento", body: "Conduzimos a negociação, o alinhamento com o anfitrião e o apoio na execução. Estamos em campo para garantir que a produção aconteça como planejado.", detail: "Do set ao encerramento" },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" style={{ background: "var(--ivory)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="container-wide">
        <RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "96px", alignItems: "end" }} className="how-header">
            <div>
              <div className="section-label" style={{ marginBottom: "20px" }}>05 / Como funciona</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--graphite)" }}>Do briefing<br /><em style={{ color: "var(--copper)", fontStyle: "italic" }}>ao set.</em></h2>
            </div>
            <div><p style={{ fontSize: "15px", color: "var(--stone)", lineHeight: 1.85, fontWeight: 300, maxWidth: "420px" }}>Um processo claro, conduzido com atenção. Cada etapa foi desenhada para que a produção tenha previsibilidade, confiança e suporte.</p></div>
          </div>
        </RevealOnScroll>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: "19px", top: "32px", bottom: "32px", width: "1px", background: "linear-gradient(to bottom, var(--copper) 0%, rgba(200,113,74,0.15) 100%)" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            {steps.map((step, i) => (
              <RevealOnScroll key={step.num} delay={i * 100}>
                <div style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "40px", paddingBottom: i < steps.length - 1 ? "56px" : "0", position: "relative" }} className="step-row">
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: i === 0 ? "var(--copper)" : "var(--ivory)", border: `2px solid ${i === 0 ? "var(--copper)" : "rgba(200,113,74,0.4)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, position: "relative", zIndex: 1 }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "11px", fontWeight: 700, color: i === 0 ? "white" : "var(--copper)" }}>{i + 1}</span>
                  </div>
                  <div style={{ padding: "6px 0 0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                      <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.8vw, 20px)", fontWeight: 600, color: "var(--graphite)", letterSpacing: "-0.01em" }}>{step.title}</h3>
                      <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--stone-light)", fontFamily: "'Inter', sans-serif" }}>{step.detail}</span>
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--stone)", lineHeight: 1.8, fontWeight: 300, maxWidth: "560px" }}>{step.body}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
        <RevealOnScroll delay={300}>
          <div style={{ marginTop: "80px", paddingTop: "48px", borderTop: "1px solid rgba(26,26,24,0.08)", display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
            <a href="#contato" className="btn-primary"><span>Enviar briefing</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            <span style={{ fontSize: "13px", color: "var(--stone)", fontWeight: 300, fontStyle: "italic" }}>Sem compromisso. Começa por uma conversa.</span>
          </div>
        </RevealOnScroll>
      </div>
      <style>{`@media (max-width: 768px) { .how-header { grid-template-columns: 1fr !important; gap: 28px !important; margin-bottom: 64px !important; } .step-row { gap: 24px !important; } }`}</style>
    </section>
  );
}
