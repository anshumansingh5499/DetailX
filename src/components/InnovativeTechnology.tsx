import { BarChart3, Workflow, Share2, Smartphone } from "lucide-react";

const capabilities = [
  {
    title: "Automation engine",
    description:
      "Automatically processes job-related emails, extracts structured data, and triggers workflows.",
    icon: Workflow,
  },
  {
    title: "Real-time analytics",
    description:
      "Track job volume, response rates, and engagement metrics as they happen.",
    icon: BarChart3,
  },
  {
    title: "Collaboration-ready",
    description:
      "Centralize job tracking, share updates, and collaborate without fragmented tools.",
    icon: Share2,
  },
  {
    title: "Mobile-first experience",
    description:
      "Access alerts, insights, and saved jobs seamlessly across devices.",
    icon: Smartphone,
  },
];

const InnovativeTechnology = () => {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-white/50 mb-4">
            Platform capabilities
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Technology designed for reliability and scale
          </h2>
          <p className="mt-4 text-white/60">
            Built with a focus on automation, clarity, and long-term performance.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16 mb-20">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="flex gap-4">
                <div className="mt-1 text-white/70">
                  <Icon size={18} />
                </div>

                <div>
                  <h3 className="text-white font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-white/55 max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-10 flex items-center justify-between flex-col sm:flex-row gap-6">
          <p className="text-sm text-white/60 max-w-xl">
            Everything works together as a single system — no plugins, no manual
            setup, no maintenance overhead.
          </p>

          <button className="inline-flex items-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/5 transition">
            Explore platform
          </button>
        </div>
      </div>
    </section>
  );
};

export default InnovativeTechnology;
