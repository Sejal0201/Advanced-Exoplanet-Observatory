export default function Logo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500 text-lg font-bold text-slate-950 shadow-lg shadow-cyan-500/20">
        AO
      </div>

      <div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          Advanced Exoplanet
        </h1>

        <p className="text-xs text-slate-400">
          Observatory
        </p>
      </div>
    </div>
  );
}