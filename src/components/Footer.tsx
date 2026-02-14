import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-8">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div>
          <h2 className="text-3xl font-bold mb-4">CarWash</h2>
          <p className="text-gray-400 mb-6">
            Premium car wash and detailing services designed to keep your
            vehicle shining like new.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <FaTwitter />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <FaInstagram />
            </div>
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition cursor-pointer">
              <FaLinkedinIn />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Services</li>
            <li className="hover:text-white transition cursor-pointer">Pricing</li>
            <li className="hover:text-white transition cursor-pointer">Testimonials</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Our Services</h3>
          <ul className="space-y-4 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">Express Wash</li>
            <li className="hover:text-white transition cursor-pointer">Full Service Wash</li>
            <li className="hover:text-white transition cursor-pointer">Auto Detailing</li>
            <li className="hover:text-white transition cursor-pointer">Oil Change</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Subscribe</h3>
          <p className="text-gray-400 mb-4">
            Get updates about offers and discounts.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-full bg-white/10 border border-white/20 focus:outline-none"
            />
            <button className="bg-blue-500 hover:bg-orange-600 px-6 rounded-r-full font-semibold transition">
              Send
            </button>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} CarWash. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
