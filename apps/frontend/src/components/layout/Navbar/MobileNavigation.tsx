import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigationItems } from "./navigation.data";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNavigation({
  isOpen,
  onClose,
}: MobileNavigationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-lg lg:hidden"
        >
          <div className="flex items-center justify-between border-b border-slate-800 p-6">
            <h2 className="text-lg font-semibold text-white">Menu</h2>

            <button
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-slate-800"
            >
              <X className="text-white" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 p-8">
            {navigationItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={onClose}
                className="text-lg font-medium text-slate-300 hover:text-cyan-400"
              >
                {item.label}
              </NavLink>
            ))}

            <button className="mt-6 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-slate-950">
              Get Started
            </button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}