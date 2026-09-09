import { identity, socials } from '@/data';
import Typewriter from '@/components/Typewriter';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center px-6">
      {/* whoami prompt with typewriter effect */}
      <p className="font-mono text-xs sm:text-sm md:text-base text-muted mb-6 tracking-wider">
        <Typewriter text={identity.whoami} speed={75} />
      </p>

      {/* Identity */}
      <div className="flex flex-col items-center">
        <h1 className="font-mono font-bold text-fg tracking-tight leading-none select-none text-7xl sm:text-8xl md:text-9xl lg:text-[12rem]">
          {identity.handle}
        </h1>

        {/* Tagline */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm md:text-base text-muted tracking-widest font-light">
          {identity.tagline.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              {i > 0 && <span className="text-dim">·</span>}
              <span>{word}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Social buttons */}
      <div className="mt-10 flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="term-btn font-mono text-xs sm:text-sm tracking-wider text-muted border border-border px-5 py-2"
          >
            [ {s.label} ]
          </a>
        ))}
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] text-dim uppercase">
          scroll down
        </span>
        <svg
          className="scroll-arrow text-dim"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1V13M7 13L1 7M7 13L13 7"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="square"
          />
        </svg>
      </div>
    </section>
  );
}
