import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ArchitectureNodeProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function ArchitectureNode({
  title,
  subtitle,
  icon: Icon,
}: ArchitectureNodeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/60
        p-6
        text-center
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-[0_0_35px_rgba(6,182,212,.15)]
      "
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
        <Icon size={30} />
      </div>

      <h3 className="text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {subtitle}
      </p>
    </motion.div>
  );
}