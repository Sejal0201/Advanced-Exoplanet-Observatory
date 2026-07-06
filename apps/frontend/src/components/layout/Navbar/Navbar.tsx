import { useState } from "react";

import Logo from "../../common/Logo";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenuButton from "./MobileMenuButton";
import MobileNavigation from "./MobileNavigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />

          <DesktopNavigation />

          <div className="hidden items-center gap-4 lg:flex">
            <button className="text-sm font-medium text-slate-300 transition hover:text-white">
              Login
            </button>

            <button className="rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-105 hover:bg-cyan-400">
              Get Started
            </button>
          </div>

          <MobileMenuButton onClick={() => setIsOpen(true)} />
        </div>
      </header>

      <MobileNavigation
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}