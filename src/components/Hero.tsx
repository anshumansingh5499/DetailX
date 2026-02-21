import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "./BookingModal";
import heroVideo from "../assets/6158134-hd_1920_1080_30fps.mp4";
// import logo from "../assets/washlogo-removebg-preview.png";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#071326]">

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

      {/* Blue Brand Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Subtle Cyan Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-20 text-white">

        {/* Logo */}
       

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-light leading-tight tracking-tight max-w-3xl"
        >
          Elevate Your
          <span className="block text-cyan-400 font-medium">
            Car Care Experience.
          </span>
        </motion.h1>

        {/* Subtext */}
        <p className="mt-6 text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
          Professional detailing. Advanced ceramic coating.
          Underbody protection. Precision finish.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex gap-6">

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-cyan-400 text-black 
                       hover:bg-cyan-300 transition duration-300"
          >
            Book Appointment
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/50 
                       hover:bg-white hover:text-black transition duration-300"
          >
            Explore Services
          </motion.button>

        </div>
      </div>

      {/* Bottom Premium Line */}
      <div className="absolute bottom-6 w-full text-center text-xs tracking-widest text-white/60">
        SALUGARA CAR WASH & DETAILING • BSF ROAD • 9980889181
      </div>

      {/* Modal */}
      {open && <BookingModal close={() => setOpen(false)} />}
    </section>
  );
};

export default Hero;