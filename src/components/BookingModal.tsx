import { useState } from "react";

const BookingModal = ({ close }: { close: () => void }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
  });

  const handleSubmit = () => {
    const ownerNumber = "917080216257"; // replace with owner number

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
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-10 rounded-3xl w-[400px] relative">
        <button
          onClick={close}
          className="absolute right-6 top-4 text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6">
          Book Your Service
        </h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, phone: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Service Required"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, service: e.target.value })
            }
          />

          <input
            type="date"
            className="w-full border p-3 rounded-xl"
            onChange={(e) =>
              setForm({ ...form, date: e.target.value })
            }
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 text-white py-3 rounded-full mt-4"
          >
            Submit & Send to WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
