import { motion } from "framer-motion";

import PipelineStep from "./PipelineStep";
import { pipelineSteps } from "./pipeline.data";

export default function PipelineSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-400">
            AI Analysis Pipeline
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            From Raw Telescope Data
            <br />

            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              to Scientific Discovery
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Every uploaded dataset follows a complete AI-powered workflow,
            transforming astronomical observations into research-ready
            predictions and visual reports.
          </p>
        </motion.div>

        <div className="space-y-12">
          {pipelineSteps.map((step, index) => (
            <PipelineStep
              key={step.step}
              {...step}
              isLast={index === pipelineSteps.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}