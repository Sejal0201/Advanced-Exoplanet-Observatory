import { motion } from "framer-motion";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .8 }}
      className="relative hidden justify-center lg:flex"
    >

      <div className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-96 w-96 rounded-full border border-cyan-500/20"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-72 w-72 rounded-full border border-sky-400/20"
      />

      <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-700 shadow-[0_0_80px_rgba(6,182,212,.45)]">

        <span className="text-8xl">
          🪐
        </span>

      </div>

    </motion.div>
  );
}