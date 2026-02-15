import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-16 pt-32 pb-16">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto">

        {/* Brand */}
        <div className="mb-24">
          <h2 className="text-6xl md:text-7xl font-bold tracking-tight">
            Detail<span className="text-orange-500">X</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-lg text-lg leading-relaxed">
            Premium automotive detailing studio delivering precision,
            protection, and perfection — redefining how vehicles are maintained.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-16 border-t border-white/10 pt-16">

          {/* Navigation */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-8">
              Navigation
            </h4>
            <ul className="space-y-5 text-gray-400">
              {["Home", "About", "Services", "Pricing", "Contact"].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-8">
              Services
            </h4>
            <ul className="space-y-5 text-gray-400">
              {[
                "Ceramic Coating",
                "Interior Detailing",
                "Exterior Protection",
                "Paint Correction",
              ].map((item, index) => (
                <li
                  key={index}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="uppercase text-xs tracking-[0.3em] text-gray-500 mb-8">
              Contact
            </h4>
            <ul className="space-y-5 text-gray-400">
              <li>+91 70802 16257</li>
              <li>Delhi, India</li>
              <li>info@detailx.com</li>
            </ul>
          </div>

          {/* Newsletter */}
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

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} DetailX. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Crafted with precision by ANSHUMAN SINGH ❤️.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
