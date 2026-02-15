import { useState } from "react";
import BookingModal from "./BookingModal";
import heroVideo from "../assets/181537-866999852_medium.mp4";

const Hero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden text-white">

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

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20">

        <p className="uppercase tracking-[0.4em] text-xs text-orange-500 mb-6">
          Premium Automotive Detailing
        </p>

        <h1 className="text-6xl md:text-8xl font-light leading-[0.95]">
          Drive the Art of <br />
          <span className="font-semibold">Perfection.</span>
        </h1>
 <p className="mt-8 text-base md:text-lg text-white/70 max-w-xl leading-relaxed">
          Precision ceramic coating, elite paint correction,
          and handcrafted interior restoration for those who
          demand nothing but excellence.
        </p>
        <div className="mt-12 flex gap-6">

          <button
            onClick={() => setOpen(true)}
            className="px-10 py-4 bg-white text-black rounded-full 
                       hover:bg-white/80 transition-all duration-500"
          >
            Book Appointment
          </button>

          <button
            className="px-10 py-4 border border-white/40 rounded-full 
                       hover:bg-white hover:text-black transition-all duration-500"
          >
            Discover More
          </button>

        </div>
      </div>

      {/* Modal */}
      {open && <BookingModal close={() => setOpen(false)} />}
    </section>
  );
};

export default Hero;
