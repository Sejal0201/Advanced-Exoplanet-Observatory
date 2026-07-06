import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-cyan-500/10 p-3">
          <Icon
            size={24}
            className="text-cyan-400"
          />
        </div>

        <ArrowUpRight
          size={18}
          className="text-green-400"
        />
      </div>

      <p className="mt-8 text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {subtitle}
      </p>
    </motion.div>
  );
}