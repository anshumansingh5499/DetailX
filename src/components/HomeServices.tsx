import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  fourWheelerWashing,
  fourWheelerDetailing,
  twoWheelerServices,
  type FourWheelerService,
  type TwoWheelerService,
  type Size,
} from "../data/servicesData";
import BookingModal from "./BookingModal";

type Category = "4W Washing" | "4W Detailing" | "2W Services";

const sizes: Size[] = ["XS", "Small", "Medium", "Large", "XL"];

function hasPrices(
  service: FourWheelerService | TwoWheelerService
): service is FourWheelerService {
  return (service as FourWheelerService).prices !== undefined;
}

function hasSinglePrice(
  service: FourWheelerService | TwoWheelerService
): service is TwoWheelerService {
  return (service as TwoWheelerService).price !== undefined;
}

function hasPriceRange(
  service: FourWheelerService | TwoWheelerService
): service is TwoWheelerService {
  return (service as TwoWheelerService).priceRange !== undefined;
}

export default function PorscheConfigurator() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("4W Washing");

  const [activeService, setActiveService] =
    useState<FourWheelerService | TwoWheelerService | null>(null);

  const [selectedSize, setSelectedSize] = useState<Size>("Small");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [open, setOpen] = useState(false);

  const getServices = (): (FourWheelerService | TwoWheelerService)[] => {
    if (activeCategory === "4W Washing") return fourWheelerWashing;
    if (activeCategory === "4W Detailing") return fourWheelerDetailing;
    return twoWheelerServices;
  };

  const services = getServices();

  useEffect(() => {
    setServiceIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    if (services.length > 0) {
      const service = services[serviceIndex];
      setActiveService(service);

      if (hasPrices(service)) {
        const firstSize = sizes.find((size) => service.prices[size]);
        if (firstSize) setSelectedSize(firstSize);
      }
    }
  }, [serviceIndex, activeCategory]);

  const prevIndex =
    serviceIndex === 0 ? services.length - 1 : serviceIndex - 1;

  const nextIndex =
    serviceIndex === services.length - 1 ? 0 : serviceIndex + 1;

  const handlePrev = () => {
    setDirection(-1);
    setServiceIndex(prevIndex);
  };

  const handleNext = () => {
    setDirection(1);
    setServiceIndex(nextIndex);
  };

  return (
    <>
      <section className="relative min-h-screen bg-[#050b16] text-white px-6 md:px-12 py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050b16] via-[#0a1c33] to-[#040912]" />

        <div className="relative z-10 max-w-6xl mx-auto">

          {/* CATEGORY */}
          <div className="flex gap-10 mb-20">
            {(["4W Washing", "4W Detailing", "2W Services"] as Category[]).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-lg ${
                    activeCategory === cat
                      ? "text-white border-b border-white"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* ===== NAVIGATION ===== */}
          <div className="flex items-center justify-between mb-24">

            {/* LEFT SIDE */}
            <div className="flex items-center gap-6">
              <button
                onClick={handlePrev}
                className="p-2 border border-white/20 hover:border-white transition"
              >
                <ChevronLeft size={22} />
              </button>

              <div
                onClick={handlePrev}
                className="cursor-pointer text-gray-500 hover:text-white transition text-lg"
              >
                {services[prevIndex]?.title}
              </div>
            </div>

            {/* CENTER ACTIVE */}
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-light tracking-wide">
                {services[serviceIndex]?.title}
              </h3>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">
              <div
                onClick={handleNext}
                className="cursor-pointer text-gray-500 hover:text-white transition text-lg text-right"
              >
                {services[nextIndex]?.title}
              </div>

              <button
                onClick={handleNext}
                className="p-2 border border-white/20 hover:border-white transition"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* ===== DETAILS ===== */}
          <AnimatePresence mode="wait" custom={direction}>
            {activeService && (
              <motion.div
                key={activeService.title}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                transition={{ duration: 0.4 }}
                className="max-w-3xl"
              >
                <h2 className="text-4xl md:text-5xl font-light mb-10">
                  {activeService.title}
                </h2>

                {hasPrices(activeService) && (
                  <div className="flex gap-8 mb-14 flex-wrap">
                    {sizes.map((size) =>
                      activeService.prices[size] ? (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-sm ${
                            selectedSize === size
                              ? "text-white border-b border-white"
                              : "text-gray-500 hover:text-white"
                          }`}
                        >
                          {size}
                        </button>
                      ) : null
                    )}
                  </div>
                )}

                <div className="mb-14">
                  {hasPrices(activeService) && (
                    <motion.p
                      key={selectedSize}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="text-6xl md:text-7xl font-extralight"
                    >
                      ₹{activeService.prices[selectedSize]}
                    </motion.p>
                  )}

                  {hasSinglePrice(activeService) && (
                    <p className="text-6xl font-extralight">
                      ₹{activeService.price}
                    </p>
                  )}

                  {hasPriceRange(activeService) && (
                    <p className="text-5xl font-extralight">
                      ₹{activeService.priceRange}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="px-12 py-4 border border-white hover:bg-white hover:text-black transition"
                >
                  Book Appointment
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <AnimatePresence>
        {open && <BookingModal close={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}