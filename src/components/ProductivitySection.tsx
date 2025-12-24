import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Workflow, BarChart3 } from "lucide-react";

const features = [
  {
    title: "Secure infrastructure",
    description:
      "Enterprise-grade security and stable automation protect your job data.",
    icon: ShieldCheck,
    stats: { emails: "1.2k", jobs: "240", alerts: "128" },
    bars: [40, 60, 30, 80, 55, 90, 65],
  },
  {
    title: "Unified workflow",
    description:
      "Job emails, filters, and alerts work together in one system.",
    icon: Workflow,
    stats: { emails: "2.4k", jobs: "510", alerts: "300" },
    bars: [60, 85, 45, 90, 70, 95, 80],
  },
  {
    title: "Real-time insights",
    description:
      "Monitor opportunities, responses, and alerts as they happen.",
    icon: BarChart3,
    stats: { emails: "3.1k", jobs: "820", alerts: "610" },
    bars: [75, 90, 60, 100, 85, 95, 90],
  },
];

const ProductivitySection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-24">
          <p className="text-sm text-white/50 mb-4">Productivity</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Designed to reduce noise and increase clarity
          </h2>
          <p className="mt-4 text-white/60">
            A focused system that helps you move faster without distractions.
          </p>
        </div>

        {/* FEATURE TABS */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((item, index) => {
            const Icon = item.icon;
            const isActive = index === active;

            return (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`rounded-xl border px-6 py-6 text-left transition
                  ${
                    isActive
                      ? "border-white/30 bg-white/5"
                      : "border-white/10 hover:border-white/20 hover:bg-white/5"
                  }`}
              >
                <Icon className="text-white/80 mb-4" size={20} />
                <h3 className="text-white font-medium mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-white/55">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* DASHBOARD PANEL */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-xl border border-white/10 bg-neutral-900"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <h4 className="text-sm font-medium text-white">
                  Job activity overview
                </h4>
                <span className="text-xs text-white/50">Live</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 px-6 py-6 border-b border-white/10">
                {Object.entries(features[active].stats).map(
                  ([key, value]) => (
                    <div key={key}>
                      <p className="text-xs text-white/40 capitalize">
                        {key}
                      </p>
                      <p className="mt-1 text-xl font-semibold text-white">
                        {value}
                      </p>
                    </div>
                  )
                )}
              </div>

              {/* Bars */}
              <div className="flex items-end gap-3 px-6 py-8 h-40">
                {features[active].bars.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="flex-1 rounded-sm bg-white/80"
                  />
                ))}
              </div>

              <p className="px-6 pb-6 text-xs text-white/40">
                Weekly activity, updated continuously
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProductivitySection;
