"use client";

import { useEffect, useRef, useState } from "react";
import type { Card } from "./types";

export function CardView({ card, focal }: { card: Card; focal: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  // Autoplay the focal card's video, pause it when it leaves focus.
  // Muted is required for programmatic autoplay to be allowed.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (focal) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [focal]);

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

  const isVideo = card.src && card.type === "video";

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  };

  return (
    <div
      className={`card${focal ? " focal" : ""}`}
      onClick={isVideo ? togglePlay : undefined}
    >
      {isVideo ? (
        <video
          ref={videoRef}
          className="card-media"
          style={{ objectFit: card.fit ?? "cover" }}
          src={card.src}
          poster={card.poster}
          muted
          loop
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />
      ) : card.src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="card-media"
          style={{ objectFit: card.fit ?? "contain" }}
          src={card.src}
          alt={card.label}
          draggable={false}
        />
      ) : (
        <div className={`card-media${card.tone ? ` ${card.tone}` : ""}`} />
      )}
      {card.play && focal && <div className="drag-chip">Drag</div>}
      {(isVideo ? !playing : card.play && !card.src) && (
        <div className="play-badge" />
      )}
      <span className="card-label">{card.label}</span>
      <span className="card-ratio">{card.ratio}</span>
    </div>
  );
}
