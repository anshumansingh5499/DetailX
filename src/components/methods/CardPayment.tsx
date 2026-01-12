export default function CardPayment() {
  return (
    <div className="mt-4 border border-orange-500 rounded-lg p-3 space-y-2">
      <input className="w-full border px-2 py-1" placeholder="Card Number" />

      <div className="flex gap-2">
        <input className="border w-1/3 px-2 py-1" placeholder="MM" />
        <input className="border w-1/3 px-2 py-1" placeholder="YYYY" />
        <input className="border w-1/3 px-2 py-1" placeholder="CVV" />
      </div>

      <input className="w-full border px-2 py-1" placeholder="Name on Card" />

      <label className="text-xs flex gap-2 mt-2">
        <input type="checkbox" />
        Save card as per RBI guidelines
      </label>
    </div>
  );
}
