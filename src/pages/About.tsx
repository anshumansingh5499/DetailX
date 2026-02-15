import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import { SiBmw, SiAudi, SiTesla, SiMercedes } from "react-icons/si";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/hero-car.jpg";

/* ================= COUNTER ================= */
const Counter = ({ end }: { end: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end]);

  return <span>{count}</span>;
};

/* ================= ABOUT PAGE ================= */
const About = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">

        {/* Background */}
        <motion.img
          src={aboutImg}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="uppercase tracking-widest text-gray-400 mb-6 text-sm">
              Since 2015
            </p>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Where Precision
              <br />
              Meets <span className="text-white/60">Perfection</span>
            </h1>

            <p className="mt-8 text-gray-400 max-w-xl leading-relaxed">
              We transform vehicles into rolling masterpieces using
              cutting-edge detailing technology and meticulous craftsmanship.
            </p>

            <button className="mt-10 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition">
              Discover Our Work
            </button>
          </motion.div>

          {/* Right Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-2 gap-10 backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-12 shadow-2xl"
          >
            <div>
              <h3 className="text-4xl font-bold">
                <Counter end={12000} />+
              </h3>
              <p className="text-gray-400 mt-2">Cars Detailed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                <Counter end={750} />+
              </h3>
              <p className="text-gray-400 mt-2">Happy Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">
                <Counter end={10} />+
              </h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="text-gray-400 mt-2">Premium Support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="bg-black text-white py-32 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-5xl font-bold">Our Journey</h2>
        </div>

        <div className="relative border-l border-white/20 max-w-3xl mx-auto space-y-20">

          {[
            { year: "2015", text: "Founded with a vision to redefine automotive detailing." },
            { year: "2018", text: "Introduced nano-ceramic protection technology." },
            { year: "2021", text: "Expanded to serve premium luxury brands." },
            { year: "2024", text: "Recognized as industry leader in detailing excellence." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative pl-12"
            >
              <div className="absolute left-[-8px] top-2 w-4 h-4 bg-white rounded-full" />
              <h3 className="text-2xl font-bold">{item.year}</h3>
              <p className="text-gray-400 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="bg-neutral-950 text-white py-32 px-6 md:px-12 text-center">
        <h2 className="text-5xl font-bold mb-20">Awards & Recognition</h2>

        <div className="flex flex-wrap justify-center gap-16">
          {[FaTrophy, FaAward, FaMedal].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              className="p-10 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10"
            >
              <Icon size={50} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= BRAND STRIP ================= */}
      <section className="bg-black py-24 text-center">
        <h3 className="text-3xl font-bold text-white mb-12">
          Trusted By Premium Brands
        </h3>

        <div className="flex justify-center gap-20 text-gray-500">
          {[SiBmw, SiAudi, SiTesla, SiMercedes].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="hover:text-white transition"
            >
              <Icon size={70} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-gradient-to-b from-black to-neutral-900 text-white py-40 text-center">
        <h2 className="text-5xl md:text-6xl font-bold">
          Experience Detailing Excellence
        </h2>

        <button className="mt-10 px-12 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition">
          Book Your Appointment
        </button>
      </section>

      <Footer />
    </>
  );
};

export default About;
