import upi from "../../assets/upi.png";

export default function UpiPayment() {
  return (
    <div className="mt-4 border border-orange-500 rounded-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <img src={upi} className="h-8" />
        <span className="text-sm">UPI</span>
      </div>

      <input
        placeholder="abc@bank"
        className="w-full border rounded px-3 py-2 text-sm"
      />

      <button className="w-full bg-orange-500 text-white mt-3 py-2 rounded">
        Verify
      </button>
    </div>
  );
}
