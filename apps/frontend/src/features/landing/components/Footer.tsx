import {
 
  Mail,
  Rocket,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:justify-between">

        <div className="max-w-md">

          <div className="flex items-center gap-3">

            <Rocket className="text-cyan-400" />

            <h2 className="text-2xl font-bold">
              Advanced Exoplanet Observatory
            </h2>

          </div>

          <p className="mt-5 text-slate-400 leading-7">
            AI-powered observatory for detecting exoplanet
            transits from astronomical light curves using
            advanced machine learning and scientific
            visualization.
          </p>

        </div>

        <div>

          <h3 className="font-semibold">
            Quick Links
          </h3>

          <div className="mt-5 space-y-3 text-slate-400">

            <p>Features</p>

            <p>Pipeline</p>

            <p>Architecture</p>

            <p>Dashboard</p>

          </div>

        </div>

        <div>

          <h3 className="font-semibold">
            Connect
          </h3>

          <div className="mt-5 flex gap-5">

            {/* <Github className="cursor-pointer text-slate-400 transition hover:text-cyan-400" /> */}

            <Mail className="cursor-pointer text-slate-400 transition hover:text-cyan-400" />

          </div>

        </div>

      </div>

      {/* <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 • Advanced Exoplanet Observatory
      </div> */}
    </footer>
  );
}