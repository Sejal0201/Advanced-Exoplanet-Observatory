import { Database } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 py-20 text-center">
      <Database
        size={56}
        className="mx-auto mb-5 text-cyan-400"
      />

      <h2 className="text-2xl font-semibold">
        No Datasets Found
      </h2>

      <p className="mt-3 text-slate-400">
        Upload your first astronomical dataset to begin analysis.
      </p>
    </div>
  );
}