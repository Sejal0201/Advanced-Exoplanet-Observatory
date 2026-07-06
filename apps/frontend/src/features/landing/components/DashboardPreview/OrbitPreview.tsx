import { motion } from "framer-motion";

export default function OrbitPreview() {
  return (
    <div className="flex h-72 items-center justify-center">
      <div className="relative h-56 w-56">
        <div className="absolute inset-0 rounded-full border border-cyan-500/20" />

        <div className="absolute inset-8 rounded-full border border-cyan-500/20" />

        <div className="absolute inset-16 rounded-full border border-cyan-500/20" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0"
        >
          <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
        </motion.div>

        <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_40px_rgba(6,182,212,.5)]" />
      </div>
    </div>
  );
}