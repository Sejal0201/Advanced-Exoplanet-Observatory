import { motion } from "framer-motion";

import SourceCard from "./SourceCard";
import { sources } from "./sources.data";

export default function ResearchSources() {
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
            Trusted Research Sources
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Powered by Global
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              Space Missions
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Analyze publicly available datasets from the world's most respected
            astronomical missions and observatories.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sources.map((source) => (
            <SourceCard
              key={source.name}
              {...source}
            />
          ))}
        </div>
      </div>
    </section>
  );
}