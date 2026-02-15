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
    <section className="bg-white text-black py-36 px-6 md:px-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-32"
      >
        <p className="uppercase tracking-[0.4em] text-xs text-black/40 mb-6">
          Client Experience
        </p>

        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
          Words From Our Clients
        </h2>
      </motion.div>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-20 items-start">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`relative ${
              item.highlight ? "md:-mt-10" : ""
            }`}
          >

            {/* Large Subtle Quote Mark */}
            <div className="absolute -top-10 left-0 text-[120px] font-light text-black/5 leading-none select-none">
              “
            </div>

            {/* Quote Text */}
            <p
              className={`relative text-lg leading-relaxed ${
                item.highlight
                  ? "text-black text-xl md:text-2xl font-light"
                  : "text-black/60"
              }`}
            >
              {item.text}
            </p>

            {/* Divider */}
            <div className="w-12 h-[1px] bg-black/20 mt-10 mb-6" />

            {/* Name */}
            <div>
              <h4 className="text-base font-medium">
                {item.name}
              </h4>
              <p className="text-sm text-black/40 mt-1">
                {item.role}
              </p>
            </div>

          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-32">
        <button className="px-10 py-3 border border-black/30 rounded-full 
                           text-sm tracking-widest 
                           hover:bg-black hover:text-white 
                           transition-all duration-500">
          VIEW ALL TESTIMONIALS
        </button>
      </div>

    </section>
  );
};

export default TestimonialsSection;
