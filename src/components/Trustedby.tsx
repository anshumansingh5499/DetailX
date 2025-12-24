import { motion } from "framer-motion";
import {
  SiAmazon,
  SiGoogle,
 
  SiIntel,
  SiCisco,
  SiTesla,
  SiSamsung,
  SiOracle,
  SiNvidia,
} from "react-icons/si";

const logos = [
  SiGoogle,
  SiAmazon,
  
  SiIntel,
  SiCisco,
  SiTesla,
  SiSamsung,
  SiOracle,
  SiNvidia,
];

const TrustedBy: React.FC = () => {
  return (
    <section className="bg-black py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Label */}
        <p className="text-center text-sm text-white/50 mb-10">
          Trusted by teams building modern products
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((Icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <Icon
                  size={36}
                  className="text-white/50 hover:text-white/80 transition"
                />
              </div>
            ))}
          </motion.div>

          {/* Edge fade (Vercel-style) */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
