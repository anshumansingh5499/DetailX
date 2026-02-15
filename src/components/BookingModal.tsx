import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  close: () => void;
}

const BookingModal = ({ close }: Props) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleSubmit = () => {
    const ownerNumber = "917080216257";

    const message = `New Booking Request:
Name: ${form.name}
Phone: ${form.phone}
Service: ${form.service}
Date: ${form.date}`;

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-[90%] max-w-md bg-white/5 border border-white/10 
                     rounded-3xl p-10 shadow-2xl"
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition"
          >
            ✕
          </button>

          {/* Title */}
          <h2 className="text-3xl font-light tracking-tight text-white">
            Book Appointment
          </h2>

          <p className="text-sm text-white/50 mt-2 mb-8">
            Experience precision detailing crafted to perfection.
          </p>

          {/* Form */}
          <div className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-b border-white/20 
                         py-3 text-white placeholder-white/40 
                         focus:outline-none focus:border-white transition"
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-transparent border-b border-white/20 
                         py-3 text-white placeholder-white/40 
                         focus:outline-none focus:border-white transition"
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Service Required"
              className="w-full bg-transparent border-b border-white/20 
                         py-3 text-white placeholder-white/40 
                         focus:outline-none focus:border-white transition"
              onChange={(e) =>
                setForm({ ...form, service: e.target.value })
              }
            />

            <input
              type="date"
              className="w-full bg-transparent border-b border-white/20 
                         py-3 text-white 
                         focus:outline-none focus:border-white transition"
              onChange={(e) =>
                setForm({ ...form, date: e.target.value })
              }
            />

            <button
              onClick={handleSubmit}
              className="w-full mt-6 py-4 border border-white 
                         rounded-full hover:bg-white hover:text-black 
                         transition-all duration-500 tracking-wide"
            >
              Confirm Booking
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
