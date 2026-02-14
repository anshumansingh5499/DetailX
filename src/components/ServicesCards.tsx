import ceramic from "../assets/ceramic.jpg";
import wheel1 from "../assets/detailing.jpg";
import wheel2 from "../assets/washing.jpg";
import detailing from "../assets/wheel.jpg";

const services = [
  {
    title: "CERAMIC\nCOATING",
    image: ceramic,
  },
  {
    title: "WHEEL\nSCRATCH\nREPAIRS",
    image: wheel1,
  },
  {
    title: "WHEEL\nSCRATCH\nREPAIRS",
    image: wheel2,
  },
  {
    title: "DETAILING",
    image: detailing,
  },
];

const ServicesSection = () => {
  return (
    <section className="px-12 py-24 bg-[#f3f3f3]">
      {/* Heading */}
      <h2 className="text-5xl font-bold leading-tight max-w-5xl mb-16">
        Expert Car Detailing: From Luxury Brands To Your Everyday Ride In
        Sydney
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-3xl overflow-hidden group cursor-pointer"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Book Now Pill */}
            <div className="absolute top-4 left-4 bg-blue-500 text-black text-sm px-4 py-1 rounded-full shadow-md">
              Book Now
            </div>

            {/* Title */}
            <div className="absolute bottom-6 left-6 text-white font-bold text-2xl whitespace-pre-line leading-tight">
              {service.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
