import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = [
  "Solution",
  "Features",
  "Use Cases",
  "Pricing",
  "Resources",
];

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Main Bar */}
        <div className="flex items-center justify-between rounded-full bg-white/30 px-6 py-3 backdrop-blur-md border border-white/20">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="AutoApplyAI"
              className="w-10 h-10 object-contain"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 rounded-full text-white/90 hover:bg-white/10 transition"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black hover:bg-lime-300 transition"
            >
              Free trial
              <span className="w-5 h-5 rounded-full bg-black text-lime-400 flex items-center justify-center text-xs">
                →
              </span>
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="text-white" size={20} />
            ) : (
              <Menu className="text-white" size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-3 md:hidden rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 overflow-hidden">

            {/* Links */}
            <nav className="flex flex-col divide-y divide-white/10">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="px-6 py-4 text-white/90 hover:bg-white/5 transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="p-4">
              <a
                href="#"
                className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Start free trial
                <span className="text-black">→</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
