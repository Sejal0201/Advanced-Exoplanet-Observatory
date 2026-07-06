import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import HeroVisual from "./HeroVisual";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      <HeroBackground />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
          >

            <div className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">
              ✨ AI Powered Observatory
            </div>

            <h1 className="mt-8 text-6xl font-black leading-tight lg:text-7xl">

              Discover New Worlds

              <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">

                Beyond Our Solar System

              </span>

            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Analyze NASA and ESA telescope observations,
              detect exoplanets using Artificial Intelligence,
              predict planetary habitability,
              and generate professional scientific reports.

            </p>

            <HeroButtons />

            <div className="mt-12 flex gap-8 text-sm tracking-[0.3em] text-slate-500">

              <span>NASA</span>

              <span>ESA</span>

              <span>TESS</span>

              <span>KEPLER</span>

            </div>

          </motion.div>

          {/* RIGHT */}

          <HeroVisual />

        </div>

      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20">

        <HeroStats />

      </div>

    </section>
  );
}