import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import heroVideo from "../assets/6158134-hd_1920_1080_30fps.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative w-full bg-[#050B18] text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover  "
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Brand Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-transparent to-cyan-400/10 blur-3xl pointer-events-none" />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-20 pt-36 pb-24 min-h-screen">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-[0.5em] text-[16px] sm:text-xs text-black mb-6 bg-white p-2"
        >
          SALUGARA CAR WASH & DETAILING
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.2] sm:leading-tight max-w-4xl"
        >
          Where Precision Meets
          <span className="block mt-2 font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Automotive Perfection
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-6 text-gray-400 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed"
        >
          Premium ceramic coating, detailing & protection
          crafted for vehicles that demand excellence.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 
                       text-black font-medium hover:opacity-90 transition duration-500"
          >
            Book Appointment
          </button>

          <Link to="/services">
            <button
              className="px-8 py-3 border border-blue-400/40 
                         hover:bg-blue-500/10 transition duration-500"
            >
              Explore Services
            </button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-blue-400 to-transparent animate-pulse" />
          <span className="text-[10px] tracking-widest text-gray-500 mt-2">
            SCROLL
          </span>
        </motion.div>

      </div>

      {/* OFFER SECTION */}
      <div className="relative z-10 px-4 sm:px-6 md:px-20 pb-16">

        {/* Desktop Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block max-w-5xl mx-auto relative  overflow-hidden"
        >
          {/* Animated Border */}
          <div className="absolute inset-0 rounded-xl border border-blue-400/30 animate-pulse" />

          <div className="backdrop-blur-2xl bg-white/10 px-10 py-8 ">

            <div className="flex justify-between items-center gap-6">

              <div>
                <p className="text-xs uppercase tracking-widest text-blue-400">
                  Exclusive Offer
                </p>
                <h3 className="text-2xl font-light">
                  10% Lifetime{" "}
                  <span className="text-cyan-400 font-semibold">
                    Membership
                  </span>
                </h3>
              </div>

              <div className="text-gray-300 text-sm">
                Priority booking • Special discounts • Premium protection
              </div>

              <button
                onClick={() => setOpen(true)}
                className="px-6 py-2 border border-cyan-400 text-cyan-400 
                           hover:bg-cyan-400 hover:text-black transition duration-500"
              >
                Claim Offer
              </button>

            </div>
          </div>
        </motion.div>

        {/* Mobile Compact Offer Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:hidden backdrop-blur-2xl bg-white/10 border border-blue-400/30 px-4 py-4 flex justify-between items-center"
        >
          <span className="text-sm text-blue-400 font-medium">
            10% Lifetime Membership
          </span>

          <button
            onClick={() => setOpen(true)}
            className="text-xs border border-cyan-400 text-cyan-400 px-3 py-1 rounded"
          >
            Claim
          </button>
        </motion.div>

      </div>

      {open && <BookingModal close={() => setOpen(false)} />}
    </section>
  );
};

export default Hero;