import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import washingImg from "../assets/washing.jpg";
import BookingModal from "./BookingModal";

const features = [
  "250,000+ Professional Cleans",
  "VIP & Annual Pass Programs",
  "100% Satisfaction Guarantee",
  "Flexible & Cost-Effective Solutions",
];

const WashingSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative bg-[#071326] text-white py-36 px-6 md:px-20 overflow-hidden">

        {/* Subtle Brand Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.5em] text-xs text-cyan-400 mb-10">
              Professional Washing
            </p>

            <h2 className="text-5xl md:text-6xl font-light leading-[1] tracking-tight">
              Refined.
              <br />
              Restored.
              <br />
              <span className="text-white">Protected.</span>
            </h2>

            <p className="mt-12 text-gray-300 max-w-xl leading-relaxed text-lg">
              Our precision washing system combines advanced surface-safe
              techniques with refined finishing standards. Every vehicle
              leaves with amplified clarity and long-lasting brilliance.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 mt-20">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="border-b border-white/10 pb-4"
                >
                  <span className="text-base text-gray-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-24 flex flex-col sm:flex-row sm:items-center gap-14">

              <div>
                <p className="text-sm text-gray-400">
                  24/7 Premium Support
                </p>
                <p className="text-2xl font-light mt-2 text-white">
                  +91 9980889181
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="px-12 py-4 border border-cyan-400 
                           text-cyan-400 hover:bg-cyan-400 
                           hover:text-black transition-all duration-500"
              >
                Schedule Appointment
              </motion.button>

            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Frame */}
            <div className="absolute -top-8 -left-8 w-full h-full border border-white/10" />

            <img
              src={washingImg}
              alt="Professional Car Washing"
              className="relative w-full h-[650px] object-cover shadow-2xl"
            />

            {/* Subtle Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-16 bg-cyan-400/20 blur-2xl rounded-full" />
          </motion.div>

        </div>
      </section>

      {/* Booking Modal */}
      <AnimatePresence>
        {open && <BookingModal close={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default WashingSection;