export default function OnlineIndicator() {
  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-2 select-none">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
        online
      </span>
    </div>
  );
}
