import { NavLink } from "react-router-dom";
import { navigationItems } from "./navigation.data";

export default function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            `text-sm font-medium transition-colors duration-300 ${
              isActive
                ? "text-cyan-400"
                : "text-slate-300 hover:text-white"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}