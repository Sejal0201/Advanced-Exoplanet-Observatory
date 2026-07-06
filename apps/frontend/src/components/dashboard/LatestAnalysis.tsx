import {
  BrainCircuit,
  CircleCheck,
  Telescope,
  ArrowRight,
} from "lucide-react";

export default function LatestAnalysis() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center gap-3">
          <BrainCircuit
            size={26}
            className="text-cyan-400"
          />

          <div>
            <p className="text-sm text-slate-400">
              Last Analysis
            </p>

            <h3 className="font-semibold text-white">
              TESS Sector 09
            </h3>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center justify-between">
          <span className="text-slate-400">
            Transit Confidence
          </span>

          <span className="font-bold text-green-400">
            96.8%
          </span>
        </div>

        <div className="mt-4 h-3 rounded-full bg-slate-800">
          <div className="h-3 w-[96.8%] rounded-full bg-green-400" />
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center gap-3">
          <Telescope
            size={24}
            className="text-cyan-400"
          />

          <div>
            <p className="text-sm text-slate-400">
              Candidate
            </p>

            <h3 className="text-2xl font-bold">
              Kepler-452b
            </h3>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
        <div className="flex items-center gap-3">
          <CircleCheck
            size={22}
            className="text-green-400"
          />

          <span className="text-white">
            Classification Completed
          </span>
        </div>
      </div>

      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400">
        View Full Report

        <ArrowRight size={18} />
      </button>
    </div>
  );
}