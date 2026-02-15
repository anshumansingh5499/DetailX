import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BookingModal from "../components/BookingModal";
import logo from "../../public/image-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Detect Scroll for Glass Effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
     <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
  flex justify-between items-center
  px-6 md:px-12 py-4
  ${
    scrolled
      ? "backdrop-blur-2xl bg-black/60 border-b border-white/10"
      : "bg-transparent"
  }`}
>
  {/* ================= MOBILE NAV DESIGN ================= */}
  <div className="md:hidden w-full flex justify-between items-center bg-white/10 text-black px-4 py-3 rounded-full">

    {/* Logo */} <Link to="/" className="flex items-center"> <img src={logo} alt="DetailXAuto Logo" className="h-8 md:h-10 w-auto object-contain" /> </Link>

    {/* Circular Menu Button */}
    <button
      onClick={() => setMobileMenu(!mobileMenu)}
      className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md"
    >
      {mobileMenu ? <X size={20} /> : <Menu size={20} />}
    </button>
  </div>

  {/* ================= DESKTOP NAV (UNCHANGED) ================= */}
  <div className="hidden md:flex w-full justify-between items-center">

    {/* Logo */}
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="DetailXAuto Logo"
        className="h-8 md:h-10 w-auto object-contain"
      />
    </Link>

    {/* Desktop Menu */}
    <div className="flex items-center gap-10 text-white relative">
      {["Home", "About", "Services", "Blogs"].map((item, index) => (
        <Link
          key={index}
          to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
          className="relative group text-sm tracking-wide"
        >
          {item}
          <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}

      <button
        onClick={() => setOpen(true)}
        className="ml-6 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition backdrop-blur-xl"
      >
        Book Now
      </button>
    </div>
  </div>
</nav>


      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center gap-10 text-2xl z-40 border-b border-white"
          >
            {["Home", "About", "Services", "Blogs"].map((item, index) => (
              <Link
                key={index}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                onClick={() => setMobileMenu(false)}
                className="hover:text-white/60 transition"
              >
                {item}
              </Link>
            ))}

            <button
              onClick={() => {
                setOpen(true);
                setMobileMenu(false);
              }}
              className="mt-6 px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Book Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {open && <BookingModal close={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
