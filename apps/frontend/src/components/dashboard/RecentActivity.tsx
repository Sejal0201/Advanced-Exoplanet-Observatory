const activity = [
  {
    title: "Dataset Uploaded",
    description: "Kepler_DR25.csv",
    time: "2 min ago",
  },
  {
    title: "Preprocessing Completed",
    description: "Noise removed successfully",
    time: "8 min ago",
  },
  {
    title: "Transit Detection",
    description: "Potential exoplanet detected",
    time: "18 min ago",
  },
  {
    title: "Scientific Report",
    description: "PDF generated",
    time: "32 min ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
      <h2 className="text-2xl font-semibold">
        Recent Activity
      </h2>

      <div className="mt-8 space-y-6">
        {activity.map((item, index) => (
          <div
            key={index}
            className="flex gap-5"
          >
            <div className="mt-1 h-3 w-3 rounded-full bg-cyan-400" />

            <div>
              <h3 className="font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-slate-400">
                {item.description}
              </p>

              <span className="text-xs text-slate-500">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}