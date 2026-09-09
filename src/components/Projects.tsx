import Reveal from '@/components/Reveal';
import LoadingDots from '@/components/LoadingDots';
import { projects } from '@/data';

export default function Projects() {
  return (
    <section className="px-6 sm:px-12 md:px-20 lg:px-32 py-20 md:py-28">
      <Reveal>
        <h2 className="font-mono text-sm md:text-base text-muted tracking-widest mb-4">
          // PROJECTS
        </h2>
        <div className="w-full h-px bg-border mb-10" />
      </Reveal>

      <Reveal delay={100}>
        <p className="font-mono text-sm md:text-base text-muted">
          {projects.status}
          <LoadingDots />
        </p>
        <p className="font-mono text-sm md:text-base text-dim mt-2">
          {projects.empty}
        </p>
      </Reveal>
    </section>
  );
}
