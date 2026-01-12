import hdfc from "../../assets/hdfc.png";
import sbi from "../../assets/sbi.png";
import icici from "../../assets/icici.png";

export default function NetBankingPayment() {
  return (
    <div className="mt-4 space-y-4">
      <div className="flex justify-between">
        <div className="flex flex-col items-center">
          <img src={hdfc} className="h-10" />
          <span className="text-xs mt-1">HDFC Bank</span>
        </div>

        <div className="flex flex-col items-center">
          <img src={sbi} className="h-10" />
          <span className="text-xs mt-1">SBI</span>
        </div>

        <div className="flex flex-col items-center">
          <img src={icici} className="h-10" />
          <span className="text-xs mt-1">ICICI Bank</span>
        </div>
      </div>

      <select className="w-full border border-gray-400 rounded px-2 py-1 text-sm">
        <option>Select Bank</option>
        <option>HDFC</option>
        <option>SBI</option>
        <option>ICICI</option>
      </select>
    </div>
  );
}
