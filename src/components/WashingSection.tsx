import { motion } from "framer-motion";
import washingImg from "../assets/washing.jpg";

const features = [
  "250,000+ Professional Cleans",
  "VIP & Annual Pass Programs",
  "100% Satisfaction Guarantee",
  "Flexible & Cost-Effective Solutions",
];

const WashingSection = () => {
  return (
    <section className="relative bg-black text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-950 to-black opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative overflow-hidden"
        >
          <img
            src={washingImg}
            alt="Professional Car Washing"
            className="w-full h-[620px] object-cover rounded-3xl"
          />

          {/* Soft Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl" />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[0.3em] text-xs text-orange-500 mb-6">
            Professional Washing
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] mb-8">
            Precision Cleaning.
            <br />
            Elevated Standards.
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg mb-12">
            Every vehicle is treated with meticulous attention.
            From exterior wash to interior refinement, our process
            delivers unmatched clarity, protection, and finish.
          </p>

          {/* Feature List – Minimal Lines */}
          <div className="space-y-6">
            {features.map((item, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center">
                  <span className="text-lg">{item}</span>
                  <span className="text-gray-500 group-hover:text-white transition">
                    →
                  </span>
                </div>
                <div className="h-[1px] bg-white/10 mt-4 group-hover:bg-white transition" />
              </div>
            ))}
          </div>

          {/* Call Info */}
          <div className="mt-14 flex items-center justify-between border-t border-white/10 pt-8">
            <div>
              <p className="text-sm text-gray-500">24 Hours Available</p>
              <p className="text-xl font-semibold mt-1">
                +91 70802 16257
              </p>
            </div>

            <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition">
              Book Service
            </button>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default WashingSection;
