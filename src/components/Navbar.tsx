import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "../components/BookingModal";
import logo from "../../public/image-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },

    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-xl ${
          scrolled ? "bg-black/70 shadow-lg" : "bg-black/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 relative flex items-center justify-between">

          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center z-20">
            <img
              src={logo}
              alt="DetailXAuto Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* CENTER: Desktop Menu */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
            {navItems.map((item, index) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={index}
                  to={item.path}
                  className={`relative text-sm tracking-wide transition duration-300 group ${
                    active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1.5px] bg-white transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT: Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-2 border border-white/40 
                         text-white hover:bg-white hover:text-black 
                         transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden w-10 h-10 border border-white/40 
                       rounded-full flex items-center justify-center 
                       text-white z-50"
          >
            {mobileMenu ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black text-white flex flex-col 
                       items-center justify-center gap-12 text-2xl z-40"
          >
            {navItems.map((item, index) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={index}
                  to={item.path}
                  onClick={() => setMobileMenu(false)}
                  className={`transition ${
                    active
                      ? "opacity-100 font-medium"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <button
              onClick={() => {
                setOpen(true);
                setMobileMenu(false);
              }}
              className="mt-6 px-8 py-3 border border-white 
                         hover:bg-white hover:text-black transition"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= BOOKING MODAL ================= */}
      {open && <BookingModal close={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
