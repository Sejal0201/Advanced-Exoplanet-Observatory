import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface PipelineStepProps {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast: boolean;
}

export default function PipelineStep({
  step,
  title,
  description,
  icon: Icon,
  isLast,
}: PipelineStepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex gap-8"
    >
      {/* Timeline */}

      <div className="flex flex-col items-center">
        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            border-cyan-500/30
            bg-slate-900
            text-cyan-400
            shadow-[0_0_25px_rgba(6,182,212,.15)]
          "
        >
          <Icon size={28} />
        </div>

        {!isLast && (
          <div className="mt-2 h-28 w-px bg-gradient-to-b from-cyan-500 to-slate-800" />
        )}
      </div>

      {/* Content */}

      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          flex-1
          rounded-3xl
          border
          border-slate-800
          bg-slate-900/50
          p-8
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-cyan-500/40
          hover:shadow-[0_0_30px_rgba(6,182,212,.12)]
        "
      >
        <span className="text-sm font-semibold tracking-[0.3em] text-cyan-400">
          STEP {step}
        </span>

        <h3 className="mt-3 text-3xl font-bold text-white">
          {title}
        </h3>

        <p className="mt-5 leading-8 text-slate-400">
          {description}
        </p>
      </motion.div>
    </motion.div>
  );
}