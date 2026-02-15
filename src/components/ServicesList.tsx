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
      "Multi-stage exterior refinement ensuring safe-contact washing, paint-safe drying techniques, and advanced surface protection.",
    image: ceramic,
  },
  {
    title: "Full Service Wash",
    desc: "Interior refinement meets exterior perfection.",
    details:
      "Deep vacuum extraction, dashboard conditioning, and curated tactile restoration for a premium cabin experience.",
    image: wheel1,
  },
  {
    title: "Auto Detailing",
    desc: "Luxury-grade paint correction & ceramic shielding.",
    details:
      "Precision polishing and nano-ceramic coatings engineered for durability and gloss amplification.",
    image: wheel2,
  },
  {
    title: "Complete Wash",
    desc: "Total surface restoration for showroom depth.",
    details:
      "A comprehensive detailing immersion combining gloss amplification and interior rejuvenation.",
    image: detailing,
  },
];

const ServicesPorsche = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
      className="relative h-[400vh] bg-white "
    >
      <div className="sticky top-0 h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-24 py-10">

        {/* Vertical Progress Indicator */}
        <div className="hidden md:block absolute left-20 top-1/2 -translate-y-1/2 h-72 w-[1px] bg-black/10">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-black origin-top"
          />
        </div>

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 h-[55vh] md:h-[75vh] relative overflow-hidden rounded-[32px] mb-10 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={services[active].image}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-black md:pl-28">

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-8">
                Service {active + 1}
              </p>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-[1.05]">
                {services[active].title}
              </h2>

              <p className="mt-8 text-lg text-black/80 max-w-xl leading-relaxed">
                {services[active].desc}
              </p>

              <p className="mt-6 text-sm text-black/50 max-w-xl leading-relaxed">
                {services[active].details}
              </p>

              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className="mt-12 px-10 py-4 border border-black/30 rounded-full tracking-widest text-sm
                           hover:bg-black hover:text-white transition-all duration-700"
              >
                DISCOVER
              </motion.button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default ServicesPorsche;
