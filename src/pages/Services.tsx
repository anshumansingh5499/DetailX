import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ceramic from "../assets/wheel.jpg";
import detailing from "../assets/detailing.jpg";
import wheel1 from "../assets/ceramic.jpg";
import wheel2 from "../assets/washing.jpg";

const services = [
  {
    title: "Express Exterior",
    desc: "A precision foam wash system engineered for hydrophobic brilliance and refined gloss retention.",
    details:
      "Includes pH-balanced pre-wash, safe contact wash, microfiber drying, wheel cleaning, and protective sealant application.",
    image: ceramic,
  },
  {
    title: "Full Service Wash",
    desc: "Interior refinement meets exterior perfection.",
    details:
      "Complete vacuuming, steam sanitization, leather conditioning, dashboard restoration, and premium tire finish.",
    image: wheel1,
  },
  {
    title: "Auto Detailing",
    desc: "Luxury-grade paint correction & ceramic shielding.",
    details:
      "Multi-stage polishing removes swirl marks while nano-ceramic coating delivers deep gloss and long-term protection.",
    image: wheel2,
  },
  {
    title: "Complete Wash",
    desc: "Total surface restoration for showroom depth.",
    details:
      "Gloss enhancement, trim rejuvenation, odor neutralization, interior refinement, and advanced surface sealing.",
    image: detailing,
  },
];

const Services = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="bg-white pt-28 pb-20 px-6 md:px-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Premium Automotive Care
          </h1>

          <p className="mt-5 text-gray-500 text-lg leading-relaxed">
            Precision detailing services designed to protect, restore,
            and elevate your vehicle.
          </p>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-white pb-24 px-6 md:px-16">
        <div className="max-w-6xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className={index % 2 !== 0 ? "md:order-2" : ""}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl object-cover w-full h-[380px]"
                />
              </motion.div>

              {/* CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-lg"
              >
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                  {service.title}
                </h2>

                <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                  {service.desc}
                </p>

                <p className="mt-3 text-gray-500 leading-relaxed">
                  {service.details}
                </p>

                <button className="mt-6 px-7 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
                  Book Service
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gray-50 py-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Ready to Elevate Your Drive?
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Experience refined automotive detailing tailored to perfection.
          </p>

          <button className="mt-8 bg-black text-white px-9 py-3 rounded-full hover:bg-gray-800 transition">
            Schedule Appointment
          </button>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
