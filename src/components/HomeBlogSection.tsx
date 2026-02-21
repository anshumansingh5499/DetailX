/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const blogs = [
  {
    title: "Ceramic Coating Guide 2026",
    category: "Ceramic",
    image:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1600&auto=format&fit=crop",
    description:
      "Discover how advanced nano-ceramic technology protects your vehicle.",
    content: `Ceramic coating is a liquid polymer applied to exterior surfaces...

Benefits include:
• Hydrophobic protection
• UV resistance
• Long-lasting gloss

Professional application ensures maximum performance.`,
  },
  {
    title: "Luxury Interior Cleaning",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
    description:
      "Complete interior restoration including deep vacuum extraction.",
    content: `Luxury interior cleaning includes:

• Deep extraction
• Leather hydration
• UV dashboard protection
• Fabric restoration`,
  },
  {
    title: "Paint Correction Explained",
    category: "Detailing",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Remove swirl marks and restore paint clarity.",
    content: `Paint correction removes imperfections:

• Swirl removal
• Multi-stage polishing
• Gloss enhancement`,
  },
  {
    title: "Advanced Paint Protection",
    category: "Protection",
    image:
      "https://images.unsplash.com/photo-1603386329225-868f9c3c17f8?q=80&w=1600&auto=format&fit=crop",
    description:
      "Modern protection solutions for long-term gloss retention.",
    content: `Advanced paint protection includes:

• Protective film
• Ceramic layering
• Hydrophobic enhancement`,
  },
];

const HomeBlogSection = () => {
  const [index, setIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const visibleCards = 3;
  const maxIndex = blogs.length - visibleCards;

  return (
    <section className="relative bg-[#071326] text-white py-32 px-6 md:px-16 overflow-hidden">

      {/* Subtle Cyan Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20">
        <p className="uppercase tracking-[0.5em] text-xs text-cyan-400 mb-6">
          Journal
        </p>

        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          Performance Insights.
          <br />
          <span className="text-white">Expert Knowledge.</span>
        </h2>
      </div>

      {/* Controls */}
      <div className="max-w-7xl mx-auto flex justify-end gap-4 mb-10">
        <button
          onClick={() => index > 0 && setIndex(index - 1)}
          className="w-12 h-12 border border-white/20 rounded-full 
                     hover:border-cyan-400 transition"
        >
          ←
        </button>

        <button
          onClick={() => index < maxIndex && setIndex(index + 1)}
          className="w-12 h-12 border border-white/20 rounded-full 
                     hover:border-cyan-400 transition"
        >
          →
        </button>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.div
          animate={{ x: `-${index * 33.33}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="flex gap-8"
        >
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 flex-shrink-0 group cursor-pointer"
              onClick={() => setSelectedBlog(blog)}
            >
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-80 object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="mt-6">
                <span className="text-xs tracking-widest text-cyan-400 uppercase">
                  {blog.category}
                </span>

                <h3 className="mt-3 text-xl font-light">
                  {blog.title}
                </h3>

                <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Cinematic Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#071326] z-50 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-24 relative">

              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-10 right-10 text-3xl font-light text-white hover:text-cyan-400 transition"
              >
                ✕
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[500px] object-cover rounded-xl"
              />

              <h1 className="mt-16 text-4xl md:text-5xl font-light">
                {selectedBlog.title}
              </h1>

              <div className="mt-12 text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                {selectedBlog.content}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default HomeBlogSection;