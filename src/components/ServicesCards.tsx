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
    <section className="bg-black py-24 px-6 md:px-16 text-white">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto mb-16">
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-4">
          Our Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-light leading-tight">
          Precision Detailing.
          <br /> Crafted for Excellence.
        </h2>
      </div>

      {/* Expanding Cards */}
      <div className="flex h-[500px] gap-4 max-w-7xl mx-auto">
        {services.map((service, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setActive(index)}
              className="relative rounded-2xl overflow-hidden cursor-pointer flex items-end transition-all duration-500"
              animate={{
                flex: isActive ? 3 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative p-8 z-10">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide">
                  {service.title}
                </h3>

                {isActive && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-sm text-neutral-300 max-w-sm"
                  >
                    {service.description}
                  </motion.p>
                )}

                {isActive && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-sm uppercase tracking-widest border-b border-white pb-1 hover:opacity-70 transition"
                  >
                    Discover →
                  </motion.button>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
