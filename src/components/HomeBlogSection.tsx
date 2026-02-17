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
    title: "Advanced Paint Protection",
    category: "Protection",
    image:
      "https://images.unsplash.com/photo-1603386329225-868f9c3c17f8?q=80&w=1600&auto=format&fit=crop",
    description:
      "Modern protection solutions designed for long-term gloss retention.",
    content: `
Advanced paint protection preserves the vehicle’s finish from daily wear.

Includes:
• Protective film application
• Ceramic layering
• Hydrophobic enhancement

Designed for long-lasting brilliance and reduced maintenance.
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
    <section className="bg-white text-black py-28 px-6 md:px-16 overflow-hidden">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-light tracking-tight">
          From Our Journal
        </h2>

        <p className="mt-6 text-black/60 max-w-2xl mx-auto text-lg leading-relaxed">
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
          className="w-12 h-12 border border-black/20 rounded-full 
                     hover:bg-black hover:text-white transition 
                     disabled:opacity-30"
        >
          ←
        </button>

        <button
          onClick={next}
          disabled={index === maxIndex}
          className="w-12 h-12 border border-black/20 rounded-full 
                     hover:bg-black hover:text-white transition 
                     disabled:opacity-30"
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
            <div key={i} className="w-full md:w-1/3 flex-shrink-0 group">

              <div className="relative overflow-hidden ">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <span className="text-xs tracking-widest text-black/40 uppercase">
                  {blog.category}
                </span>

                <h3 className="mt-3 text-lg font-medium">
                  {blog.title}
                </h3>

                <p className="mt-4 text-black/60 text-sm leading-relaxed">
                  {blog.description}
                </p>

                <button
                  onClick={() => setSelectedBlog(blog)}
                  className="mt-6 px-6 py-2 border border-black/30 
                             hover:bg-black hover:text-white transition"
                >
                  Read More →
                </button>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
          >
            <div className="max-w-4xl mx-auto px-6 py-20 text-black relative">

              <button
                onClick={() => setSelectedBlog(null)}
                className="absolute top-8 right-8 text-3xl font-light hover:opacity-60 transition"
              >
                ✕
              </button>

              <img
                src={selectedBlog.image}
                alt={selectedBlog.title}
                className="w-full h-[450px] object-cover "
              />

              <h1 className="mt-12 text-4xl md:text-5xl font-light">
                {selectedBlog.title}
              </h1>

              <div className="mt-12 text-black/70 leading-relaxed text-lg whitespace-pre-line">
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
