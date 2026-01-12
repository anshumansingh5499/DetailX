export default function OrderSummary() {
  return (
    <div className="relative mt-6">
      <div className="absolute -left-8 -right-8 top-[120px] h-[140px]  rounded-[40px] shadow-[0_-10px_40px_rgba(0,0,0,0.08)] -z-10" />

      <div className="bg-white rounded-2xl shadow-lg px-5 py-6">
        <div className="text-xl font-semibold">Hi Prasad Naik,</div>
        <div className="text-sm text-gray-500">7405553438</div>

        <div className="border-b my-4" />

        <div className="flex justify-between text-sm text-gray-500">
          <span>Order Order12312 orderNumber</span>
          <span className="flex items-center gap-1 text-blue-500 cursor-pointer">
            View order <span>⌄</span>
          </span>
        </div>

        <div className="flex justify-between mt-6 text-base">
          <span>Order Value</span>
          <span>₹5,00,000.00</span>
        </div>

        <div className="flex justify-between mt-1 text-sm text-gray-500">
          <span>Discount</span>
          <span>₹2,000.00</span>
        </div>

        <div className="inline-flex items-center gap-2 mt-4 bg-orange-100 text-orange-600 text-xs px-4 py-1.5 rounded-full">
          <span className="w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-[10px]">
            %
          </span>
          Total saving of 0.4% on this order
        </div>

        <div className="border-t mt-6 pt-4 flex justify-between text-lg font-semibold">
          <span>Payable Amount</span>
          <span>₹4,98,000.00</span>
        </div>
      </div>
    </div>
  );
}
