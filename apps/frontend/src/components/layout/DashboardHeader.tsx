import {
  Bell,
  Search,
  UserCircle2,
} from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-slate-800 bg-[#020817]/90 px-8 backdrop-blur-md">
      <div className="relative w-full max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
        />

        <input
          type="text"
          placeholder="Search datasets..."
          className="h-11 w-full rounded-xl border border-slate-700 bg-slate-900 pl-11 pr-4 text-sm text-white outline-none transition focus:border-cyan-400"
        />
      </div>

      <div className="flex items-center gap-5">
        <button className="rounded-xl border border-slate-700 p-3 transition hover:border-cyan-400 hover:text-cyan-400">
          <Bell size={20} />
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-slate-700 px-4 py-2">
          <UserCircle2
            size={34}
            className="text-cyan-400"
          />

          <div>
            {/* <p className="text-sm font-semibold text-white">
              Sejal Jain
            </p> */}

            <p className="text-xs text-slate-400">
              Researcher
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}