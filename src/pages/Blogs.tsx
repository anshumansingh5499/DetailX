import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blog1 from "../assets/washing.jpg";
import blog2 from "../assets/detailing.jpg";
import blog3 from "../assets/ceramic.jpg";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "Why Regular Car Wash is Essential for Paint Protection",
    image: blog1,
    category: "Maintenance",
    date: "March 12, 2024",
    readTime: "5 min read",
    description:
      "Consistent washing prevents long-term paint damage, corrosion, and preserves showroom-level gloss.",
  },
  {
    title: "Benefits of Professional Auto Detailing",
    image: blog2,
    category: "Detailing",
    date: "April 02, 2024",
    readTime: "7 min read",
    description:
      "Detailing enhances aesthetics, extends lifespan, and increases resale value significantly.",
  },
  {
    title: "How Ceramic Coating Protects Your Car",
    image: blog3,
    category: "Protection",
    date: "May 18, 2024",
    readTime: "6 min read",
    description:
      "Nano-ceramic technology shields surfaces against UV rays, dirt, and micro-scratches.",
  },
];

const Blogs = () => {
  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="bg-white text-black pt-32 pb-24 px-6 md:px-12 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
          >
            Automotive Journal
          </motion.h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl leading-relaxed">
            A curated collection of premium detailing insights,
            maintenance strategies, and professional vehicle care knowledge.
          </p>

        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section className="bg-white py-28 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-[480px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase text-xs tracking-widest text-gray-500">
              Featured • {blogs[0].category}
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold mt-6 leading-snug">
              {blogs[0].title}
            </h2>

            <div className="flex items-center gap-6 text-gray-500 text-sm mt-6">
              <div className="flex items-center gap-2">
                <Calendar size={15} />
                {blogs[0].date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} />
                {blogs[0].readTime}
              </div>
            </div>

            <p className="text-gray-600 mt-8 leading-relaxed">
              {blogs[0].description}
            </p>

            <button className="mt-8 px-8 py-3 border border-black rounded-full 
                               hover:bg-black hover:text-white transition duration-300">
              Read Full Article
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="bg-white px-6 md:px-12 pb-20">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 border-b border-gray-200 pb-10">

          {["All", "Maintenance", "Detailing", "Protection"].map(
            (category, index) => (
              <button
                key={index}
                className="px-5 py-2 text-sm border border-gray-300 
                           rounded-full hover:border-black 
                           hover:bg-black hover:text-white transition"
              >
                {category}
              </button>
            )
          )}

        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="bg-white px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-16">

          {blogs.slice(1).map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-wider text-gray-500">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold mt-2 leading-snug">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                  <Calendar size={14} />
                  {blog.date}
                  <Clock size={14} />
                  {blog.readTime}
                </div>

                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  {blog.description}
                </p>

                <button className="mt-5 text-black font-medium group-hover:underline">
                  Read Article →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-gray-50 text-black py-24 px-6 md:px-12 border-t border-gray-200 text-center">

        <h2 className="text-3xl md:text-4xl font-semibold">
          Join Our Automotive Circle
        </h2>

        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          Get expert detailing advice and premium care techniques delivered monthly.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-full w-80 border border-gray-300 
                       focus:outline-none focus:border-black"
          />
          <button className="bg-black text-white px-8 py-3 rounded-full 
                             hover:bg-gray-800 transition">
            Subscribe
          </button>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Blogs;
