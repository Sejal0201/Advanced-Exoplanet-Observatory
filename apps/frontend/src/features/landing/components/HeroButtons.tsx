import { ArrowRight, BookOpen } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-5">
      <button
        className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-cyan-500
        px-8
        py-4
        font-semibold
        text-slate-950
        transition-all
        duration-300
        hover:scale-105
        hover:bg-cyan-400
      "
      >
        Start Research

        <ArrowRight size={20} />
      </button>

      <button
        className="
        flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-700
        bg-slate-900/70
        px-8
        py-4
        font-semibold
        text-white
        transition-all
        duration-300
        hover:border-cyan-500
      "
      >
        <BookOpen size={18} />

        Documentation
      </button>
    </div>
  );
}