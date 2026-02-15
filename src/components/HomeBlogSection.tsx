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
      "Discover how advanced nano-ceramic technology protects your vehicle from UV damage and environmental contaminants.",
    content: `
Ceramic coating is a liquid polymer applied to the exterior surfaces of your vehicle. 
It chemically bonds with the factory paint, creating a layer of protection that enhances gloss and durability.

Benefits include:
• Hydrophobic surface that repels water and dirt
• Protection against UV rays and oxidation
• Long-lasting shine and easier maintenance

Professional application ensures maximum bonding and performance.
`,
  },
  {
    title: "Luxury Interior Cleaning",
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1600&auto=format&fit=crop",
    description:
      "Complete interior restoration including deep vacuum extraction and leather conditioning.",
    content: `
Luxury interior cleaning goes beyond standard vacuuming.

Our process includes:
• Deep extraction cleaning
• Leather hydration treatment
• Dashboard UV protection
• Fabric stain removal

Every surface is carefully restored to deliver a premium, showroom-ready finish.
`,
  },
  {
    title: "Paint Correction Explained",
    category: "Detailing",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Remove swirl marks and restore paint clarity with precision polishing.",
    content: `
Paint correction removes imperfections like swirl marks, scratches, and oxidation.

Using multi-stage machine polishing:
• Surface clarity is restored
• Depth and gloss are enhanced
• Protective coatings can be applied afterward

The result is a mirror-like showroom finish.
`,
  },
  {
    title: "Paint Correction Explained",
    category: "Detailing",
    image:
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1600&auto=format&fit=crop",
    description:
      "Remove swirl marks and restore paint clarity with precision polishing.",
    content: `
Paint correction removes imperfections like swirl marks, scratches, and oxidation.

Using multi-stage machine polishing:
• Surface clarity is restored
• Depth and gloss are enhanced
• Protective coatings can be applied afterward

The result is a mirror-like showroom finish.
`,
  },
];

const HomeBlogSection = () => {
  const [index, setIndex] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);

  const visibleCards = 3;
  const maxIndex = blogs.length - visibleCards;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="bg-black text-white py-28 px-6 md:px-16 overflow-hidden">

      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          From Our <span className="text-orange-500">Journal</span>
        </h2>

        <p className="mt-6 text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
          Stay ahead with expert insights from our detailing professionals.
          Explore in-depth guides on ceramic coating, paint protection,
          and premium interior restoration.
        </p>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto flex justify-end gap-4 mb-8">
        <button
          onClick={prev}
          disabled={index === 0}
          className="w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition disabled:opacity-30"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={index === maxIndex}
          className="w-12 h-12 border border-white/20 rounded-full hover:bg-white hover:text-black transition disabled:opacity-30"
        >
          →
        </button>
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto overflow-hidden">
        <motion.div
          animate={{ x: `-${index * (100 / visibleCards)}%` }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
          className="flex gap-8"
          style={{ width: `${(blogs.length / visibleCards) * 100}%` }}
        >
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="w-full md:w-1/3 flex-shrink-0 group"
            >
              <div className="relative overflow-hidden rounded-[28px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-72 object-cover"
                />
              </div>

              <div className="mt-6">
                <span className="text-xs tracking-widest text-orange-500 uppercase">
                  {blog.category}
                </span>

                <h3 className="mt-3 text-lg font-medium">
                  {blog.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-white/60 text-sm leading-relaxed">
                  {blog.description}
                </p>

                {/* Read More */}
                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="mt-6 px-6 py-2 border border-white/30 rounded-full hover:bg-white hover:text-black transition"
                >
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 text-white relative">

              {/* Close Button */}
              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-8 right-8 text-3xl font-light hover:text-orange-500 transition"
              >
                ✕
              </button>

              {/* Hero Image */}
              <img
                src={selectedBlog.image}
                className="w-full h-[450px] object-cover rounded-[30px]"
              />

              {/* Title */}
              <h1 className="mt-12 text-4xl md:text-5xl font-light">
                {selectedBlog.title}
              </h1>

              {/* Full Content */}
              <div className="mt-12 text-white/70 leading-relaxed text-lg whitespace-pre-line">
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
