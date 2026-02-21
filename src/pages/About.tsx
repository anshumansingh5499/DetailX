import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/hero-car.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative bg-[#071326] text-white pt-40 pb-36 px-6 md:px-20 overflow-hidden">

        {/* Subtle Brand Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.6em] text-xs text-cyan-400 mb-8">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] tracking-tight">
              We Build
              <br />
              <span className="font-semibold">Perfection.</span>
            </h1>

            <p className="mt-10 text-gray-300 leading-relaxed max-w-xl text-lg">
              Since 2015, we have focused on one philosophy — precision.
              Every vehicle is treated with obsessive attention, advanced
              ceramic science, and craftsmanship engineered for modern
              luxury performance vehicles.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={aboutImg}
              alt="About us"
              className="w-full h-[520px] object-cover shadow-2xl"
            />

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-400/20 blur-2xl rounded-full" />
          </motion.div>

        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="bg-[#050b16] text-white py-36 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-light mb-24"
          >
            Engineered Difference.
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-20">
            {[
              {
                title: "Ceramic Engineering",
                text: "Nano-ceramic coatings engineered for hydrophobic protection, UV resistance, and long-term durability.",
              },
              {
                title: "Paint Precision",
                text: "Multi-stage correction removes swirl marks and restores depth with microscopic accuracy.",
              },
              {
                title: "Interior Craft",
                text: "Leather conditioning, steam extraction, and refined restoration for elevated cabin luxury.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
              >
                <h3 className="text-2xl font-light mb-6">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#071326] text-white py-36 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20 text-center">

          {[
            { value: "12K+", label: "Cars Detailed" },
            { value: "750+", label: "Happy Clients" },
            { value: "10+", label: "Years of Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <h3 className="text-6xl font-extralight tracking-tight">
                {stat.value}
              </h3>
              <p className="mt-4 text-gray-400 tracking-wide">
                {stat.label}
              </p>

              <div className="mt-6 w-12 h-[2px] bg-cyan-400 mx-auto" />
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= STATEMENT CTA ================= */}
      <section className="relative bg-[#050b16] text-white py-40 text-center px-6 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto"
        >
          We Don’t Just Detail Cars.
          <br />
          <span className="font-semibold">
            We Elevate Them.
          </span>
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="relative mt-16 px-14 py-4 border border-cyan-400 
                     text-cyan-400 hover:bg-cyan-400 hover:text-black 
                     transition-all duration-500"
        >
          Book Your Experience
        </motion.button>
      </section>

      <Footer />
    </>
  );
};

export default About;