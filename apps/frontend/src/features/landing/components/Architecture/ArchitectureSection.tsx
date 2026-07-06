import { motion } from "framer-motion";

import ArchitectureNode from "./ArchitectureNode";
import { architecture } from "./architecture.data";

export default function ArchitectureSection() {
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
            System Architecture
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Built with a Modern
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent">
              AI Technology Stack
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            A scalable architecture combining modern frontend technologies,
            high-performance APIs, AI inference, and cloud-native deployment.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {architecture.map((node) => (
            <ArchitectureNode
              key={node.title}
              {...node}
            />
          ))}
        </div>
      </div>
    </section>
  );
}