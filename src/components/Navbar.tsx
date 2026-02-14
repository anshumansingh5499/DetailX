import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BookingModal from "../components/BookingModal";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-6 bg-white shadow-sm relative z-50">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wider">
          Detail<span className="text-blue-600 font-extrabold">X</span>
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-600 transition">
            About us
          </Link>
          <Link to="/services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link to="/blogs" className="hover:text-blue-600 transition">
            Blogs
          </Link>

          <button
            onClick={() => setOpen(true)}
            className="bg-blue-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Book Now
          </button>
        </div>

        {/* Manage Membership (Desktop Only) */}
        <p className="hidden md:block text-sm cursor-pointer hover:text-blue-600 transition">
          Manage Membership
        </p>

        {/* Hamburger Icon (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-8 z-40 animate-slideDown">
          <Link to="/" onClick={() => setMobileMenu(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setMobileMenu(false)}>
            About us
          </Link>
          <Link to="/services" onClick={() => setMobileMenu(false)}>
            Services
          </Link>
          <Link to="/blogs" onClick={() => setMobileMenu(false)}>
            Blogs
          </Link>

          <button
            onClick={() => {
              setOpen(true);
              setMobileMenu(false);
            }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition"
          >
            Book Now
          </button>
        </div>
      )}

      {open && <BookingModal close={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
