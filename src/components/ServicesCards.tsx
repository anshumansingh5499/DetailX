import { motion } from "framer-motion";
import ceramic from "../assets/ceramic.jpg";
import wheel1 from "../assets/detailing.jpg";
import wheel2 from "../assets/washing.jpg";
import detailing from "../assets/wheel.jpg";

const services = [
  {
    title: "CERAMIC COATING",
    image: ceramic,
    description:
      "Advanced nano-ceramic protection that enhances gloss, repels contaminants, and preserves your vehicle’s paint for years.",
  },
  {
    title: "WHEEL SCRATCH REPAIR",
    image: wheel1,
    description:
      "Precision alloy wheel restoration that removes scratches and curb damage.",
  },
  {
    title: "INTERIOR DETAILING",
    image: wheel2,
    description:
      "Deep interior restoration that revitalizes leather, fabric, and trim.",
  },
  {
    title: "EXTERIOR DETAILING",
    image: detailing,
    description:
      "Comprehensive exterior cleaning and polishing for showroom brilliance.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto mb-16"
      >
        <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-4">
          Our Expertise
        </p>

        <h2 className="text-4xl md:text-6xl font-light leading-tight text-black">
          Precision Detailing.
          Crafted for Excellence.
        </h2>
      </motion.div>

      {/* Compact Grid */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <motion.img
                src={service.image}
                alt={service.title}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="w-full h-[380px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="mt-6">
              <h3 className="text-xl md:text-2xl font-medium text-black">
                {service.title}
              </h3>

              <p className="mt-3 text-neutral-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>

              <button className="mt-4 text-sm uppercase tracking-widest text-black border-b border-black pb-1 hover:opacity-60 transition">
                Discover →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
