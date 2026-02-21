import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { carData, type CarBrand } from "../data/carData";
import bgImage from "../assets/detailing.jpg";

/* ================= TYPES ================= */

type PricingItem = {
  name: string;
  price: number;
};

type PricingCategory =
  | "Washing"
  | "Coating"
  | "Add-on Services"
  | "PPF";

/* ================= PRICE MULTIPLIERS ================= */

const luxuryBrands: CarBrand[] = ["BMW", "Audi", "Mercedes"];
const premiumBrands: CarBrand[] = ["Toyota", "Honda", "Volkswagen"];

const getMultiplier = (brand: CarBrand | ""): number => {
  if (!brand) return 1;
  if (luxuryBrands.includes(brand)) return 1.5;
  if (premiumBrands.includes(brand)) return 1.2;
  return 1;
};

/* ================= BASE PRICING ================= */

const basePricing: Record<PricingCategory, PricingItem[]> = {
  Washing: [
    { name: "Super Wash", price: 700 },
    { name: "Premium Wash", price: 1000 },
    { name: "Deep Cleaning (Inside)", price: 2500 },
    { name: "Deep Cleaning (Outside)", price: 2900 },
    { name: "Glow Treatment", price: 2950 },
    { name: "Deep Cleaning In & Out", price: 5000 },
  ],
  Coating: [
    { name: "Ceramic Coating", price: 18000 },
    { name: "Graphene Coating", price: 25000 },
  ],
  "Add-on Services": [
    { name: "Engine Cleaning", price: 1200 },
    { name: "Headlight Restoration", price: 1500 },
  ],
  PPF: [
    { name: "Partial PPF", price: 35000 },
    { name: "Full Body PPF", price: 120000 },
  ],
};

export default function ServicesPage() {
  const [company, setCompany] = useState<CarBrand | "">("");
  const [model, setModel] = useState<string>("");
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const companies = Object.keys(carData) as CarBrand[];
  const multiplier = getMultiplier(company);
  const selectedModels = company !== "" ? carData[company] : [];

  const handleSearch = () => {
    if (company && model) setOpenModal(true);
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO SELECT ================= */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#071326] text-white overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-105 opacity-20"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-xl w-full px-10 py-16"
        >
          <h2 className="text-5xl font-light tracking-tight mb-14 text-center">
            Configure Your Vehicle
          </h2>

          {/* Brand */}
          <select
            className="w-full mb-8 px-6 py-4 bg-transparent border-b border-white/20 focus:outline-none text-lg"
            value={company}
            onChange={(e) => {
              setCompany(e.target.value as CarBrand);
              setModel("");
            }}
          >
            <option value="">Select Brand</option>
            {companies.map((comp) => (
              <option key={comp} value={comp} className="text-black">
                {comp}
              </option>
            ))}
          </select>

          {/* Model */}
          <select
            className="w-full mb-12 px-6 py-4 bg-transparent border-b border-white/20 focus:outline-none text-lg"
            value={model}
            disabled={!company}
            onChange={(e) => setModel(e.target.value)}
          >
            <option value="">Select Model</option>
            {selectedModels.map((m, i) => (
              <option key={i} value={m} className="text-black">
                {m}
              </option>
            ))}
          </select>

          <button
            onClick={handleSearch}
            className="w-full py-4 border border-cyan-400 text-cyan-400
                       hover:bg-cyan-400 hover:text-black transition duration-300"
          >
            View Pricing
          </button>
        </motion.div>
      </section>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {openModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-[#050b16] text-white w-full max-w-4xl border border-white/10 shadow-2xl"
            >
              {/* Header */}
              <div className="px-12 py-10 border-b border-white/10 flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-light">
                    {company} {model}
                  </h3>
                  <p className="text-gray-400 mt-2">
                    Premium Pricing Overview
                  </p>
                </div>
                <button
                  onClick={() => setOpenModal(false)}
                  className="text-2xl text-gray-500 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Accordion */}
              <div className="px-12 py-12 space-y-6 max-h-[65vh] overflow-y-auto">

                {(Object.keys(basePricing) as PricingCategory[]).map(
                  (category, index) => (
                    <div key={index} className="border-b border-white/10 pb-4">
                      <button
                        onClick={() =>
                          setActiveAccordion(
                            activeAccordion === index ? null : index
                          )
                        }
                        className="w-full flex justify-between items-center py-6 text-left"
                      >
                        <span className="text-2xl font-light">
                          {category}
                        </span>
                        <span className="text-xl text-cyan-400">
                          {activeAccordion === index ? "−" : "+"}
                        </span>
                      </button>

                      <AnimatePresence>
                        {activeAccordion === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4 pb-6"
                          >
                            {basePricing[category].map((item, i) => (
                              <div
                                key={i}
                                className="flex justify-between items-center py-3"
                              >
                                <span className="text-gray-300">
                                  {item.name}
                                </span>
                                <span className="text-lg font-light text-cyan-400">
                                  ₹
                                  {Math.round(
                                    item.price * multiplier
                                  ).toLocaleString()}
                                </span>
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </>
  );
}