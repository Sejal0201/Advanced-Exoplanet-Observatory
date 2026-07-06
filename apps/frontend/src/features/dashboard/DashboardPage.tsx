import { useEffect, useState } from "react";
import {
  Database,
  BrainCircuit,
  Telescope,
  FileText,
} from "lucide-react";

import StatCard from "../../components/dashboard/StatCard";
import LatestAnalysis from "../../components/dashboard/LatestAnalysis";
import RecentUploads from "../../components/dashboard/RecentUploads";
import RecentActivity from "../../components/dashboard/RecentActivity";
import { DashboardService } from "../../services/dashboard.service";
// import DatasetToolbar from "./components/DatasetToolbar";

export default function DashboardPage() {
  const [stats, setStats] = useState<any>(null);
 

  useEffect(() => {
    async function loadStats() {
      try {
        const response = await DashboardService.getStats();

        setStats(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadStats();
  }, []);

  const cards = [
    {
      title: "Datasets",
      value: String(stats?.datasets ?? 0),
      subtitle: "Uploaded datasets",
      icon: Database,
    },
    {
      title: "Processed",
      value: String(stats?.processed ?? 0),
      subtitle: "Completed analyses",
      icon: BrainCircuit,
    },
    {
      title: "Transit Candidates",
      value: String(stats?.transit_candidates ?? 0),
      subtitle: "Detected candidates",
      icon: Telescope,
    },
    {
      title: "Reports",
      value: String(stats?.reports ?? 0),
      subtitle: "Generated reports",
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-4 max-w-3xl text-slate-400">
          Monitor astronomical datasets, AI predictions,
          and scientific reports from one unified dashboard.
        </p>
      </div>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={item.icon}
          />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold">
            Recent Uploads
          </h2>

          <div className="mt-8">
            <RecentUploads />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-2xl font-semibold">
            Latest Analysis
          </h2>

          <div className="mt-8">
            <LatestAnalysis />
          </div>
        </div>
      </section>

      <section>
        <RecentActivity />
      </section>
    </div>
  );
}