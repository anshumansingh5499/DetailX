import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Droplets,
  Wrench,
  Car,
  MapPin,
  Video,
} from "lucide-react";

import qrVideo from "../assets/qr-video.png";
import qrLocation from "../assets/qr-location.png";
import carImage from "../assets/washing.jpg";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#071326] text-white">

      {/* Deep Performance Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071326] via-[#0b2447] to-[#050c1a]" />

      {/* Subtle Motorsport Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/8 via-transparent to-blue-500/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 container mx-auto px-8 md:px-20 py-28 grid lg:grid-cols-2 gap-28 items-center">

        {/* ================= LEFT SIDE ================= */}
        <div className="max-w-xl">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="uppercase tracking-[0.6em] text-xs text-cyan-400 mb-10"
          >
            Premium Automotive Care
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-5xl md:text-6xl font-light leading-tight tracking-tight"
          >
            Engineered
            <br />
            <span className="font-semibold">For Perfection.</span>
          </motion.h1>

          <p className="mt-10 text-gray-300 text-lg leading-relaxed">
            Precision detailing, advanced ceramic protection, and refined
            craftsmanship designed for performance vehicles and luxury owners.
          </p>

          {/* Stable Premium Offer Card */}
          <div className="mt-14 inline-block border border-cyan-400/30 px-10 py-6 backdrop-blur-sm bg-white/5">
            <p className="text-xs tracking-widest text-gray-400 uppercase">
              Exclusive Offer
            </p>
            <p className="text-3xl font-light mt-2 text-cyan-400">
              10% Lifetime Membership
            </p>
          </div>

          {/* Refined Feature Grid */}
          <div className="mt-16 grid grid-cols-2 gap-x-12 gap-y-8 text-sm">

            <Feature icon={<ShieldCheck size={18} />} text="Ceramic Coating" />
            <Feature icon={<Sparkles size={18} />} text="Paint Correction" />
            <Feature icon={<Droplets size={18} />} text="Water Spot Removal" />
            <Feature icon={<Wrench size={18} />} text="Engine Detailing" />
            <Feature icon={<Car size={18} />} text="Interior Restoration" />
            <Feature icon={<Sparkles size={18} />} text="Alloy Refinement" />

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative flex flex-col items-center">

          {/* Car Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src={carImage}
              alt="Premium Car Detailing"
              className="w-full max-w-xl object-contain"
            />

            {/* Motorsport Under Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-24 bg-cyan-400/15 blur-2xl rounded-full" />
          </motion.div>

          {/* Premium QR Section */}
          <div className="mt-20 grid grid-cols-2 gap-20">

            <QRCard
              icon={<Video size={16} />}
              label="Process Video"
              qr={qrVideo}
            />

            <QRCard
              icon={<MapPin size={16} />}
              label="Visit Location"
              qr={qrLocation}
            />

          </div>

        </div>
      </div>

      {/* Minimal Contact Strip */}
      <div className="absolute bottom-8 w-full text-center text-xs text-gray-500 tracking-widest">
        9980889181 • 7584837541 • BSF Road, Salugara
      </div>
    </section>
  );
}

/* ================= FEATURE ================= */

function Feature({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 text-gray-300">
      <div className="text-cyan-400">{icon}</div>
      <span className="tracking-wide">{text}</span>
    </div>
  );
}

/* ================= QR CARD ================= */

function QRCard({
  icon,
  label,
  qr,
}: {
  icon: React.ReactNode;
  label: string;
  qr: string;
}) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-2 text-cyan-400 text-xs uppercase tracking-widest mb-5">
        {icon}
        {label}
      </div>

      <div className="bg-white p-3 shadow-xl">
        <img src={qr} alt={label} className="w-28 h-28" />
      </div>
    </div>
  );
}