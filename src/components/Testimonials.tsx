import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Anjali Mehra",
    role: "Automotive Advisor",
    text: `The attention to detail is unmatched. Every surface was restored to absolute perfection. It felt like driving a brand-new car again.`,
  },
  {
    name: "Shreya Kapoor",
    role: "Luxury Car Owner",
    text: `Simply exceptional. The finish, the clarity, the depth of shine — it exceeded every expectation. I wouldn’t trust anyone else.`,
    highlight: true,
  },
  {
    name: "Tushar Singh",
    role: "Performance Enthusiast",
    text: `Precision craftsmanship at its finest. The ceramic coating transformed my vehicle completely. Highly recommended.`,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative bg-[#071326] text-white py-36 px-6 md:px-16 overflow-hidden">

      {/* Subtle Cyan Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center mb-24"
      >
        <p className="uppercase tracking-[0.6em] text-xs text-cyan-400 mb-6">
          Client Experience
        </p>

        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
          Trusted by
          <br />
          Performance Owners.
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-stretch">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative p-10 transition-all duration-500 ${
              item.highlight
                ? "bg-white/5 backdrop-blur-md border border-cyan-400/30 scale-105"
                : "border border-white/10"
            }`}
          >

            {/* Quote Mark */}
            <div className="text-6xl text-cyan-400/20 mb-6 leading-none">
              “
            </div>

            {/* Quote Text */}
            <p
              className={`leading-relaxed ${
                item.highlight
                  ? "text-xl md:text-2xl font-light text-white"
                  : "text-base text-gray-400"
              }`}
            >
              {item.text}
            </p>

            {/* Divider */}
            <div className="w-10 h-[1px] bg-cyan-400/40 my-10" />

            {/* Name + Role */}
            <div>
              <h4 className="text-base font-medium tracking-wide text-white">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500 mt-1">
                {item.role}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative text-center mt-28">
        <button
          className="px-12 py-3 border border-cyan-400 
                     text-sm tracking-[0.4em] text-cyan-400
                     hover:bg-cyan-400 hover:text-black
                     transition-all duration-500"
        >
          VIEW ALL TESTIMONIALS
        </button>
      </div>

    </section>
  );
};

export default TestimonialsSection;