import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/hero-car.jpg";

const About = () => {
  return (
    <>
      <Navbar />

      {/* ================= CINEMATIC HERO ================= */}
      <section className="relative min-h-screen bg-black text-white overflow-hidden flex items-center">

        {/* Background */}
        <img
          src={aboutImg}
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">

          {/* Massive Typography */}
          <div>
            <h1 className="text-[80px] md:text-[120px] font-black leading-[0.9] tracking-tight">
              WE
              <br />
              BUILD
              <br />
              <span className="text-orange-500">PERFECTION</span>
            </h1>
          </div>

          {/* Statement */}
          <div>
            <p className="text-xl text-white/70 leading-relaxed max-w-lg">
              Since 2015, we have engineered detailing excellence —
              combining precision technology, advanced ceramic science,
              and obsessive craftsmanship.
            </p>

            <div className="mt-10 border-l-2 border-orange-500 pl-6">
              <p className="text-lg">
                “Every surface matters. Every detail defines luxury.”
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= WHAT MAKES US DIFFERENT ================= */}
      <section className="bg-black text-white py-40 px-8 md:px-16">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

          {/* Left Sticky Big Title */}
          <div className="sticky top-32 self-start">
            <h2 className="text-6xl font-bold leading-tight">
              What Makes
              <br />
              Us Different
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-20">

            {[
              {
                title: "Advanced Ceramic Engineering",
                text: "We apply nano-ceramic coatings engineered for extreme hydrophobic protection and long-term paint preservation."
              },
              {
                title: "Precision Paint Correction",
                text: "Multi-stage polishing removes swirl marks, oxidation, and micro scratches to restore mirror-level clarity."
              },
              {
                title: "Luxury Interior Restoration",
                text: "From leather hydration to fabric deep extraction, we restore comfort and elegance."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 10 }}
                className="border-b border-white/10 pb-10"
              >
                <h3 className="text-3xl font-semibold text-orange-500">
                  {item.title}
                </h3>
                <p className="mt-4 text-white/60 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= FLOATING STATS SECTION ================= */}
      <section className="relative bg-neutral-950 text-white py-40 px-8 md:px-16 overflow-hidden">

        <div className="max-w-7xl mx-auto relative">

          <h2 className="text-7xl font-black text-center mb-24">
            Trusted by Thousands
          </h2>

          <div className="grid md:grid-cols-3 gap-12">

            {[
              { value: "12K+", label: "Cars Detailed" },
              { value: "750+", label: "Happy Clients" },
              { value: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12 text-center shadow-xl"
              >
                <h3 className="text-5xl font-bold text-orange-500">
                  {stat.value}
                </h3>
                <p className="mt-4 text-white/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= SIGNATURE STATEMENT ================= */}
      <section className="bg-black text-white py-48 text-center px-8">

        <h2 className="text-6xl md:text-8xl font-black leading-tight max-w-5xl mx-auto">
          We Don’t Just Clean Cars.
          <br />
          <span className="text-orange-500">
            We Elevate Them.
          </span>
        </h2>

        <button className="mt-16 px-14 py-5 bg-orange-500 text-black rounded-full text-lg font-semibold hover:bg-orange-400 transition">
          Book Your Experience
        </button>

      </section>

      <Footer />
    </>
  );
};

export default About;
