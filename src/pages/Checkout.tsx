import PaymentHeader from "../components/PaymentHeader";
import OrderSummary from "../components/OrderSummary";
import PaymentMethods from "../components/PaymentMethods";
import swiftpay from "../assets/swiftpay.png";

export default function Checkout() {
  return (
    <div className="min-h-screen bg-[#2f2f36] flex justify-center pt-10">
      <div className="w-[380px] relative">

        <div className="rounded-t-xl overflow-hidden">
          <PaymentHeader />
        </div>

        <div className="relative z-10 px-4 -mb-20">
          <OrderSummary />
        </div>

        <div className="bg-[#f7f7f7] rounded-t-[32px] pt-24 pb-20">
          <div className="px-4">
            <div className="text-xs text-gray-400 mb-3">
              Select Payment Method
            </div>

            <PaymentMethods />
          </div>

          <div className="flex justify-center items-center gap-2 mt-4">
            <span className="text-xs text-gray-400">Powered by</span>
            <img src={swiftpay} className="h-5" />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="fixed bottom-0 w-[380px] bg-gray-500 text-white text-center py-4 text-sm">
          PROCEED TO PAY
        </div>

      </div>
    </div>
  );
}
