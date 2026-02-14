import {
  FiCheck,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import { MdOutlineLocalCarWash } from "react-icons/md";
import { GiVacuumCleaner } from "react-icons/gi";

const PricingSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-24 px-8">

      {/* Top Text */}
      <p className="text-center text-sm text-gray-500 mb-3">
        2,157 people have said how good Rareblocks
      </p>

      <h2 className="text-center text-5xl font-bold mb-16">
        Chose your Package
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {/* LEFT CARD */}
        <div>
          <h3 className="text-2xl font-bold mb-6">OUR WASHES</h3>

          <p className="text-gray-600 mb-8">
            Check out our line of premium washes using the highest level
            cleaning agent and technology.
          </p>

          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3 border-b pb-3">
              <GiVacuumCleaner />
              Free Vacuums
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <MdOutlineLocalCarWash />
              Self-Grab Towels
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <FiMapPin />
              Usable At Any Club Car Wash Location
            </li>
          </ul>

          <button className="mt-10 bg-blue-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold">
            View Washes
          </button>
        </div>

        {/* CENTER CARD (Highlighted) */}
        <div className="bg-white rounded-3xl p-10 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">
            UNLIMITED CLUB
          </h3>

          <p className="text-gray-600 mb-8 text-center">
            Join the Unlimited Club and wash as often as you'd like.
            Just two washes per month makes your membership worth it!
          </p>

          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3 border-b pb-3">
              <FiCheck />
              Wash As Often As You Like
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <FiClock />
              Free Vacuums
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <MdOutlineLocalCarWash />
              Self-Grab Towels
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <FiMapPin />
              Usable At Any Club Car Wash Location
            </li>
          </ul>

          <button className="mt-10 w-full bg-blue-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold">
            View Washes
          </button>
        </div>

        {/* RIGHT CARD */}
        <div>
          <h3 className="text-2xl font-bold mb-6">UNLIMITED PERKS</h3>

          <p className="text-gray-600 mb-8">
            Join the Unlimited Club
          </p>

          <ul className="space-y-5 text-gray-700">
            <li className="flex items-center gap-3 border-b pb-3">
              <FiCheck />
              Contactless Express Member Lane
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <FiCheck />
              Wash As Often As You Like
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <FiClock />
              Free Vacuums
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <MdOutlineLocalCarWash />
              Self-Grab Towels
            </li>

            <li className="flex items-center gap-3 border-b pb-3">
              <FiMapPin />
              Usable At Any Club Car Wash Location
            </li>
          </ul>

          <button className="mt-10 bg-blue-500 hover:bg-orange-600 transition text-white px-8 py-3 rounded-full font-semibold">
            View Washes
          </button>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
