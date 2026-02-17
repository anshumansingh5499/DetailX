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
    <section className="relative bg-[#f8f8f8] text-black py-40 px-6 md:px-16 overflow-hidden">

      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-black/5 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto text-center mb-28"
      >
        <p className="uppercase tracking-[0.5em] text-xs text-black/40 mb-6">
          Client Experience
        </p>

        <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
          What Our Clients Say
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-stretch">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative p-10 transition-all duration-500 ${
              item.highlight
                ? "bg-white shadow-xl scale-105 z-10"
                : "bg-transparent"
            }`}
          >

            {/* Quote Mark */}
            <div className="text-6xl text-black/10 mb-6 leading-none">
              “
            </div>

            {/* Quote Text */}
            <p
              className={`leading-relaxed ${
                item.highlight
                  ? "text-xl md:text-2xl font-light text-black"
                  : "text-base text-black/60"
              }`}
            >
              {item.text}
            </p>

            {/* Divider */}
            <div className="w-10 h-[1px] bg-black/20 my-10" />

            {/* Name + Role */}
            <div>
              <h4 className="text-base font-medium tracking-wide">
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
      <div className="relative text-center mt-28">
        <button
          className="px-12 py-3 border border-black/30 
                     text-sm tracking-[0.3em] 
                     hover:bg-black hover:text-white 
                     transition-all duration-500"
        >
          VIEW ALL TESTIMONIALS
        </button>
      </div>

    </section>
  );
};

export default TestimonialsSection;
