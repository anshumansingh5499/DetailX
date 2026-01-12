import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";
import { HiOutlineWallet } from "react-icons/hi2";
import { RiBankLine } from "react-icons/ri";
import UpiPayment from "./methods/UpiPayment";
import WalletPayment from "./methods/WalletPayment";
import CardPayment from "./methods/CardPayment";
import NetBankingPayment from "./methods/NetBankingPayment";
import upi from "../assets/upi.png";

type Method = "upi" | "wallet" | "card" | "netbanking";

export default function PaymentMethods() {
  const [active, setActive] = useState<Method>("netbanking");

  return (
    <div className="px-4 space-y-3 mt-2 ">
      <Method
        title="UPI"
        icon={<img src={upi} className="h-6 w-6" />}
        active={active === "upi"}
        onClick={() => setActive("upi")}
      >
        {active === "upi" && <UpiPayment />}
      </Method>

      <Method
        title="Wallet"
        icon={<HiOutlineWallet size={22} className="text-gray-500" />}
        active={active === "wallet"}
        onClick={() => setActive("wallet")}
      >
        {active === "wallet" && <WalletPayment />}
      </Method>

      <Method
        title="Debit / Credit Card"
        icon={<FiCreditCard size={22} className="text-gray-500" />}
        active={active === "card"}
        onClick={() => setActive("card")}
      >
        {active === "card" && <CardPayment />}
      </Method>

      <Method
        title="Net Banking"
        icon={<RiBankLine size={22} className="text-gray-500" />}
        active={active === "netbanking"}
        onClick={() => setActive("netbanking")}
      >
        {active === "netbanking" && <NetBankingPayment />}
      </Method>
    </div>
  );
}

function Method({
  title,
  icon,
  active,
  onClick,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
  children?: React.ReactNode;
}) {
  return (
    <div
      onClick={onClick}
      className={`bg-white p-4 rounded-xl cursor-pointer border transition ${
        active ? "border-orange-500" : "border-gray-200"
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full border flex items-center justify-center">
            {icon}
          </div>
          <span className="font-medium text-sm">{title}</span>
        </div>

        <span className="text-gray-400">˅</span>
      </div>

      {children}
    </div>
  );
}
