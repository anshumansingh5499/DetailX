import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "For individuals getting started with automation.",
    features: [
      "Scan up to 100 job emails / month",
      "Basic job extraction",
      "Email alerts",
      "Manual approval",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹499",
    description: "For serious job seekers who want speed and accuracy.",
    features: [
      "Unlimited job email scanning",
      "Advanced AI extraction",
      "Smart job filtering",
      "Clean daily summaries",
      "Google Docs sync",
      "Priority alerts",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "₹1,499",
    description: "For small teams and placement groups.",
    features: [
      "Everything in Pro",
      "Shared job workspace",
      "Collaboration & notes",
      "Centralized tracking",
      "Priority support",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-white/50 mb-4">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Simple pricing that scales with you
          </h2>
          <p className="mt-4 text-white/60">
            Start for free. Upgrade only when automation starts saving you time.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border p-8 flex flex-col
                ${
                  plan.highlighted
                    ? "border-white/30 bg-white/5"
                    : "border-white/10 bg-neutral-900"
                }`}
            >
              {/* Plan name */}
              <h3 className="text-lg font-medium text-white">
                {plan.name}
              </h3>

              <p className="mt-2 text-sm text-white/55">
                {plan.description}
              </p>

              {/* Price */}
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold text-white">
                  {plan.price}
                </span>
                <span className="text-sm text-white/50">
                  / month
                </span>
              </div>

              {/* Features */}
              <ul className="mt-8 space-y-3 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="text-white/70 mt-0.5"
                    />
                    <span className="text-sm text-white/70">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition
                  ${
                    plan.highlighted
                      ? "bg-white text-black hover:bg-white/90"
                      : "border border-white/15 text-white hover:bg-white/5"
                  }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Pricing;
