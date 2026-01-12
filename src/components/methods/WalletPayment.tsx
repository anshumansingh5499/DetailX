import freecharge from "../../assets/freecharge.png";
import payzap from "../../assets/payzap.png";

export default function WalletPayment() {
  return (
    <div className="mt-4 border border-orange-500 rounded-lg p-3 space-y-3">
      <div className="flex justify-around">
        <img src={freecharge} className="h-8" />
        <img src={payzap} className="h-8" />
      </div>

      <select className="w-full border px-2 py-1 text-sm">
        <option>Select Wallet</option>
        <option>Freecharge</option>
        <option>PayZap</option>
      </select>
    </div>
  );
}
