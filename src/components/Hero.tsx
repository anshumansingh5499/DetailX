import { useState } from "react";
import BookingModal from "./BookingModal";
import heroVideo from "../assets/6158134-hd_1920_1080_30fps.mp4";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Subtle Dark Gradient (Porsche Style) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-6 md:px-20 text-white">

        <h1 className="text-5xl md:text-7xl font-light leading-tight tracking-tight max-w-3xl">
          Drive the art of perfection.
        </h1>

        <p className="mt-6 text-white/80 text-base md:text-lg max-w-xl leading-relaxed">
          Precision detailing. Ceramic protection. Paint refinement.
        </p>

        <div className="mt-10 flex gap-6">

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-white text-black rounded-full 
                       hover:bg-white/80 transition duration-300"
          >
            Book Appointment
          </button>

          <button
            className="px-8 py-3 border border-white/50 rounded-full 
                       hover:bg-white hover:text-black transition duration-300"
          >
            Explore Services
          </button>

        </div>
      </div>

      {/* Modal */}
      {open && <BookingModal close={() => setOpen(false)} />}
    </section>
  );
};

export default Hero;
