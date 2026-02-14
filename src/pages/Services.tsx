import { motion } from "framer-motion";
import {
  Droplets,
  Sparkles,
  Wrench,
  CheckCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

import ceramic from "../assets/ceramic.jpg";
import detailing from "../assets/detailing.jpg";
import washing from "../assets/washing.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    title: "Express Wash",
    icon: Droplets,
    image: washing,
    description:
      "Quick exterior wash with premium foam treatment and hand-dry finish.",
    features: [
      "Foam Wash",
      "Wheel Cleaning",
      "Exterior Drying",
      "Tire Shine",
    ],
  },
  {
    title: "Full Detailing",
    icon: Sparkles,
    image: detailing,
    description:
      "Complete interior & exterior detailing for showroom-level shine.",
    features: [
      "Interior Vacuum",
      "Dashboard Polish",
      "Clay Treatment",
      "Ceramic Protection",
    ],
  },
  {
    title: "Oil Change",
    icon: Wrench,
    image: ceramic,
    description:
      "Professional oil replacement with premium synthetic oils.",
    features: [
      "Oil Replace",
      "Filter Change",
      "Fluid Check",
      "Inspection",
    ],
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-blue-500 uppercase tracking-widest text-sm mb-6"
          >
            Our Expertise
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl"
          >
            Precision Services.
            <br />
            <span className="text-blue-500">Engineered for Excellence.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 mt-8 max-w-xl text-lg"
          >
            We combine technology, craftsmanship, and premium products
            to deliver unmatched automotive care.
          </motion.p>
        </div>
      </section>

      {/* SERVICES – ALTERNATING LUXURY SECTIONS */}
      <section className="bg-white py-32 px-6 md:px-12 space-y-32">

        {services.map((service, index) => {
          const Icon = service.icon;
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: isReverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: isReverse ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-600 p-4 rounded-full text-white">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                {/* Glass Feature Box */}
                <div className="bg-gray-50 border border-gray-100 backdrop-blur-lg p-8 rounded-3xl shadow-lg">
                  <h4 className="font-semibold mb-6 text-gray-800">
                    What's Included
                  </h4>

                  <ul className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-blue-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-10 bg-black text-white px-10 py-4 rounded-full hover:bg-gray-900 transition">
                  Book Now
                </button>
              </motion.div>
            </div>
          );
        })}

      </section>

      {/* WHY CHOOSE US – DARK PREMIUM BLOCK */}
      <section className="bg-black text-white py-32 px-6 md:px-12">

        <div className="max-w-6xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold">
            Why Choose Us
          </h2>
          <p className="text-gray-400 mt-4">
            Excellence is not optional — it's standard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {[ 
            {
              icon: <ShieldCheck size={32} />,
              title: "Certified Professionals",
              text: "Highly trained detailing specialists.",
            },
            {
              icon: <Star size={32} />,
              title: "Premium Materials",
              text: "Top-grade products for lasting protection.",
            },
            {
              icon: <Sparkles size={32} />,
              title: "Unmatched Finish",
              text: "Showroom-level results every time.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 
                         p-10 rounded-3xl text-center hover:bg-white/10 transition"
            >
              <div className="text-blue-500 mb-6 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-32 text-center">

        <h2 className="text-4xl font-bold">
          Ready to Elevate Your Vehicle?
        </h2>

        <p className="text-gray-600 mt-6">
          Experience premium automotive care like never before.
        </p>

        <button className="mt-10 bg-blue-600 text-white px-12 py-4 rounded-full 
                           hover:bg-red-700 transition text-lg shadow-lg">
          Schedule Appointment
        </button>

      </section>

      <Footer />
    </>
  );
};

export default Services;
