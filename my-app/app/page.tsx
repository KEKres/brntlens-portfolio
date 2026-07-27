import { EndMark } from "@/components/portfolio/end-mark";
import { PortfolioNav } from "@/components/portfolio/nav";
import { ProjectSection } from "@/components/portfolio/project-section";
import { WorkHero } from "@/components/portfolio/work-hero";
import { projects } from "@/components/portfolio/data";

export default function Home() {
  return (
    <div className="portfolio">
      <PortfolioNav />
      <WorkHero />
      <main id="work">
        {projects.map((p) => (
          <ProjectSection key={p.name.join(" ")} project={p} />
        ))}
      </main>
      <EndMark />
    </div>
  );
}
