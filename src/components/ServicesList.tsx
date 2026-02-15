import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState } from "react";

import ceramic from "../assets/ceramic.jpg";
import wheel1 from "../assets/detailing.jpg";
import wheel2 from "../assets/washing.jpg";
import detailing from "../assets/wheel.jpg";

const services = [
  {
    title: "Express Exterior",
    desc: "A precision foam wash system engineered for hydrophobic brilliance and refined gloss retention.",
    details:
      "Our multi-stage exterior process ensures safe-contact washing, paint-safe drying techniques, and advanced surface protection that enhances longevity.",
    image: ceramic,
    bg: "bg-neutral-950",
  },
  {
    title: "Full Service Wash",
    desc: "Interior refinement meets exterior perfection.",
    details:
      "From deep vacuum extraction to dashboard conditioning, every detail is curated for a premium tactile experience.",
    image: wheel1,
    bg: "bg-neutral-900",
  },
  {
    title: "Auto Detailing",
    desc: "Luxury-grade paint correction & ceramic shielding.",
    details:
      "We restore clarity through precision polishing and protect surfaces with nano-ceramic coatings built for durability.",
    image: wheel2,
    bg: "bg-neutral-950",
  },
  {
    title: "Complete Wash",
    desc: "Total surface restoration for showroom depth.",
    details:
      "An immersive restoration package combining gloss amplification, interior rejuvenation, and surface sealing.",
    image: detailing,
    bg: "bg-neutral-900",
  },
];

const ServicesAwwwards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 🔥 Stable index calculation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const section = 1 / services.length;
    const newIndex = Math.min(
      services.length - 1,
      Math.floor(latest / section)
    );
    setActive((prev) => (prev !== newIndex ? newIndex : prev));
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className={`relative h-[400vh] transition-colors duration-700 ${services[active].bg}`}
    >
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24">

        {/* Progress Line */}
        <div className="hidden md:block absolute left-16 top-1/2 -translate-y-1/2 h-72 w-[2px] bg-white/10">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-white origin-top"
          />
        </div>

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative rounded-[40px] overflow-hidden mb-10 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={services[active].image}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-white md:pl-20">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                {services[active].title}
              </h2>

              <p className="mt-6 md:mt-10 text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
                {services[active].desc}
              </p>

              <p className="mt-4 md:mt-6 text-sm md:text-base text-white/60 max-w-xl leading-relaxed">
                {services[active].details}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 md:mt-14 px-8 py-4 border border-white/30 rounded-full tracking-widest hover:bg-white hover:text-black transition duration-500"
              >
                DISCOVER MORE
              </motion.button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default ServicesAwwwards;
