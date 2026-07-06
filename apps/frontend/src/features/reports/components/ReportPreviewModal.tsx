import { X, Telescope, FileText } from "lucide-react";
import type { Report } from "../types";

interface Props {
  report: Report | null;
  open: boolean;
  onClose: () => void;
}

export default function ReportPreviewModal({
  report,
  open,
  onClose,
}: Props) {
  if (!open || !report) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-3xl rounded-2xl border border-slate-700 bg-slate-900 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="text-cyan-400" />
            <h2 className="text-2xl font-bold">
              Scientific Report
            </h2>
          </div>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-6">

          <div>
            <h3 className="text-lg font-semibold">
              Dataset
            </h3>

            <p className="text-slate-400">
              {report.datasetName}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Mission
            </h3>

            <p className="text-slate-400">
              {report.mission}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Confidence
            </h3>

            <p className="text-cyan-400 text-xl font-bold">
              {report.confidence}%
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Transit Candidates
            </h3>

            <div className="flex items-center gap-3">
              <Telescope className="text-cyan-400" />
              <span>{report.candidateCount}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}