const stats = [
  {
    value: "120K+",
    label: "Light Curves",
  },
  {
    value: "98.7%",
    label: "Detection Accuracy",
  },
  {
    value: "5M+",
    label: "Data Points",
  },
  {
    value: "AI",
    label: "Scientific Reports",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
            backdrop-blur-md
          "
        >
          <h2 className="text-4xl font-bold text-cyan-400">
            {item.value}
          </h2>

          <p className="mt-3 text-slate-400">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}