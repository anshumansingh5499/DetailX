import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTrophy, FaAward, FaMedal } from "react-icons/fa";
import { SiBmw, SiAudi, SiTesla, SiMercedes } from "react-icons/si";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/hero-car.jpg";

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

const About = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-500 uppercase tracking-widest mb-4 text-sm">
              Premium Car Detailing
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crafting <span className="text-blue-500">Perfection</span> 
              <br /> Since 2015
            </h1>

            <p className="mt-8 text-gray-400 max-w-lg leading-relaxed">
              We redefine automotive detailing with precision, luxury finishes,
              and unmatched attention to detail. Every vehicle we touch becomes
              a masterpiece.
            </p>

            <button className="mt-10 bg-blue-500 px-8 py-4 rounded-full text-black font-semibold hover:bg-orange-400 transition">
              Explore Services
            </button>
          </motion.div>

          {/* Glass Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-10 text-center">

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  <Counter end={12000} />+
                </h3>
                <p className="text-gray-400 mt-2">Cars Detailed</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  <Counter end={750} />+
                </h3>
                <p className="text-gray-400 mt-2">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  <Counter end={10} />+
                </h3>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-blue-500">
                  24/7
                </h3>
                <p className="text-gray-400 mt-2">Premium Support</p>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY – SPLIT LAYOUT */}
      <section className="bg-white py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-bold mb-8">
              Our Philosophy
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We believe automotive care is an art form. From paint correction
              to ceramic coating, every service is delivered with meticulous
              craftsmanship and industry-leading products.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our mission is simple — elevate every vehicle to showroom
              perfection while delivering an unforgettable luxury experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={aboutImg}
              alt="About"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section className="bg-black py-28 px-6 md:px-12 text-center text-white">
        <h2 className="text-4xl font-bold mb-12">
          Experience Our Craft
        </h2>

        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 backdrop-blur-xl bg-white/5 shadow-2xl">
          <iframe
            className="w-full h-[450px]"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Car Detailing"
            allowFullScreen
          />
        </div>
      </section>

      {/* AWARDS SECTION */}
      <section className="bg-white py-28 px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Awards & Recognition
        </h2>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[
            { title: "Best Car Detailer 2023", icon: <FaTrophy size={40} /> },
            { title: "Top Service Award", icon: <FaAward size={40} /> },
            { title: "Customer Choice 2024", icon: <FaMedal size={40} /> },
          ].map((award, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition"
            >
              <div className="flex justify-center mb-6 text-blue-500">
                {award.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {award.title}
              </h3>

              <p className="text-gray-500 text-sm">
                Recognized for excellence in premium automotive detailing.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BRAND LOGOS */}
      <section className="bg-gray-50 py-20 text-center">
        <h3 className="text-3xl font-bold mb-12">
          Trusted By Premium Brands
        </h3>

        <div className="flex justify-center gap-16 text-gray-400">
          {[SiBmw, SiAudi, SiTesla, SiMercedes].map((Icon, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.2 }}
              className="hover:text-black transition"
            >
              <Icon size={60} />
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
