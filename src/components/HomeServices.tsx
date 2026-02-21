import { useState, useEffect } from "react";
import {  AnimatePresence } from "framer-motion";
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

/* =========================
   TYPE GUARDS (IMPORTANT)
========================= */
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
  const [open, setOpen] = useState(false);

  const getServices = (): (FourWheelerService | TwoWheelerService)[] => {
    if (activeCategory === "4W Washing") return fourWheelerWashing;
    if (activeCategory === "4W Detailing") return fourWheelerDetailing;
    return twoWheelerServices;
  };

  /* AUTO SELECT FIRST SERVICE */
  useEffect(() => {
    const services = getServices();
    if (services.length > 0) {
      const first = services[0];
      setActiveService(first);

      if (hasPrices(first)) {
        const firstSize = sizes.find((size) => first.prices[size]);
        if (firstSize) setSelectedSize(firstSize);
      }
    }
  }, [activeCategory]);

  return (
    <>
      <section className="relative min-h-screen bg-[#050b16] text-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050b16] via-[#0a1c33] to-[#040912]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-12 py-28 grid grid-cols-3 gap-24">

          {/* LEFT */}
          <div className="flex flex-col justify-center space-y-14">
            <p className="uppercase text-xs tracking-[0.7em] text-gray-500">
              Configure
            </p>

            {( ["4W Washing", "4W Detailing", "2W Services"] as Category[] ).map(
              (cat) => {
                const active = activeCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left text-3xl font-light transition ${
                      active
                        ? "text-white"
                        : "text-gray-600 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              }
            )}
          </div>

          {/* CENTER */}
          <div className="flex flex-col justify-center space-y-10">
            {getServices().map((service) => {
              const active = activeService?.title === service.title;

              return (
                <button
                  key={service.title}
                  onClick={() => setActiveService(service)}
                  className={`text-left text-4xl font-light transition ${
                    active
                      ? "text-white"
                      : "text-gray-700 hover:text-white"
                  }`}
                >
                  {service.title}
                </button>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center">
            {activeService && (
              <div className="text-center">

                {/* Size Selector */}
                {hasPrices(activeService) && (
                  <div className="flex justify-center gap-8 mb-12">
                    {sizes.map((size) =>
                      activeService.prices[size] ? (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-sm ${
                            selectedSize === size
                              ? "text-white border-b border-white"
                              : "text-gray-600"
                          }`}
                        >
                          {size}
                        </button>
                      ) : null
                    )}
                  </div>
                )}

                {/* PRICE DISPLAY */}
                <div className="mb-16">
                  {hasPrices(activeService) && (
                    <p className="text-8xl font-extralight">
                      ₹{activeService.prices[selectedSize]}
                    </p>
                  )}

                  {hasSinglePrice(activeService) && (
                    <p className="text-8xl font-extralight">
                      ₹{activeService.price}
                    </p>
                  )}

                  {hasPriceRange(activeService) && (
                    <p className="text-7xl font-extralight">
                      ₹{activeService.priceRange}
                    </p>
                  )}
                </div>

                <button
                  onClick={() => setOpen(true)}
                  className="px-14 py-4 border border-white hover:bg-white hover:text-black transition"
                >
                  Book Appointment
                </button>
              </div>
            )}
          </div>

        </div>
      </section>

      <AnimatePresence>
        {open && <BookingModal close={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}