"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

const services = [
  { num: "01", title: "Curadoria de Locações", body: "Seleção criteriosa de espaços com base no briefing visual, técnico e operacional da produção. Cada indicação leva em conta não só a estética, mas a viabilidade real para o projeto.", tag: "Acervo + rede" },
  { num: "02", title: "Busca Ativa Fora do Catálogo", body: "Quando o espaço ideal não está disponível, a Quickspot vai atrás. Prospecção ativa, abordagem direta com proprietários e mapeamento de locações específicas para a demanda.", tag: "Prospecção sob demanda" },
  { num: "03", title: "Visita Técnica", body: "Reconhecimento presencial do espaço com olhar de produção: acesso, elétrica, fluxo de câmera, pontos críticos e viabilidade para a escala da produção.", tag: "Operação em campo" },
  { num: "04", title: "Negociação e Alinhamento", body: "Contato e negociação diretos com anfitriões e proprietários. Alinhamento de condições, valores, janelas de tempo, equipe e expectativas — antes de qualquer compromisso.", tag: "Relação com anfitriões" },
  { num: "05", title: "Acompanhamento de Produção", body: "Presença antes, durante e depois. A Quickspot acompanha a execução da locação para garantir que o que foi combinado aconteça — com fluidez, responsabilidade e cuidado.", tag: "Suporte completo" },
  { num: "06", title: "Apoio Operacional", body: "Coordenação entre equipe de produção e espaço, cuidado com o patrimônio do anfitrião, gestão de imprevistos e manutenção da relação de confiança durante toda a produção.", tag: "Execução com padrão" },
];

export default function Services() {
  return (
    <section id="servicos" style={{ background: "var(--ivory)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, transparent, rgba(200,113,74,0.15) 20%, rgba(200,113,74,0.15) 80%, transparent)", pointerEvents: "none" }} />
      <div className="container-wide">
        <RevealOnScroll>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", marginBottom: "96px", alignItems: "end" }} className="services-header">
            <div>
              <div className="section-label" style={{ marginBottom: "20px" }}>03 / O que fazemos</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--graphite)" }}>
                Além da busca.<br /><em style={{ color: "var(--copper)", fontStyle: "italic" }}>Operação completa.</em>
              </h2>
            </div>
            <div><p style={{ fontSize: "15px", color: "var(--stone)", lineHeight: 1.85, fontWeight: 300, maxWidth: "440px" }}>A Quickspot atua tanto com acervo curado quanto com prospecção ativa fora do catálogo. Se a locação ideal não estiver pronta, a equipe busca, viabiliza e conduz — com o mesmo padrão de atenção em toda a jornada.</p></div>
          </div>
        </RevealOnScroll>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(26,26,24,0.07)" }} className="services-grid">
          {services.map((service, i) => (
            <RevealOnScroll key={service.num} delay={i * 70}>
              <div style={{ background: "var(--ivory)", padding: "44px 36px", transition: "background 0.3s ease", cursor: "default" }} className="service-card">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 700, color: "rgba(200,113,74,0.5)" }}>{service.num}</span>
                  <span className="tag-label" style={{ fontSize: "9px" }}>{service.tag}</span>
                </div>
                <div style={{ width: "32px", height: "2px", background: "var(--copper)", marginBottom: "20px", transition: "width 0.3s ease" }} className="service-line" />
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 600, color: "var(--graphite)", marginBottom: "12px", lineHeight: 1.35 }}>{service.title}</h3>
                <p style={{ fontSize: "13.5px", color: "var(--stone)", lineHeight: 1.8, fontWeight: 300 }}>{service.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll delay={200}>
          <div style={{ marginTop: "64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", flexWrap: "wrap", paddingTop: "40px", borderTop: "1px solid rgba(26,26,24,0.08)" }}>
            <p style={{ fontSize: "15px", color: "var(--stone)", fontWeight: 300, maxWidth: "480px", lineHeight: 1.7 }}><strong style={{ color: "var(--graphite)", fontWeight: 500 }}>Cada projeto é tratado como único.</strong> A abordagem consultiva significa que o atendimento começa antes mesmo da proposta.</p>
            <a href="#contato" className="btn-primary"><span>Solicitar curadoria</span><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
          </div>
        </RevealOnScroll>
      </div>
      <style>{`.service-card:hover { background: var(--cream) !important; } .service-card:hover .service-line { width: 56px !important; } @media (max-width: 900px) { .services-grid { grid-template-columns: repeat(2, 1fr) !important; } .services-header { grid-template-columns: 1fr !important; gap: 32px !important; } } @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
