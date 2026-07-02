import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}