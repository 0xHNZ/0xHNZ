import Reveal from '@/components/Reveal';

import { currently } from '@/data';

export default function Currently() {
  return (
    <section className="px-6 sm:px-12 md:px-20 lg:px-32 py-20 md:py-28">
      <Reveal>
        <h2 className="font-mono text-sm md:text-base text-muted tracking-widest mb-4">
          // CURRENTLY
        </h2>

        <div className="w-full h-px bg-border mb-10" />
      </Reveal>

      <Reveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          <div>
            <div className="mb-8 space-y-1">
              {currently.intro.map((line) => (
                <p
                  key={line}
                  className="font-mono text-base md:text-lg text-fg"
                >
                  {line}
                </p>
              ))}
            </div>

            <p className="font-mono text-sm md:text-base text-muted mb-4">
              {currently.focusedLabel}
            </p>

            <ul className="space-y-2 mb-10">
              {currently.focus.map((item) => (
                <li
                  key={item}
                  className="font-mono text-sm md:text-base text-fg flex items-center gap-3"
                >
                  <span className="text-accent">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:flex md:justify-end md:pt-20">
            <div className="space-y-1">
              {currently.closing.map((line) => (
                <p
                  key={line}
                  className="font-mono text-sm md:text-base text-muted"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

        </div>
      </Reveal>
    </section>
  );
}