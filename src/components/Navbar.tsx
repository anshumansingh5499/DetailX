import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "../components/BookingModal";
import logo from "../assets/washlogo-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-md"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-1 flex items-center justify-between">

          {/* LEFT — Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Salugara Car Wash"
              className="h-14 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* CENTER — Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative text-sm tracking-wide transition duration-300 group ${
                    active
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* RIGHT — Button */}
          <div className="hidden md:flex">
            <button
              onClick={() => setOpen(true)}
              className="px-6 py-2 border border-black/30 text-black 
                         hover:bg-black hover:text-white 
                         transition duration-300"
            >
              Book Now
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden w-10 h-10 border border-black/30 
                       rounded-full flex items-center justify-center text-black"
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
            className="fixed inset-0 bg-white text-black flex flex-col 
                       items-center justify-center gap-12 text-2xl z-40"
          >
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.name}
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
              className="mt-6 px-8 py-3 border border-black 
                         hover:bg-black hover:text-white transition"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= BOOKING MODAL ================= */}
      <AnimatePresence>
        {open && <BookingModal close={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;