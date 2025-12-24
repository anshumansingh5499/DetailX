import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top */}
        <div className="grid gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="w-12 h-12 flex items-center justify-center">
    <img src={logo} alt="SAASI Logo" className="w-full h-full object-contain" />
  </div>
            <p className="mt-4 text-sm text-white/55 max-w-xs">
              AI-powered job discovery and automation, built to reduce noise
              and improve focus.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="#features" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#demo" className="hover:text-white transition">
                  Live demo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-white/55">
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/45">
          <p>
            © {new Date().getFullYear()} AutoApplyAI. All rights reserved.
          </p>

          <p>
            Built by <span className="text-white/70">Anshuman Singh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
