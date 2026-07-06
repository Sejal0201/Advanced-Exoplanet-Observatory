import { FileSearch } from "lucide-react";

export default function EmptyReports() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 py-24">
      <FileSearch
        size={70}
        className="text-slate-600"
      />

      <h2 className="mt-6 text-2xl font-semibold">
        No Reports Found
      </h2>

      <p className="mt-3 max-w-md text-center text-slate-400">
        Generate an analysis report by uploading and
        analyzing an astronomical dataset.
      </p>
    </div>
  );
}