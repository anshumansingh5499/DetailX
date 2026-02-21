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
      <section className="relative bg-[#071326] text-white pt-40 pb-32 px-6 md:px-20 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-light leading-tight tracking-tight"
          >
            Automotive Journal
          </motion.h1>

          <p className="mt-8 text-gray-300 text-lg max-w-2xl leading-relaxed">
            Precision insights, detailing science, and performance protection
            engineered for automotive excellence.
          </p>

        </div>
      </section>

      {/* ================= FEATURED ================= */}
      <section className="bg-[#050b16] text-white py-36 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden"
          >
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-[520px] object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase text-xs tracking-[0.4em] text-cyan-400">
              Featured • {blogs[0].category}
            </span>

            <h2 className="text-4xl md:text-5xl font-light mt-8 leading-snug">
              {blogs[0].title}
            </h2>

            <div className="flex items-center gap-8 text-gray-400 text-sm mt-8">
              <div className="flex items-center gap-2">
                <Calendar size={15} />
                {blogs[0].date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} />
                {blogs[0].readTime}
              </div>
            </div>

            <p className="text-gray-300 mt-10 leading-relaxed">
              {blogs[0].description}
            </p>

            <button className="mt-10 px-10 py-3 border border-cyan-400 text-cyan-400 
                               hover:bg-cyan-400 hover:text-black transition duration-300">
              Read Full Article
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="bg-[#071326] text-white px-6 md:px-20 py-16">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6">

          {["All", "Maintenance", "Detailing", "Protection"].map(
            (category, index) => (
              <button
                key={index}
                className="px-6 py-2 text-sm border border-white/20 
                           hover:border-cyan-400 hover:text-cyan-400 transition"
              >
                {category}
              </button>
            )
          )}

        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="bg-[#050b16] text-white px-6 md:px-20 py-36">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-20">

          {blogs.slice(1).map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-72 object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-8">
                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  {blog.category}
                </span>

                <h3 className="text-2xl font-light mt-4 leading-snug">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-6 text-gray-400 text-sm mt-4">
                  <Calendar size={14} />
                  {blog.date}
                  <Clock size={14} />
                  {blog.readTime}
                </div>

                <p className="text-gray-400 mt-6 text-sm leading-relaxed">
                  {blog.description}
                </p>

                <button className="mt-6 text-cyan-400 group-hover:text-white transition">
                  Read Article →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="relative bg-[#071326] text-white py-32 px-6 md:px-20 text-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/10 via-transparent to-blue-500/10 blur-3xl pointer-events-none" />

        <h2 className="text-4xl md:text-5xl font-light">
          Join Our Automotive Circle
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Receive precision detailing insights and premium vehicle protection strategies.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-8 py-3 bg-transparent border border-white/20 
                       focus:outline-none focus:border-cyan-400 text-white w-80"
          />
          <button className="px-10 py-3 border border-cyan-400 text-cyan-400 
                             hover:bg-cyan-400 hover:text-black transition">
            Subscribe
          </button>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Blogs;