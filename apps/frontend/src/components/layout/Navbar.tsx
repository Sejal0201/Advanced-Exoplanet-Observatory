export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <h1 className="text-xl font-bold text-cyan-400">
          Advanced Exoplanet Observatory
        </h1>

        <div className="flex items-center gap-8 text-sm text-slate-300">
          <span>Home</span>
          <span>Research</span>
          <span>Documentation</span>
          <span>Login</span>
        </div>
      </nav>
    </header>
  );
}