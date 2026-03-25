"use client";

const items = ["Curadoria de Locações","Scouting Ativo","Visita Técnica","Negociação com Anfitriões","Apoio Operacional","Produções Complexas","Campanhas Publicitárias","Filmes & Séries","Fashion Films","Branded Content","Briefing ao Set"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ background: "var(--graphite)", padding: "18px 0", overflow: "hidden", borderTop: "1px solid rgba(245,242,237,0.06)", borderBottom: "1px solid rgba(245,242,237,0.06)" }}>
      <div className="animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: i % 2 === 0 ? "rgba(245,242,237,0.5)" : "var(--copper)", padding: "0 32px", whiteSpace: "nowrap", display: "inline-flex", alignItems: "center", gap: "32px" }}>
            {item}
            <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(200,113,74,0.4)", display: "inline-block", flexShrink: 0 }} />
          </span>
        ))}
      </div>
    </div>
  );
}
