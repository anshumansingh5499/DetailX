import { motion } from "framer-motion";

// Replace these with your actual image paths
import ceramic from "../assets/ceramic.jpg";
import ppf from "../assets/ppf.jpg";
import wash from "../assets/wash.jpg";
import interior from "../assets/interior.jpg";
import engine from "../assets/engine.jpg";

export default function ServicesSection() {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* TOP ROW */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Large Featured Card */}
          <ServiceCard
            title="Ceramic Coating"
            subtitle="Advanced nano-protection engineered for superior gloss, durability, and hydrophobic performance."
            image={ceramic}
            className="md:col-span-2 h-[440px]"
          />

          {/* Secondary Featured Card */}
          <ServiceCard
            title="Paint Protection Film (PPF)"
            subtitle="Precision-installed transparent shield for impact resistance and long-term paint preservation."
            image={ppf}
            className="h-[440px]"
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
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden bg-black shadow-md ${className}`}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-8 left-8 text-white max-w-md">
        <h3 className="text-2xl font-light tracking-tight">
          {title}
        </h3>

        <p className="text-sm text-gray-300 mt-2 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex items-center gap-6 mt-6">
          <button className="bg-blue-600 hover:bg-blue-700 transition px-6 py-2 text-sm font-medium">
            Explore service
          </button>

          <button className="text-sm border-b border-white/50 hover:border-white">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
}
