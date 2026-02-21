import { motion } from "framer-motion";
import { useState } from "react";
import ceramic from "../assets/ceramic.jpg";
import wheel1 from "../assets/detailing.jpg";
import wheel2 from "../assets/washing.jpg";
import detailing from "../assets/wheel.jpg";

const services = [
  {
    title: "CERAMIC COATING",
    image: ceramic,
    description:
      "Advanced nano-ceramic protection that enhances gloss and preserves paint for years.",
  },
  {
    title: "WHEEL SCRATCH REPAIR",
    image: wheel1,
    description:
      "Precision alloy wheel restoration removing scratches and curb damage.",
  },
  {
    title: "INTERIOR DETAILING",
    image: wheel2,
    description:
      "Deep interior restoration that revitalizes leather and trim surfaces.",
  },
  {
    title: "EXTERIOR DETAILING",
    image: detailing,
    description:
      "Comprehensive exterior polishing for showroom brilliance.",
  },
];

const ServicesSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-[#071326] text-white py-28 px-6 md:px-16 overflow-hidden">

      {/* Subtle Brand Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <p className="uppercase tracking-[0.5em] text-xs text-cyan-400 mb-6">
          Our Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
          Precision Detailing.
          <br />
          <span className="text-white">Crafted for Excellence.</span>
        </h2>
      </div>

      {/* Expanding Cards */}
      <div className="flex flex-col md:flex-row h-auto md:h-[520px] gap-4 max-w-7xl mx-auto relative z-10">

        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              onClick={() => setActive(index)}
              className="relative overflow-hidden cursor-pointer flex items-end transition-all duration-700 rounded-xl"
              animate={{
                flex: isActive ? 3 : 1,
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* Background Image with Zoom */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                animate={{
                  scale: isActive ? 1.05 : 1,
                }}
                transition={{ duration: 0.8 }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative p-8 z-10 w-full">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                  {service.title}
                </h3>

                <motion.div
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mt-4 text-sm text-gray-300 max-w-sm">
                    {service.description}
                  </p>

                  <button className="mt-6 text-xs uppercase tracking-[0.3em] border-b border-white pb-1 hover:opacity-70 transition">
                    Discover →
                  </button>
                </motion.div>
              </div>

              {/* Active Indicator Line */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400"
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;