import {
  FaUserTie,
  FaUserCircle,
  FaUserGraduate,
  FaUserAstronaut,
} from "react-icons/fa";

const testimonials = [
  {
    quote:
      "AutoApplyAI completely changed how I handle job emails. I no longer miss relevant opportunities, and my inbox stays clean.",
    name: "Rahul Mehta",
    role: "Frontend Developer",
    icon: FaUserGraduate,
    color: "emerald",
  },
  {
    quote:
      "The automation feels invisible in the best way. Jobs appear exactly when I need them, without any manual effort.",
    name: "Sneha Kapoor",
    role: "Product Designer",
    icon: FaUserCircle,
    color: "blue",
  },
  {
    quote:
      "I was skeptical at first, but the filtering accuracy is impressive. It saves hours every week.",
    name: "Amit Verma",
    role: "Software Engineer",
    icon: FaUserTie,
    color: "violet",
  },
  {
    quote:
      "Instead of searching across platforms, I just review curated alerts. The workflow fits perfectly into my routine.",
    name: "Neha Sharma",
    role: "Data Analyst",
    icon: FaUserAstronaut,
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/10 text-emerald-400 ring-emerald-400/20",
  blue: "bg-blue-500/10 text-blue-400 ring-blue-400/20",
  violet: "bg-violet-500/10 text-violet-400 ring-violet-400/20",
  amber: "bg-amber-500/10 text-amber-400 ring-amber-400/20",
};

const Testimonials: React.FC = () => {
  return (
    <section className="bg-black py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm text-white/50 mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Trusted by professionals who value focus
          </h2>
          <p className="mt-4 text-white/60">
            Real feedback from people using AutoApplyAI every day.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((t, index) => {
            const Icon = t.icon;

            return (
              <blockquote
                key={index}
                className="rounded-xl border border-white/10 bg-neutral-900 px-8 py-8 hover:bg-white/5 transition"
              >
                <p className="text-white text-lg leading-relaxed">
                  “{t.quote}”
                </p>

                <footer className="mt-6 flex items-center gap-4">
                  {/* Color-pulled avatar */}
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-full ring-1 ${colorMap[t.color]}`}
                  >
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {t.name}
                    </p>
                    <p className="text-sm text-white/50">
                      {t.role}
                    </p>
                  </div>
                </footer>
              </blockquote>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
