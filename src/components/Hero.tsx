import heroCar from "../assets/hero-car.jpg";
import badgeIcon from "../assets/car-icon.png";
import heroCarmini from "../assets/mini-car.jpg";

const Hero = () => {
  return (
    <section className="relative bg-[#f3f3f3] px-6 md:px-12 pt-10 pb-16 md:pb-24 overflow-hidden">

      {/* Top Small Badge */}
      <div className="flex items-center gap-3 mb-8 md:mb-10">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md p-2">
          <img src={badgeIcon} alt="icon" className="w-5 h-5" />
        </div>
        <span className="bg-white px-4 md:px-5  py-3 rounded-full text-xs md:text-sm shadow-sm">
          Book a car wash with the INDIA largest car wash specialist
        </span>
      </div>
 <a
          href="tel:+917080216257"
          className="flex items-center justify-center absolute top-50px -translate-y-1/2 right-[-32px] origin-center rotate-90"
        >
          <button
            className="
              px-3 py-2
              text-xs font-semibold tracking-wide
              border-orange-300/70
              bg-red-500 text-white
              hover:bg-orange-50 hover:text-red-600 hover:-translate-y-0.5
              transition-all duration-300
            "
          >
            Connect us
          </button>
        </a>
      <h1
        className="
        md:absolute md:top-32 md:left-1/2 md:-translate-x-1/2
        w-full text-center
        text-[18vw] md:text-[15vw]
        font-black leading-none
        tracking-tight
        z-0 select-none
        "
      >
        <span className="text-blue-600">
          CAR DETAILING
        </span>
      </h1>

      {/* Floating Tags */}
      {/* Desktop Only Absolute */}
      <div className="hidden md:block absolute top-[210px] left-[70px] z-20 bg-white px-4 py-1 rounded-full text-xs shadow">
        Carwash
      </div>
      <div className="hidden md:block absolute top-[210px] left-[420px] z-20 bg-white px-4 py-1 rounded-full text-xs shadow">
        Ceramic
      </div>
      <div className="hidden md:block absolute top-[210px] right-[280px] z-20 bg-white px-4 py-1 rounded-full text-xs shadow">
        Car Shine
      </div>
      <div className="hidden md:block absolute top-[260px] left-[160px] z-20 bg-white px-4 py-1 rounded-full text-xs shadow">
        Shine
      </div>
      <div className="hidden md:block absolute top-[260px] right-[220px] z-20 bg-white px-4 py-1 rounded-full text-xs shadow">
        Wheel scratch
      </div>
      <div className="hidden md:block absolute top-[260px] right-[80px] z-20 bg-white px-4 py-1 rounded-full text-xs shadow">
        Auto Detailing
      </div>

      {/* Mobile Tags Layout */}
      <div className="flex flex-wrap gap-2 mt-6 md:hidden">
        {[
          "Carwash",
          "Ceramic",
          "Car Shine",
          "Shine",
          "Wheel scratch",
          "Auto Detailing",
        ].map((tag, index) => (
          <span
            key={index}
            className="bg-white px-4 py-1 rounded-full text-xs shadow"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* HERO IMAGE */}
      <div className="relative z-10 mt-12 md:mt-52 rounded-3xl overflow-hidden shadow-xl">
        <img
          src={heroCar}
          alt="Car"
          className="w-full h-[350px] md:h-[520px] object-cover"
        />

        {/* LEFT OVERLAY CARD */}
        <div
          className="
          md:absolute md:bottom-8 md:left-8
          bg-white rounded-2xl p-6
          w-full md:w-[480px]
          shadow-xl
          flex flex-col md:flex-row gap-5
          mt-6 md:mt-0
          "
        >
          <div className="flex-1">
            <h3 className="text-base md:text-lg font-semibold leading-snug mb-4 md:mb-6">
              Our Customers are the most important part of our business
            </h3>
            <button className="text-sm font-medium">
              Read More →
            </button>
          </div>

          <img
            src={heroCarmini}
            alt="mini"
            className="w-full md:w-32 h-32 object-cover rounded-xl"
          />
        </div>

        {/* RIGHT OVERLAY CARD */}
        <div
          className="
          md:absolute md:bottom-8 md:right-8
          bg-white rounded-2xl p-6
          w-full md:w-[280px]
          shadow-xl
          mt-6 md:mt-0
          "
        >
          <p className="text-xs text-gray-600 mb-4 leading-relaxed">
            Our professional and reliable car cleaners provide thorough Car
            Detailing, Interior Deep Cleaning
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            4.6
          </h2>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <img
                src="https://i.pravatar.cc/40?img=1"
                className="w-7 h-7 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=2"
                className="w-7 h-7 rounded-full border-2 border-white"
              />
              <img
                src="https://i.pravatar.cc/40?img=3"
                className="w-7 h-7 rounded-full border-2 border-white"
              />
            </div>
            <span className="text-xs text-gray-500">
              750+ happy clients
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
