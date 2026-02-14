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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      services.length - 1,
      Math.floor(latest * services.length)
    );
    setActive(index);
  });

  const progressHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className={`relative h-[500vh] transition-colors duration-700 ${services[active].bg}`}
    >
      <div className="mt-6 sticky top-0 h-screen flex flex-col md:flex-row items-center px-6 md:px-24">

        {/* Progress Indicator */}
        <div className="hidden md:block absolute left-12 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-white/20">
          <motion.div
            style={{ height: progressHeight }}
            className="w-full bg-white origin-top"
          />
        </div>

        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] relative rounded-[40px] overflow-hidden mb-12 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={active}
              src={services[active].image}
              initial={{ opacity: 0, filter: "blur(40px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(40px)" }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover rounded-[40px]"
            />
          </AnimatePresence>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 text-white relative ml-8">

          {/* Title with Character Reveal */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={active}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.03 },
                },
              }}
              className="text-4xl md:text-6xl font-light tracking-tight"
            >
              {services[active].title.split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                  className="inline-block cursor-default"
                >
                  {char}
                </motion.span>
              ))}
            </motion.h2>
          </AnimatePresence>

          {/* Description */}
          <motion.p
            key={active + "desc"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 md:mt-12 text-base md:text-lg leading-relaxed max-w-full md:max-w-xl"
          >
            {services[active].desc}
          </motion.p>

          {/* Extra Professional Content */}
          <motion.p
            key={active + "details"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 md:mt-8 text-sm md:text-base max-w-full md:max-w-xl leading-relaxed"
          >
            {services[active].details}
          </motion.p>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 md:mt-16 px-6 md:px-8 py-3 md:py-4 border border-white/30 rounded-full text-sm md:text-base tracking-widest hover:bg-white hover:text-black transition duration-500"
          >
            DISCOVER MORE
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default ServicesAwwwards;
