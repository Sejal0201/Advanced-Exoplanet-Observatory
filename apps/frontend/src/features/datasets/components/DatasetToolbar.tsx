import {
  Search,
  RefreshCw,
  Plus,
} from "lucide-react";

interface DatasetToolbarProps {
  search: string;
  mission: string;
  status: string;

  onSearchChange: (value: string) => void;
  onMissionChange: (value: string) => void;
  onStatusChange: (value: string) => void;

  onRefresh: () => void;
  onUpload: () => void;
}

export default function DatasetToolbar({
  search,
  mission,
  status,
  onSearchChange,
  onMissionChange,
  onStatusChange,
  onRefresh,
  onUpload,
}: DatasetToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-wrap gap-4">
        <div className="relative min-w-[260px] flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            value={search}
            onChange={(e) =>
              onSearchChange(e.target.value)
            }
            placeholder="Search datasets..."
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 outline-none focus:border-cyan-500"
          />
        </div>

        <select
          value={mission}
          onChange={(e) =>
            onMissionChange(e.target.value)
          }
          className="rounded-xl border border-slate-700 bg-slate-950 px-4"
        >
          <option value="">All Missions</option>
          <option>Kepler</option>
          <option>TESS</option>
          <option>JWST</option>
          <option>PLATO</option>
        </select>

        <select
          value={status}
          onChange={(e) =>
            onStatusChange(e.target.value)
          }
          className="rounded-xl border border-slate-700 bg-slate-950 px-4"
        >
          <option value="">All Status</option>
          <option>Processed</option>
          <option>Processing</option>
          <option>Pending</option>
          <option>Failed</option>
        </select>
      </div>

      <div className="flex gap-3">
        <button
          onClick={onRefresh}
          className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-3 transition hover:bg-slate-800"
        >
          <RefreshCw size={18} />
          Refresh
        </button>

        <button
          onClick={onUpload}
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          <Plus size={18} />
          Upload
        </button>
      </div>
    </div>
  );
}