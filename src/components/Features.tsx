import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "Reads LinkedIn & Naukri emails",
    description:
      "The system continuously monitors your inbox and detects job-related emails automatically.",
    stats: [
      { label: "Emails scanned", value: "1,248" },
      { label: "Job emails found", value: "312" },
    ],
  },
  {
    title: "Extracts structured job data",
    description:
      "AI parses company name, role, experience level, and apply links.",
    stats: [
      { label: "Companies identified", value: "186" },
      { label: "Roles parsed", value: "240+" },
    ],
  },
  {
    title: "Filters relevant opportunities",
    description:
      "Only roles matching your preferences and profile are retained.",
    stats: [
      { label: "Filtered jobs", value: "94" },
      { label: "Match accuracy", value: "92%" },
    ],
  },
  {
    title: "Sends clean job alerts",
    description:
      "You receive distraction-free summaries instead of noisy inbox emails.",
    stats: [
      { label: "Alerts sent", value: "128" },
      { label: "Open rate", value: "78%" },
    ],
  },
  {
    title: "Stores approved jobs",
    description:
      "Approved opportunities are saved automatically for later review.",
    stats: [
      { label: "Saved jobs", value: "56" },
      { label: "Sync success", value: "100%" },
    ],
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-white/50 mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            A fully automated job discovery pipeline
          </h2>
          <p className="mt-4 text-white/60">
            From inbox to organized opportunities — without manual effort.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT — STEP RAIL */}
          <div className="relative space-y-1">
            {steps.map((step, index) => {
              const isActive = index === active;

              return (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`w-full text-left px-5 py-4 rounded-lg transition border
                    ${
                      isActive
                        ? "bg-white/5 border-white/20"
                        : "border-transparent hover:bg-white/5"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-sm text-white/40 mt-1">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="text-white font-medium">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/55 max-w-md">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — DETAIL PANEL */}
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-xl border border-white/10 bg-neutral-900"
              >
                {/* Panel Header */}
                <div className="px-6 py-4 border-b border-white/10">
                  <p className="text-xs text-white/50 mb-1">
                    Step {active + 1}
                  </p>
                  <h4 className="text-sm font-medium text-white">
                    {steps[active].title}
                  </h4>
                </div>

                {/* Stats */}
                <div className="px-6 py-6 grid grid-cols-2 gap-6">
                  {steps[active].stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-xs text-white/40">
                        {stat.label}
                      </p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="px-6 pb-6 text-xs text-white/40">
                  Updated in real time
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
