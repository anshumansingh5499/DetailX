import { motion } from "framer-motion";
import ceramic from "../assets/ceramic.jpg";
import wheel1 from "../assets/detailing.jpg";
import wheel2 from "../assets/washing.jpg";
import detailing from "../assets/wheel.jpg";

const services = [
  {
    title: "CERAMIC\nCOATING",
    image: ceramic,
    description:
      "Advanced nano-ceramic protection that enhances gloss, repels contaminants, and preserves your vehicle’s paint for years.",
    features: [
      "UV & Oxidation Protection",
      "Hydrophobic Surface Shield",
      "Long-Lasting Gloss Finish",
    ],
  },
  {
    title: "WHEEL\nSCRATCH\nREPAIR",
    image: wheel1,
    description:
      "Precision alloy wheel restoration that removes scratches, curb rash, and surface imperfections.",
    features: [
      "Scratch & Curb Damage Repair",
      "Color Matching Refinishing",
      "Protective Clear Coating",
    ],
  },
  {
    title: "INTERIOR\nDETAILING",
    image: wheel2,
    description:
      "Deep interior restoration that revitalizes leather, fabric, and trim for a refined luxury experience.",
    features: [
      "Leather Conditioning",
      "Deep Vacuum Extraction",
      "Dashboard UV Protection",
    ],
  },
  {
    title: "EXTERIOR\nDETAILING",
    image: detailing,
    description:
      "Comprehensive exterior cleaning and polishing designed to restore showroom brilliance.",
    features: [
      "Paint Decontamination",
      "Machine Polishing",
      "Protective Surface Sealant",
    ],
  },
];


const ServicesSection = () => {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-24"
      >
        <p className="uppercase tracking-[0.3em] text-xs text-orange-500 mb-6">
          Our Expertise
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
          Precision Detailing
          <br />
          For Every Surface.
        </h2>
      </motion.div>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

        {services.map((service, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-[40px]"
  >
    {/* Image */}
    <div className="relative overflow-hidden">
      <motion.img
        src={service.image}
        alt={service.title}
        className="w-full h-[520px] object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
    </div>

    {/* Content Overlay */}
    <div className="absolute bottom-10 left-10 right-10">

      <h3 className="text-4xl md:text-5xl font-bold whitespace-pre-line leading-tight tracking-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-6 text-white/70 max-w-md leading-relaxed">
        {service.description}
      </p>

      {/* Features */}
      <ul className="mt-6 space-y-2 text-sm text-white/60">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Divider */}
      <div className="mt-6 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-24" />

      <button className="mt-6 text-sm uppercase tracking-widest text-gray-300 hover:text-white transition">
        Explore →
      </button>
    </div>
  </motion.div>
))}


      </div>

    </section>
  );
};

export default ServicesSection;
