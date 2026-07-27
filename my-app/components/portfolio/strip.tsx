"use client";

import { useEffect, useRef, useState } from "react";
import { CardView } from "./card-view";
import type { Project } from "./types";

// Infinite carousel strip: cards are rendered three times ([clones][real][clones]);
// when the virtual index drifts a full set away it jumps back silently.
export function Strip({ project }: { project: Project }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const virtualRef = useRef(0);
  const [virtual, setVirtual] = useState(0);
  const N = project.cards.length;
  const mod = (i: number) => ((i % N) + N) % N;

  useEffect(() => {
    const wrap = wrapRef.current!;
    const strip = stripRef.current!;
    let startX = 0,
      startY = 0,
      offset = 0,
      dragging = false,
      axisLocked: "x" | "y" | null = null;

    const step = () => {
      const first = strip.children[0] as HTMLElement;
      return (
        first.getBoundingClientRect().width +
        parseFloat(getComputedStyle(strip).gap || "0")
      );
    };
    const posOf = (v: number) => -(v + N) * step();
    const render = (x: number) => {
      strip.style.transform = `translateX(${x}px)`;
    };

    const goTo = (v: number) => {
      virtualRef.current = v;
      setVirtual(v);
      render(posOf(v));
    };

    const jump = () => {
      strip.style.transition = "none";
      render(posOf(virtualRef.current));
      requestAnimationFrame(() =>
        requestAnimationFrame(() => (strip.style.transition = ""))
      );
    };

    const normalize = () => {
      if (virtualRef.current >= N) {
        virtualRef.current -= N;
        setVirtual(virtualRef.current);
        jump();
      } else if (virtualRef.current <= -N) {
        virtualRef.current += N;
        setVirtual(virtualRef.current);
        jump();
      }
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      axisLocked = null;
      startX = e.clientX;
      startY = e.clientY;
      offset = posOf(virtualRef.current);
      wrap.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      if (axisLocked === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
        axisLocked = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
        if (axisLocked === "x") wrap.classList.add("dragging");
      }
      if (axisLocked !== "x") return;
      e.preventDefault();
      render(offset + dx);
    };
    const endDrag = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      wrap.classList.remove("dragging");
      const dx = e.clientX - startX;
      if (axisLocked === "x" && Math.abs(dx) > 50) {
        goTo(virtualRef.current + (dx < 0 ? 1 : -1));
      } else if (axisLocked === "x") {
        goTo(virtualRef.current);
      }
      axisLocked = null;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goTo(virtualRef.current + 1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goTo(virtualRef.current - 1);
      }
    };

    strip.addEventListener("transitionend", normalize);
    wrap.addEventListener("pointerdown", onDown);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerup", endDrag);
    wrap.addEventListener("pointercancel", endDrag);
    wrap.addEventListener("keydown", onKey);
    window.addEventListener("resize", jump);

    jump();

    return () => {
      strip.removeEventListener("transitionend", normalize);
      wrap.removeEventListener("pointerdown", onDown);
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerup", endDrag);
      wrap.removeEventListener("pointercancel", endDrag);
      wrap.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", jump);
    };
  }, [N]);

  const goToDot = (i: number) => {
    const cur = mod(virtualRef.current);
    let delta = i - cur;
    if (delta > N / 2) delta -= N;
    if (delta < -N / 2) delta += N;
    const v = virtualRef.current + delta;
    virtualRef.current = v;
    setVirtual(v);
    const strip = stripRef.current!;
    const first = strip.children[0] as HTMLElement;
    const step =
      first.getBoundingClientRect().width +
      parseFloat(getComputedStyle(strip).gap || "0");
    strip.style.transform = `translateX(${-(v + N) * step}px)`;
  };

  // [clones][real][clones]; focal index in the tripled list = virtual + N
  const tripled = [...project.cards, ...project.cards, ...project.cards];

  return (
    <>
      <div
        ref={wrapRef}
        className="strip-wrap"
        tabIndex={0}
        role="group"
        aria-label="Project carousel — use arrow keys to browse, loops both ways"
      >
        <div ref={stripRef} className="strip">
          {tripled.map((card, k) => (
            <CardView key={k} card={card} focal={k === virtual + N} />
          ))}
        </div>
      </div>
      <div className="proj-caption">
        <div className="proj-caption-text">
          <p>{project.caption[0]}</p>
          <p>{project.caption[1]}</p>
        </div>
        <span className="proj-year">{project.year}</span>
      </div>
      <div className="strip-dots">
        {project.cards.map((_, i) => (
          <button
            key={i}
            className={`s-dot${i === mod(virtual) ? " active" : ""}`}
            aria-label={`Go to card ${i + 1}`}
            onClick={() => goToDot(i)}
          />
        ))}
      </div>
    </>
  );
}
