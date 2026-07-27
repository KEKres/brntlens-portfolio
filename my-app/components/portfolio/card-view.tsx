import type { Card } from "./types";

export function CardView({ card, focal }: { card: Card; focal: boolean }) {
  if (card.kind === "detail") {
    return (
      <div className={`card detail${focal ? " focal" : ""}`}>
        <div>
          <p className="detail-label">The brief</p>
          <h3 className="detail-head">
            {card.head[0]}
            <br />
            <em>{card.head[1]}</em>
          </h3>
          <p className="detail-desc">{card.desc}</p>
        </div>
        <div className="detail-stats">
          {card.stats.map((s) => (
            <div className="stat" key={s.k}>
              <p className="stat-num">{s.num}</p>
              <p className="stat-k">{s.k}</p>
            </div>
          ))}
        </div>
        <a className="detail-link" href="#">
          {card.link}
        </a>
      </div>
    );
  }
  return (
    <div className={`card${focal ? " focal" : ""}`}>
      <div className={`card-media${card.tone ? ` ${card.tone}` : ""}`} />
      {card.play && focal && <div className="drag-chip">Drag</div>}
      {card.play && <div className="play-badge" />}
      <span className="card-label">{card.label}</span>
      <span className="card-ratio">{card.ratio}</span>
    </div>
  );
}
