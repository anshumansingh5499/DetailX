import zapDemo from "../assets/zap-demo.jpeg";

const ZAP_DEMO_URL =
  "https://zapier.com/editor/340629881/published";

const Demo: React.FC = () => {
  return (
    <section
      id="demo"
      className="bg-black py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — CONTENT */}
          <div>
            <p className="text-sm text-white/50 mb-4">
              Live demo
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
              See the automation in action
            </h2>

            <p className="mt-4 text-white/60 max-w-xl">
              Explore a real Zapier workflow that reads job emails,
              extracts structured data using AI, and sends clean alerts
              automatically.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={ZAP_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black hover:bg-white/90 transition"
              >
                Open live demo
              </a>

              <span className="text-sm text-white/40">
                Opens in Zapier
              </span>
            </div>
          </div>

          {/* RIGHT — PREVIEW */}
          <div className="relative">

            <div className="rounded-xl border border-white/10 bg-neutral-900 overflow-hidden">

              {/* Browser header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              {/* Image */}
              <img
                src={zapDemo}
                alt="Zapier automation workflow preview"
                className="w-full object-cover"
              />
            </div>

            {/* Subtle caption */}
            <p className="mt-3 text-xs text-white/40 text-center">
              Real workflow — no mockups
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Demo;
