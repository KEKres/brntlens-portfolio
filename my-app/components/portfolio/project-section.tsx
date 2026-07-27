"use client";

import { useEffect, useRef } from "react";
import { Strip } from "./strip";
import type { Project } from "./types";

export function ProjectSection({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in-view");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="project anim-self">
      <div className="proj-intro">
        <h2 className="proj-name">
          {project.name[0]} <em>{project.name[1]}</em>
        </h2>
        <p className="proj-meta">{project.meta}</p>
      </div>
      <Strip project={project} />
    </section>
  );
}
