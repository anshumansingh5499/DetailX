import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../assets/washlogo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-32 pb-16">

      <div className="max-w-7xl mx-auto">

        {/* ================= BRAND ================= */}
        <div className="mb-24">
          <img
            src={logo}
            alt="Salugara Car Wash"
            className="h-24 md:h-28 w-auto object-contain"
          />

          <p className="mt-6 text-gray-400 max-w-lg text-lg leading-relaxed">
            Premium automotive detailing studio delivering precision,
            protection, and perfection — redefining modern vehicle care.
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-3 gap-16 border-t border-white/10 pt-16">

          {/* Navigation (Same as Navbar) */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-8">
              Navigation
            </h4>

            <ul className="space-y-5 text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: "About", path: "/about" },
                { name: "Blogs", path: "/blogs" },
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-white transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-8">
              Contact
            </h4>

            <ul className="space-y-5 text-gray-400 leading-relaxed">
              <li>+91 9980889181</li>
              <li>+91 7584837541</li>
              <li>
                BSF Road, Salugara <br />
                Near Cosmos Valley Apartment
              </li>
              <li>info@salugaracarwash.com</li>
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-8">
              Updates
            </h4>

            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Subscribe for detailing insights and exclusive offers.
            </p>

            <div className="border border-white/20 rounded-full flex items-center overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-6 py-3 w-full text-sm focus:outline-none"
              />
              <button className="px-6 py-3 border-l border-white/20 hover:bg-white hover:text-black transition text-sm">
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 mt-8 text-gray-400">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map(
                (Icon, index) => (
                  <Icon
                    key={index}
                    className="hover:text-white transition cursor-pointer"
                  />
                )
              )}
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">

          <p>
            © {new Date().getFullYear()} Salugara Car Wash. All rights reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Crafted with precision by <span className="text-white">ANSHUMAN SINGH</span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;