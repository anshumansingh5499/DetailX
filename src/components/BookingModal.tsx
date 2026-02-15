import { useState } from "react";
import { motion } from "framer-motion";

const BookingModal = ({ close }: { close: () => void }) => {
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

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50">

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-gray-900 to-black border border-white/10 
                   p-10 rounded-3xl w-[420px] relative shadow-[0_0_80px_rgba(255,115,0,0.3)]"
      >
        <button
          onClick={close}
          className="absolute right-6 top-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-white">
          Book Your Service
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-white/10 border border-white/10 p-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white/10 border border-white/10 p-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />

          <input
            type="text"
            placeholder="Service Required"
            className="w-full bg-white/10 border border-white/10 p-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          />

          <input
            type="date"
            className="w-full bg-white/10 border border-white/10 p-3 rounded-xl text-white focus:outline-none focus:border-orange-500"
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full mt-4 transition"
          >
            Submit & Send to WhatsApp
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default BookingModal;
