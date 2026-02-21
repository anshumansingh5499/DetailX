import { useState } from "react";
import { motion } from "framer-motion";
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

  const [selectedSize, setSelectedSize] = useState<Size>("Small");
  const [open, setOpen] = useState(false);

  const getServices = (): (FourWheelerService | TwoWheelerService)[] => {
    if (activeCategory === "4W Washing") return fourWheelerWashing;
    if (activeCategory === "4W Detailing") return fourWheelerDetailing;
    return twoWheelerServices;
  };

  const services = getServices();

  return (
    <>
      <section className="min-h-screen bg-[#050b16] text-white px-6 md:px-12 py-24">
        <div className="max-w-7xl mx-auto">

          {/* CATEGORY */}
          <div className="flex gap-10 mb-16">
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

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-white/10 p-8 hover:border-white/40 transition duration-300"
              >
                <h3 className="text-2xl font-light mb-6">
                  {service.title}
                </h3>

                {/* SIZE SELECTOR */}
                {hasPrices(service) && (
                  <div className="flex gap-6 mb-8 flex-wrap">
                    {sizes.map((size) =>
                      service.prices[size] ? (
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

                {/* PRICE */}
                <div className="mb-8">
                  {hasPrices(service) && (
                    <p className="text-4xl font-extralight">
                      ₹{service.prices[selectedSize]}
                    </p>
                  )}

                  {hasSinglePrice(service) && (
                    <p className="text-4xl font-extralight">
                      ₹{service.price}
                    </p>
                  )}

                  {hasPriceRange(service) && (
                    <p className="text-3xl font-extralight">
                      ₹{service.priceRange}
                    </p>
                  )}
                </div>

                {/* BUTTON */}
                <button
                  onClick={() => setOpen(true)}
                  className="w-full py-3 border border-white hover:bg-white hover:text-black transition"
                >
                  Book Appointment
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {open && <BookingModal close={() => setOpen(false)} />}
    </>
  );
}