import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SourceCardProps {
  name: string;
  icon: LucideIcon;
  description: string;
  stats: string;
}

export default function SourceCard({
  name,
  icon: Icon,
  description,
  stats,
}: SourceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-[0_0_35px_rgba(6,182,212,.15)]
      "
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
        <Icon size={34} />
      </div>

      <h3 className="text-3xl font-bold text-white">
        {name}
      </h3>

      <p className="mt-4 leading-8 text-slate-400">
        {description}
      </p>

      <div className="mt-8 border-t border-slate-800 pt-5">
        <span className="text-sm font-semibold tracking-widest text-cyan-400">
          {stats}
        </span>
      </div>
    </motion.div>
  );
}