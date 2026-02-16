import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import washingImg from "../assets/washing.jpg";
import coatingImg from "../assets/ceramic.jpg";
import ppfImg from "../assets/detailing.jpg";
import addonImg from "../assets/wheel.jpg";

type Category = "Washing" | "Coating" | "PPF" | "Add-On Services";

const servicesData: Record<
  Category,
  {
    image: string;
    items: { title: string; desc: string; price: string }[];
  }
> = {
  Washing: {
    image: washingImg,
    items: [
      {
        title: "Top Wash",
        desc: "Exterior foam cleanse with gloss finish.",
        price: "₹ 300–500",
      },
      {
        title: "Premium Wash",
        desc: "Complete wash with interior refresh.",
        price: "₹ 600–1000",
      },
    ],
  },
  Coating: {
    image: coatingImg,
    items: [
      {
        title: "Ceramic Coating",
        desc: "Advanced nano-ceramic paint protection.",
        price: "₹ 18,000",
      },
      {
        title: "Graphene Coating",
        desc: "Ultra hydrophobic long-term surface shield.",
        price: "₹ 25,000",
      },
    ],
  },
  PPF: {
    image: ppfImg,
    items: [
      {
        title: "Partial PPF",
        desc: "Protection for high-impact areas.",
        price: "₹ 35,000",
      },
      {
        title: "Full Body PPF",
        desc: "Complete paint protection coverage.",
        price: "₹ 1,20,000",
      },
    ],
  },
  "Add-On Services": {
    image: addonImg,
    items: [
      {
        title: "Engine Cleaning",
        desc: "Safe degreasing & engine bay refinement.",
        price: "₹ 1,200",
      },
      {
        title: "Headlight Restoration",
        desc: "Clarity restoration & UV protection.",
        price: "₹ 1,500",
      },
    ],
  },
};

export default function PorscheServices() {
  const [active, setActive] = useState<Category>("Washing");

  return (
    <section className="bg-black text-white min-h-screen flex">

      {/* LEFT — Cinematic Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={servicesData[active].image}
            src={servicesData[active].image}
            alt={active}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* RIGHT — Content */}
      <div className="w-full lg:w-1/2 px-8 md:px-20 py-24 flex flex-col justify-center">

        {/* Section Label */}
        <p className="uppercase tracking-[0.5em] text-xs text-gray-500 mb-16">
          Our Services
        </p>

        {/* Large Category Navigation */}
        <div className="space-y-8 mb-24">
          {(Object.keys(servicesData) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="block text-left group"
            >
              <motion.h2
                className={`text-5xl md:text-6xl font-extralight tracking-tight transition-all duration-500 ${
                  active === cat
                    ? "text-white"
                    : "text-gray-600 group-hover:text-gray-300"
                }`}
              >
                {cat}
              </motion.h2>

              {active === cat && (
                <motion.div
                  layoutId="line"
                  className="h-[1px] bg-white mt-4 w-24"
                />
              )}
            </button>
          ))}
        </div>

        {/* Service Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            {servicesData[active].items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-t border-gray-800 pt-8"
              >
                <div>
                  <h3 className="text-2xl font-light tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-3 max-w-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <span className="text-lg font-light tracking-wider">
                  {item.price}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
