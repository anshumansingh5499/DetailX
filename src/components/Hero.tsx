import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import heroVideo from "../assets/6158134-hd_1920_1080_30fps.mp4";
import { Link } from "react-router-dom";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#071326] text-white">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

    
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 pt-32 pb-24">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-end mt-10">

          <div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight tracking-tight"
            >
              Elevate Your
              <span className="block text-cyan-400 font-medium">
                Car Care Experience.
              </span>
            </motion.h1>

            <p className="mt-6 text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
              Professional detailing. Advanced ceramic coating.
              Underbody protection. Precision finish.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-6">

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setOpen(true)}
                className="px-8 py-3 bg-cyan-400 text-black 
                           hover:bg-cyan-300 transition duration-300"
              >
                Book Appointment
              </motion.button>

              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white/50 
                             hover:bg-white hover:text-black transition duration-300"
                >
                  Explore Services
                </motion.button>
              </Link>

            </div>

          </div>

          {/* ================= OFFER PANEL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="mt-16 lg:mt-0 flex justify-start lg:justify-end"
          >
            <div className="w-full lg:w-[380px] backdrop-blur-xl bg-white/5 border border-white/10 p-8 lg:p-10 relative">

              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400/60" />

              <p className="uppercase text-xs tracking-[0.5em] text-gray-400 mb-6">
                Exclusive Offer
              </p>

              <h3 className="text-2xl lg:text-3xl font-light leading-snug">
                10% Lifetime
                <br />
                <span className="text-cyan-400 font-medium">
                  Membership
                </span>
              </h3>

              <p className="mt-6 text-gray-400 text-sm leading-relaxed">
                Enjoy priority service, exclusive discounts,
                and long-term vehicle protection benefits
                crafted for premium owners.
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/10 my-8" />

              <div className="flex justify-between text-sm text-gray-400">
                <span>Valid For</span>
                <span className="text-white">Limited Period</span>
              </div>

              <div className="flex justify-between text-sm text-gray-400 mt-3">
                <span>Category</span>
                <span className="text-white">All Services</span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

     

      {/* Booking Modal */}
      {open && <BookingModal close={() => setOpen(false)} />}
    </section>
  );
};

export default Hero;