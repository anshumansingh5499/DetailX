import { motion } from "framer-motion";
import { Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function ContactStrip() {
  return (
    <section className="bg-blue-900 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center 
                     justify-between py-10 gap-10"
        >

          {/* Phone */}
          <div className="flex items-center gap-6 group">
            <Phone 
              size={18} 
              className="text-white/60 group-hover:text-white transition duration-300"
            />
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">
                Contact
              </p>
              <p className="text-lg font-light tracking-wide">
                +91 9980889181 · +91 7584837541
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Address */}
          <div className="flex items-center gap-6 group">
            <MapPin 
              size={18} 
              className="text-white/60 group-hover:text-white transition duration-300"
            />
            <div>
              <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">
                Location
              </p>
              <p className="text-lg font-light tracking-wide">
                BSF Road, Salugara · Near Cosmos Valley Apartment
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/10" />

          {/* Social Media */}
          <div className="flex items-center gap-6">
            <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">
              Follow
            </p>

            <div className="flex items-center gap-5">
              <a 
                href="#" 
                className="text-white/60 hover:text-white transition duration-300"
              >
                <Instagram size={18} />
              </a>

              <a 
                href="#" 
                className="text-white/60 hover:text-white transition duration-300"
              >
                <Facebook size={18} />
              </a>

              <a 
                href="#" 
                className="text-white/60 hover:text-white transition duration-300"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}