interface PredictionCardProps {
  title: string;
  value: string;
}

export default function PredictionCard({
  title,
  value,
}: PredictionCardProps) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-slate-800
        bg-slate-900/70
        p-5
        text-center
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-500/40
      "
    >
      <p className="text-sm uppercase tracking-widest text-slate-500">
        {title}
      </p>

      <h4 className="mt-3 text-2xl font-bold text-cyan-400">
        {value}
      </h4>
    </div>
  );
}