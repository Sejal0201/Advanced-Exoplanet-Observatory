import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  Database,
  BrainCircuit,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const navigation = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    name: "Upload Dataset",
    icon: Upload,
    path: "/dashboard/upload",
  },
  {
    name: "Datasets",
    icon: Database,
    path: "/dashboard/datasets",
  },
  {
    name: "Analysis",
    icon: BrainCircuit,
    path: "/dashboard/analysis",
  },
  {
    name: "Reports",
    icon: FileText,
    path: "/dashboard/reports",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-800 bg-[#020817]">
      <div className="border-b border-slate-800 px-8 py-8">
        <h1 className="text-xl font-bold text-cyan-400">
          Advanced Exoplanet Observatory
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Scientific Dashboard
        </p>
      </div>

      <nav className="flex-1 overflow-y-auto px-5 py-8">
        <ul className="space-y-3">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded-xl px-4 py-3 transition-all ${
                      isActive
                        ? "bg-cyan-500/15 text-cyan-400"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                    }`
                  }
                >
                  <Icon size={20} />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-800 p-6">
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-slate-400">
              Storage
            </span>

            <span className="text-cyan-400">
              72%
            </span>
          </div>

          <div className="h-2 rounded-full bg-slate-800">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "72%" }}
              transition={{ duration: 1 }}
              className="h-2 rounded-full bg-cyan-400"
            />
          </div>
        </div>
{/* 
        <button className="flex w-full items-center gap-3 rounded-xl border border-red-500/20 px-4 py-3 text-red-400 transition hover:bg-red-500/10">
          
          <LogOut size={18} />
          Logout
        </button> */}

        <button
  onClick={() => navigate("/")}
  className="flex w-full items-center gap-3 rounded-xl border border-red-500/20 px-4 py-3 text-red-400 transition hover:bg-red-500/10"
>
  <LogOut size={18} />
  Logout
  </button>
      </div>
    </aside>
  );
}