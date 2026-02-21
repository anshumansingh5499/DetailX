import { motion } from "framer-motion";

import ceramic from "../assets/ceramic.jpg";
import ppf from "../assets/ppf.jpg";
import wash from "../assets/wash.jpg";
import interior from "../assets/interior.jpg";
import engine from "../assets/engine.jpg";

export default function ServicesSection() {
  return (
    <section className="relative bg-[#071326] text-white py-28 px-6 md:px-16 overflow-hidden">

      {/* Subtle Brand Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">

        {/* Section Heading */}
        <div className="max-w-2xl">
          <p className="uppercase tracking-[0.4em] text-xs text-cyan-400 mb-6">
            Our Services
          </p>

          <h2 className="text-4xl md:text-6xl font-light leading-tight tracking-tight">
            Engineered Protection.
            <br />
            <span className="text-white">Refined Detailing.</span>
          </h2>
        </div>

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 gap-8">

          <ServiceCard
            title="Ceramic Coating"
            subtitle="Advanced nano-protection engineered for superior gloss, durability, and hydrophobic performance."
            image={ceramic}
            className="md:col-span-2 h-[460px]"
          />

          <ServiceCard
            title="Paint Protection Film"
            subtitle="Precision-installed transparent shield for impact resistance and long-term paint preservation."
            image={ppf}
            className="h-[460px]"
          />
        </div>

        {/* BOTTOM ROW */}
        <div className="grid md:grid-cols-3 gap-8">

          <ServiceCard
            title="Premium Wash"
            subtitle="Safe-contact exterior wash with refined drying techniques for a flawless finish."
            image={wash}
            className="h-[420px]"
          />

          <ServiceCard
            title="Interior Detailing"
            subtitle="Deep cabin restoration including steam cleaning, conditioning, and vacuum extraction."
            image={interior}
            className="h-[420px]"
          />

          <ServiceCard
            title="Engine Bay Cleaning"
            subtitle="Carefully degreased and detailed for a clean, factory-finish presentation."
            image={engine}
            className="h-[420px]"
          />

        </div>
      </div>
    </section>
  );
}

/* ============================= */
/*        CARD COMPONENT         */
/* ============================= */

function ServiceCard({
  title,
  subtitle,
  image,
  className,
}: {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      {/* Background Image with Slow Zoom */}
      <motion.img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 1.2 }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-10 left-10 right-10">
        <h3 className="text-2xl md:text-3xl font-light tracking-wide">
          {title}
        </h3>

        <p className="text-sm text-gray-300 mt-3 leading-relaxed max-w-md">
          {subtitle}
        </p>

        {/* <div className="flex items-center gap-8 mt-8">

          <button className="text-sm uppercase tracking-[0.3em] text-cyan-400 hover:text-white transition">
            Explore →
          </button>

          <button className="text-sm border-b border-white/40 hover:border-white transition">
            Learn More
          </button>

        </div> */}
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400/60 opacity-0 hover:opacity-100 transition duration-500" />
    </motion.div>
  );
}