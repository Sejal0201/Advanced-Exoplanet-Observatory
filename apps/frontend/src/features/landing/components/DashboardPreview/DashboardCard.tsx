interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
}

export default function DashboardCard({
  title,
  children,
}: DashboardCardProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-[0_0_40px_rgba(6,182,212,.15)]
      "
    >
      <h3 className="mb-6 text-lg font-semibold text-white">
        {title}
      </h3>

      {children}
    </div>
  );
}