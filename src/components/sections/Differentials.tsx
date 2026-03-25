"use client";
import RevealOnScroll from "../ui/RevealOnScroll";

const differentials = [
  { title: "Além do catálogo", body: "A Quickspot não se limita ao que está listado. Para demandas específicas, ativamos prospecção ativa — abordagem direta a proprietários, mapeamento de espaços inéditos e viabilização do que ainda não está pronto para locação.", accent: true },
  { title: "Curadoria com olhar de produção", body: "Não selecionamos espaços apenas pela estética. Cada indicação considera operacionalidade, logística, viabilidade técnica e adequação ao briefing visual da produção.", accent: false },
  { title: "Relação cuidadosa com anfitriões", body: "O sucesso de uma locação depende da confiança entre produção e proprietário. A Quickspot cuida dessa relação — com respeito, comunicação clara e responsabilidade em campo.", accent: false },
  { title: "Presença real em campo", body: "Não somos uma plataforma que desaparece após a reserva. Estamos presentes antes, durante e depois — para garantir que o que foi combinado se cumpra com qualidade.", accent: false },
  { title: "Atendimento consultivo", body: "Cada projeto começa por uma escuta real. Entendemos a produção, o nível de exigência, as restrições e os objetivos — para propor locações que fazem sentido, não apenas espaços que estão disponíveis.", accent: false },
  { title: "Repertório visual e sensibilidade criativa", body: "A equipe da Quickspot tem repertório no universo audiovisual. Entendemos o que uma produção precisa ver — e o que ela não pode abrir mão. Isso muda completamente a qualidade da curadoria.", accent: false },
];

export default function Differentials() {
  return (
    <section id="diferenciais" style={{ background: "var(--graphite)", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", bottom: "-40px", left: "-20px", fontFamily: "'Playfair Display', serif", fontSize: "clamp(180px, 22vw, 320px)", fontWeight: 900, color: "transparent", WebkitTextStroke: "1px rgba(245,242,237,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>04</div>
      <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
        <RevealOnScroll>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "40px", marginBottom: "80px", flexWrap: "wrap" }}>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--copper)", marginBottom: "20px" }}>04 / Diferenciais</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--ivory)", maxWidth: "560px" }}>Por que produções exigentes<em style={{ color: "var(--copper)", fontStyle: "italic" }}> escolhem a Quickspot.</em></h2>
            </div>
            <div style={{ maxWidth: "360px" }}><p style={{ fontSize: "14px", color: "rgba(245,242,237,0.45)", lineHeight: 1.85, fontWeight: 300 }}>A diferença entre uma locação que funciona e uma que cria problemas está em quem está conduzindo.</p></div>
          </div>
        </RevealOnScroll>
        <div>
          {differentials.map((diff, i) => (
            <RevealOnScroll key={i} delay={i * 60}>
              <div style={{ display: "grid", gridTemplateColumns: "60px 1fr 1fr", gap: "40px", alignItems: "start", padding: "40px 0", borderBottom: "1px solid rgba(245,242,237,0.06)", transition: "background 0.3s ease" }} className="diff-row">
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "13px", fontWeight: 700, color: diff.accent ? "var(--copper)" : "rgba(245,242,237,0.2)", paddingTop: "3px" }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: "clamp(16px, 1.6vw, 19px)", fontWeight: 500, color: diff.accent ? "var(--copper)" : "var(--ivory)", lineHeight: 1.35 }}>{diff.title}</h3>
                <p style={{ fontSize: "14px", color: "rgba(245,242,237,0.5)", lineHeight: 1.85, fontWeight: 300 }}>{diff.body}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
      <style>{`.diff-row:hover { background: rgba(245,242,237,0.02); } @media (max-width: 800px) { .diff-row { grid-template-columns: 40px 1fr !important; gap: 20px !important; } .diff-row > *:last-child { grid-column: 2 !important; } } @media (max-width: 500px) { .diff-row { grid-template-columns: 1fr !important; padding: 28px 0 !important; } .diff-row > *:first-child { display: none !important; } }`}</style>
    </section>
  );
}
