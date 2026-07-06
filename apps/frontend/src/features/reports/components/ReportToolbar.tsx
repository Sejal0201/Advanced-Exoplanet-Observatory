import { Search, Filter } from "lucide-react";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function ReportToolbar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row">

      <div className="relative flex-1">

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search reports..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 py-3 pl-11 pr-4"
        />

      </div>

      <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-5">

        <Filter size={18} />

        Filters

      </button>

    </div>
  );
}