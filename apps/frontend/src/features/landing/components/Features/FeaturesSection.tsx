import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { features } from "./features.data";

export default function FeaturesSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            Core Capabilities
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Advanced AI Platform
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              for Exoplanet Research
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Built for astronomers, researchers, students, and anyone
            exploring planetary systems beyond our solar system.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
    </section>
  );
}