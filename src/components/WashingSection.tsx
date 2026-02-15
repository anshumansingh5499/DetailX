import { motion } from "framer-motion";
import washingImg from "../assets/washing.jpg";

const features = [
  "250,000+ Professional Cleans",
  "VIP & Annual Pass Programs",
  "100% Satisfaction Guarantee",
  "Flexible & Cost-Effective Solutions",
];

const WashingSection = () => {
  return (
    <section className="bg-white py-36 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[0.4em] text-xs text-neutral-400 mb-8">
            Professional Washing
          </p>

          <h2 className="text-6xl md:text-7xl font-light leading-[0.95] tracking-tight text-black">
            Refined.
            <br />
            Restored.
            <br />
            Protected.
          </h2>

          <p className="mt-10 text-neutral-600 max-w-xl leading-relaxed text-lg">
            Our precision washing system combines advanced surface-safe
            techniques with refined finishing standards. Every vehicle
            leaves with amplified clarity and long-lasting brilliance.
          </p>

          {/* Features – 2 Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 mt-16">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-neutral-200 pb-4"
              >
                <span className="text-base text-black">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 flex flex-col sm:flex-row sm:items-center gap-10">

            <div>
              <p className="text-sm text-neutral-400">
                24/7 Premium Support
              </p>
              <p className="text-2xl font-medium mt-2 text-black">
                +91 70802 16257
              </p>
            </div>

            <button className="px-10 py-4 border border-black rounded-full 
                               hover:bg-black hover:text-white 
                               transition-all duration-500 w-fit">
              Schedule Appointment
            </button>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-full h-full border border-neutral-200 rounded-3xl" />

          <img
            src={washingImg}
            alt="Professional Car Washing"
            className="relative w-full h-[650px] object-cover rounded-3xl shadow-xl"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default WashingSection;
