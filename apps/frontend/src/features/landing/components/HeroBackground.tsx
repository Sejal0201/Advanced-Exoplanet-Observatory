export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0f172a_0%,#020617_70%)]" />

      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-20 top-40 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="absolute bottom-20 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-500/10 blur-[180px]" />
    </>
  );
}