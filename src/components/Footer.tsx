import { footer } from '@/data';

export default function Footer() {
  return (
    <footer className="px-6 sm:px-12 md:px-20 lg:px-32 pb-10">
      <div className="w-full h-px bg-border mb-4" />
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] sm:text-xs text-dim tracking-wider">
          {footer.left}
        </span>
        <span className="font-mono text-[10px] sm:text-xs text-dim tracking-wider">
          {footer.right}
        </span>
      </div>
    </footer>
  );
}
