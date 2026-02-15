import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ceramic from "../assets/wheel.jpg";
import detailing from "../assets/detailing.jpg";
import wheel1 from "../assets/ceramic.jpg";
import wheel2 from "../assets/washing.jpg";

const services = [
  {
    title: "Express Exterior",
    desc: "A precision foam wash system engineered for hydrophobic brilliance and refined gloss retention.",
    details:
      "Our multi-stage exterior process includes pH-balanced foam pre-wash, dual-bucket safe contact wash, microfiber air drying, wheel decontamination, and polymer-based sealant application to preserve paint integrity.",
    image: ceramic,
    bg: "bg-neutral-950",
  },
  {
    title: "Full Service Wash",
    desc: "Interior refinement meets exterior perfection.",
    details:
      "Complete cabin vacuuming, steam-based sanitization, leather conditioning, dashboard restoration, glass polishing, and premium tire dressing — all curated for a refined tactile experience.",
    image: wheel1,
    bg: "bg-neutral-900",
  },
  {
    title: "Auto Detailing",
    desc: "Luxury-grade paint correction & ceramic shielding.",
    details:
      "Multi-stage machine polishing eliminates swirl marks and oxidation while nano-ceramic coating bonds at molecular level — delivering unmatched gloss depth and 2–5 years of protection.",
    image: wheel2,
    bg: "bg-neutral-950",
  },
  {
    title: "Complete Wash",
    desc: "Total surface restoration for showroom depth.",
    details:
      "An immersive restoration package combining gloss amplification, trim rejuvenation, wheel decontamination, interior refinement, odor neutralization, and advanced surface sealing technology.",
    image: detailing,
    bg: "bg-neutral-900",
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-screen bg-black text-white flex items-center justify-center text-center overflow-hidden">

        {/* Animated Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)] animate-pulse" />

        {/* Dark Gradient Layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 opacity-90" />

        {/* Parallax Background */}
        <motion.img
          src={ceramic}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-5xl px-6"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-tight">
            Future of
            <br />
            <span className="bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Automotive Detailing
            </span>
          </h1>

          <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Precision engineering meets refined craftsmanship.
            Experience next-generation car care technology.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <button className="px-12 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition shadow-2xl">
              Explore Services
            </button>

            <button className="px-12 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition backdrop-blur-xl">
              Book Appointment
            </button>
          </div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* ================= SERVICE SECTIONS ================= */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`relative min-h-screen ${service.bg} text-white flex items-center overflow-hidden`}
        >
          {/* Background Image */}
          <motion.img
            src={service.image}
            alt={service.title}
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute right-0 top-0 h-full w-full md:w-1/2 object-cover opacity-30"
          />

          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center relative z-10">

            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                {service.title}
              </h2>

              <p className="mt-8 text-gray-300 text-lg leading-relaxed">
                {service.desc}
              </p>

              <p className="mt-6 text-gray-400 leading-relaxed max-w-xl">
                {service.details}
              </p>

              <div className="mt-10 flex gap-6">
                <button className="px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition shadow-xl">
                  Book Now
                </button>

                <button className="px-10 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* RIGHT GLASS PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="hidden md:block"
            >
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-3xl shadow-2xl">
                <h4 className="text-xl font-semibold mb-6 text-white">
                  Premium Highlights
                </h4>

                <ul className="space-y-4 text-gray-300 text-sm">
                  <li>• Advanced Surface Protection</li>
                  <li>• Paint-Safe Techniques</li>
                  <li>• Nano-Ceramic Shielding</li>
                  <li>• Interior Steam Sanitization</li>
                  <li>• Professional Grade Equipment</li>
                  <li>• Luxury Finish Standards</li>
                </ul>
              </div>
            </motion.div>

          </div>
        </section>
      ))}

      {/* ================= FINAL CTA ================= */}
      <section className="relative bg-black text-white py-40 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            Elevate Your Drive.
          </h2>

          <p className="text-gray-400 mt-6 text-lg">
            Experience next-generation automotive refinement.
          </p>

          <button className="mt-10 bg-white text-black px-12 py-4 rounded-full text-lg shadow-2xl hover:bg-gray-200 transition">
            Schedule Appointment
          </button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
