import { Outlet } from "react-router-dom";

import Sidebar from "../components/layout/Sidebar";
import DashboardHeader from "../components/layout/DashboardHeader";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#020617] text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <DashboardHeader />

        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}