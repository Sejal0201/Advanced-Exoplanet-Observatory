import { FileText, Download, Eye, Trash2, Telescope } from "lucide-react";

import type { Report } from "../types";

interface Props {
  report: Report;

  onView?: () => void;

  onDownload?: () => void;

  onDelete?: () => void;
}

export default function ReportCard({
  report,
  onView,
  onDownload,
  onDelete,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-500/40">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3">
            <FileText className="text-cyan-400" />

            <h3 className="text-xl font-semibold">{report.datasetName}</h3>
          </div>

          <p className="mt-2 text-sm text-slate-400">{report.mission}</p>
        </div>

        <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
          {report.status}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Confidence</p>

          <p className="text-2xl font-bold text-cyan-400">
            {report.confidence}%
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">Transit Candidates</p>

          <div className="flex items-center gap-2">
            <Telescope size={18} className="text-cyan-400" />

            <span className="text-xl font-semibold">
              {report.candidateCount}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 text-sm text-slate-500">
        Generated on
        <span className="ml-2 text-slate-300">
          {new Date(report.createdAt).toLocaleDateString()}
        </span>
      </div>

      {/* <div className="mt-8 flex gap-3">
        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 transition hover:border-cyan-500">
          <Eye size={18} />

          View
        </button>

        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 transition hover:border-cyan-500">
          <Download size={18} />

          Download
        </button>

        <button className="rounded-xl border border-red-500/30 px-4 transition hover:bg-red-500/10">
          <Trash2 size={18} />
        </button>
      </div> */}

      <div className="mt-8 flex gap-3">
        <button
          onClick={onView}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 transition hover:border-cyan-500"
        >
          <Eye size={18} />
          View
        </button>

        <button
          onClick={onDownload}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 py-3 transition hover:border-cyan-500"
        >
          <Download size={18} />
          Download
        </button>

        <button
          onClick={onDelete}
          className="rounded-xl border border-red-500/30 px-4 transition hover:bg-red-500/10"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
}
