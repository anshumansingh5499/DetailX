import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import ceramic from "../assets/ceramic.jpg";
import wheel1 from "../assets/detailing.jpg";
import wheel2 from "../assets/washing.jpg";
import detailing from "../assets/wheel.jpg";
import carBg from "../assets/car-silhouette.jpg";

const services = [
  { title: "Express Exterior", image: ceramic },
  { title: "Full Services Wash", image: wheel1 },
  { title: "Auto Detailing", image: wheel2 },
  { title: "Complete Wash", image: detailing },
  { title: "Oil Changing", image: ceramic },
];

const Counter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count.toLocaleString()}</span>;
};

const ServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative px-6 md:px-20 py-20 md:py-32 bg-white overflow-hidden">

      {/* Background Silhouette */}
      <img
        src={carBg}
        alt="car silhouette"
        className="hidden md:block absolute top-20 right-10 w-[900px] opacity-[0.05] pointer-events-none"
      />

      {/* Gradient Glow */}
      <div className="absolute -top-40 -right-40 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>

      {/* Heading */}
      <div className="mb-16 md:mb-20 relative z-10 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          Premium Automotive Services
        </h2>
        <p className="text-gray-500 mt-4 text-base md:text-lg max-w-xl mx-auto md:mx-0">
          Engineered precision. Luxury finish. Elite performance care.
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 relative z-10">

        {/* LEFT SIDE LIST */}
        <div className="w-full md:w-1/3 space-y-6 md:space-y-10">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveIndex(index)} // tap friendly
              onMouseEnter={() => setActiveIndex(index)}
              className="cursor-pointer group"
            >
              <h3
                className={`text-xl md:text-2xl font-semibold transition-all duration-300 ${
                  activeIndex === index
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                {service.title}
              </h3>

              <div
                className={`h-[2px] bg-blue-600 mt-3 transition-all duration-500 ${
                  activeIndex === index ? "w-16 md:w-20" : "w-0"
                }`}
              />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="w-full md:w-2/3 relative h-[350px] md:h-[500px]">

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full h-full"
            >
              <div
                className="relative w-full h-full rounded-2xl md:rounded-3xl
                           backdrop-blur-xl bg-white/60
                           border border-white/40
                           shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                           overflow-hidden"
              >
                {/* Image */}
                <div className="absolute inset-0">
                  <img
                    src={services[activeIndex].image}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 w-full p-6 md:p-10 text-white backdrop-blur-lg bg-black/40">
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {services[activeIndex].title}
                  </h3>
                  <p className="mt-3 text-gray-200 text-sm md:text-base max-w-xl">
                    Premium automotive care designed with cutting-edge
                    detailing technology, delivering showroom-level shine and protection.
                  </p>

                  <motion.div
                    layoutId="underline"
                    className="h-[3px] bg-red-500 mt-4 md:mt-6 w-16 md:w-24"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Depth Cards (Hidden on Mobile for Clean UI) */}
          <div className="hidden md:block absolute top-6 left-6 w-full h-full rounded-3xl bg-gray-200/40 -z-10 scale-[0.97]" />
          <div className="hidden md:block absolute top-12 left-12 w-full h-full rounded-3xl bg-gray-300/30 -z-20 scale-[0.94]" />

        </div>
      </div>

      {/* Animated Stats */}
      <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-12 text-center relative z-10">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
            <Counter value={12025} />+
          </h3>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Cars Serviced
          </p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
            <Counter value={15} />
          </h3>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Years Experience
          </p>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
            <Counter value={98} />%
          </h3>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Customer Satisfaction
          </p>
        </div>
      </div>

    </section>
  );
};

export default ServicesAccordion;
