import { motion } from "framer-motion";

import DashboardCard from "./DashboardCard";
import OrbitPreview from "./OrbitPreview";
import LightCurveChart from "./LightCurveChart";
import PredictionCard from "./PredictionCard";

export default function DashboardPreview() {
  return (
    <section className="py-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Platform Preview
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Scientific Dashboard
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Preview the powerful interface used to analyze telescope observations,
            detect exoplanets, visualize orbital data, and generate AI-powered
            scientific reports.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <DashboardCard title="Orbit Visualization">
            <OrbitPreview />
          </DashboardCard>

          <DashboardCard title="Transit Light Curve">
            <LightCurveChart />
          </DashboardCard>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <PredictionCard title="Planet" value="Kepler-452b" />
          <PredictionCard title="Confidence" value="98.74%" />
          <PredictionCard title="Radius" value="1.63 R⊕" />
          <PredictionCard title="Orbit" value="384 Days" />
          <PredictionCard title="Habitability" value="High" />
        </div>
      </div>
    </section>
  );
}