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
import carImage from "../assets/detailing.jpg";

export default function HomeHero() {
  return (
    <section className="relative min-h-screen bg-[#050b16] text-white overflow-hidden flex items-center">

      {/* Deep Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050b16] via-[#0a1c33] to-[#03070f]" />

      {/* Subtle Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-white/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-20 py-32">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* ================= LEFT SIDE ================= */}
          <div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="uppercase tracking-[0.7em] text-xs text-gray-500 mb-10"
            >
              Premium Automotive Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-tight"
            >
              Engineered for
              <br />
              <span className="font-medium text-white">
                Absolute Perfection.
              </span>
            </motion.h1>

            <p className="mt-10 text-gray-400 text-lg leading-relaxed max-w-xl">
              Precision detailing and advanced surface protection
              crafted for luxury owners who demand uncompromising standards.
            </p>

            {/* Premium Offer */}
            <div className="mt-14 border border-white/10 px-10 py-8 bg-white/5 backdrop-blur-md w-fit">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Exclusive Privilege
              </p>
              <p className="text-2xl font-light mt-3">
                10% Lifetime Membership
              </p>
            </div>

            {/* Feature Grid */}
            <div className="mt-16 grid grid-cols-2 gap-x-14 gap-y-10 text-sm text-gray-400">

              <Feature icon={<ShieldCheck size={18} />} text="Ceramic Protection" />
              <Feature icon={<Sparkles size={18} />} text="Paint Refinement" />
              <Feature icon={<Droplets size={18} />} text="Hydrophobic Finish" />
              <Feature icon={<Wrench size={18} />} text="Engine Bay Care" />
              <Feature icon={<Car size={18} />} text="Interior Restoration" />
              <Feature icon={<Sparkles size={18} />} text="Alloy Enhancement" />

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="relative">

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative overflow-hidden"
            >
              <img
                src={carImage}
                alt="Premium Detailing"
                className="w-full h-[520px] object-cover"
              />

              {/* Soft bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </motion.div>

            {/* Premium Info Panel (QR aligned properly) */}
            <div className="mt-14 border-t border-white/10 pt-12 grid md:grid-cols-2 gap-16">

              <QRCard
                icon={<Video size={14} />}
                label="Watch Process"
                qr={qrVideo}
              />

              <QRCard
                icon={<MapPin size={14} />}
                label="Visit Studio"
                qr={qrLocation}
              />

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Contact */}
      <div className="absolute bottom-10 w-full text-center text-xs tracking-widest text-gray-500">
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
    <div className="flex items-center gap-4">
      <div className="text-white/60">{icon}</div>
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
    <div>
      <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 mb-6">
        {icon}
        {label}
      </div>

      <div className="bg-white p-3 w-fit">
        <img src={qr} alt={label} className="w-28 h-28" />
      </div>
    </div>
  );
}