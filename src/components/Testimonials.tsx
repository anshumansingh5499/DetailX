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
    <section className="bg-black text-white py-32 px-6 md:px-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-24"
      >
        <p className="uppercase tracking-[0.3em] text-xs text-orange-500 mb-6">
          Client Experience
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          What Our Clients Say
        </h2>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative ${
              item.highlight
                ? "bg-white text-black p-12 rounded-3xl"
                : "p-8 border-t border-white/10"
            }`}
          >
            {/* Quote */}
            <p
              className={`text-xl leading-relaxed ${
                item.highlight ? "font-medium" : "text-gray-300"
              }`}
            >
              “{item.text}”
            </p>

            {/* Divider */}
            <div
              className={`h-[1px] my-10 ${
                item.highlight
                  ? "bg-black/10"
                  : "bg-white/10"
              }`}
            />

            {/* Name */}
            <div>
              <h4 className="text-lg font-semibold">
                {item.name}
              </h4>
              <p
                className={`text-sm ${
                  item.highlight ? "text-gray-600" : "text-gray-500"
                }`}
              >
                {item.role}
              </p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Bottom Link */}
      <div className="text-center mt-24">
        <button className="uppercase tracking-widest text-sm border-b border-white/30 pb-2 hover:border-white transition">
          View All Testimonials
        </button>
      </div>

    </section>
  );
};

export default TestimonialsSection;
