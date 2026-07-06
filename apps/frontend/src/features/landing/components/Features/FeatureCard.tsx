import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureCard({
  title,
  description,
  icon: Icon,
}: FeatureCardProps) {
  return (
    <motion.article
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        rounded-3xl
        border
        border-slate-800
        bg-slate-900/50
        p-8
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-cyan-500/40
        hover:shadow-[0_0_35px_rgba(6,182,212,.15)]
      "
    >
      <div
        className="
          mb-6
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-cyan-500/10
          text-cyan-400
          transition-all
          duration-300
          group-hover:bg-cyan-500
          group-hover:text-slate-950
        "
      >
        <Icon size={28} />
      </div>

      <h3 className="mb-4 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="leading-8 text-slate-400">
        {description}
      </p>
    </motion.article>
  );
}