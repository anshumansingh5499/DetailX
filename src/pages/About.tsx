import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/hero-car.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO (MINIMAL) ================= */}
      <section className="bg-white pt-40 pb-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[0.4em] text-xs text-gray-400 mb-6">
              About Us
            </p>

            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] text-black">
              We Build
              <br />
              <span className="font-medium">Perfection.</span>
            </h1>

            <p className="mt-8 text-gray-600 leading-relaxed max-w-lg">
              Since 2015, we have focused on one philosophy — precision.
              Every vehicle is treated with obsessive attention, advanced
              ceramic science, and craftsmanship that defines modern luxury.
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="overflow-hidden rounded-3xl"
          >
            <img
              src={aboutImg}
              alt="About us"
              className="w-full h-[480px] object-cover"
            />
          </motion.div>

        </div>
      </section>

      {/* ================= VALUES / DIFFERENCE ================= */}
      <section className="bg-neutral-50 py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-light text-black mb-20"
          >
            What Makes Us Different
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                title: "Ceramic Engineering",
                text: "Nano-ceramic coatings engineered for hydrophobic protection, UV resistance, and long-term durability.",
              },
              {
                title: "Paint Precision",
                text: "Multi-stage paint correction removes swirl marks and restores deep gloss with microscopic accuracy.",
              },
              {
                title: "Interior Craft",
                text: "Leather conditioning, fabric extraction, and refined interior restoration for a luxury finish.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <h3 className="text-xl font-medium text-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATS (CLEAN) ================= */}
      <section className="bg-white py-28 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center">

          {[
            { value: "12K+", label: "Cars Detailed" },
            { value: "750+", label: "Happy Clients" },
            { value: "10+", label: "Years of Experience" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="border border-gray-200 rounded-2xl py-14"
            >
              <h3 className="text-4xl font-medium text-black">
                {stat.value}
              </h3>
              <p className="mt-3 text-gray-500 text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= STATEMENT CTA ================= */}
      <section className="bg-neutral-50 py-32 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-light leading-tight max-w-4xl mx-auto text-black"
        >
          We Don’t Just Detail Cars.
          <br />
          <span className="font-medium">
            We Elevate Them.
          </span>
        </motion.h2>

        <button
          className="mt-14 px-12 py-4 border border-black rounded-full 
                     hover:bg-black hover:text-white transition-all duration-500"
        >
          Book Your Experience
        </button>
      </section>

      <Footer />
    </>
  );
};

export default About;
