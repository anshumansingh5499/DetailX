import { motion } from "framer-motion";

const plans = [
  {
    name: "Standard Wash",
    price: "$29",
    features: [
      "Exterior Hand Wash",
      "Wheel Cleaning",
      "Interior Vacuum",
      "Microfiber Dry Finish",
    ],
  },
  {
    name: "Unlimited Club",
    price: "$79",
    highlight: true,
    features: [
      "Unlimited Monthly Washes",
      "Priority Member Lane",
      "Free Vacuums",
      "Interior Wipe Down",
      "Wheel & Tire Shine",
    ],
  },
  {
    name: "Premium Detail",
    price: "$149",
    features: [
      "Full Interior Detailing",
      "Clay Bar Treatment",
      "Paint Protection",
      "Leather Conditioning",
      "Ceramic Sealant",
    ],
  },
];

const PricingSection = () => {
  return (
    <section className="bg-black text-white py-32 px-6 md:px-16">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-24"
      >
        <p className="uppercase tracking-[0.3em] text-xs text-orange-500 mb-6">
          Membership Plans
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Choose Your Package
        </h2>
      </motion.div>

      {/* Pricing Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`relative p-10 border rounded-3xl transition-all duration-500 ${
              plan.highlight
                ? "border-white bg-white text-black scale-105"
                : "border-white/10 bg-white/5"
            }`}
          >
            {/* Plan Name */}
            <h3 className="text-2xl font-semibold mb-6">
              {plan.name}
            </h3>

            {/* Price */}
            <div className="text-5xl font-bold mb-10">
              {plan.price}
              <span className="text-base font-normal opacity-60">
                /month
              </span>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-12">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`border-b pb-3 ${
                    plan.highlight ? "border-black/10" : "border-white/10"
                  }`}
                >
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-full transition ${
                plan.highlight
                  ? "bg-black text-white hover:bg-neutral-800"
                  : "border border-white/20 hover:bg-white hover:text-black"
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default PricingSection;
