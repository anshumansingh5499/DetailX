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
      <section className="relative h-screen bg-black text-white flex items-center overflow-hidden">

        <motion.img
          src={blog1}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-bold leading-tight"
          >
            Automotive
            <br />
            <span className="text-white/60">Journal</span>
          </motion.h1>

          <p className="mt-8 text-gray-400 text-lg max-w-xl">
            Expert detailing insights, maintenance strategies,
            and performance care guidance.
          </p>
        </div>
      </section>

      {/* ================= FEATURED ARTICLE ================= */}
      <section className="bg-black text-white py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src={blogs[0].image}
              alt={blogs[0].title}
              className="w-full h-[500px] object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase text-sm tracking-widest text-gray-400">
              Featured • {blogs[0].category}
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              {blogs[0].title}
            </h2>

            <div className="flex items-center gap-6 text-gray-500 text-sm mt-6">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {blogs[0].date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                {blogs[0].readTime}
              </div>
            </div>

            <p className="text-gray-400 mt-8 leading-relaxed">
              {blogs[0].description}
            </p>

            <button className="mt-10 px-10 py-4 bg-white text-black rounded-full hover:bg-gray-200 transition">
              Read Full Article
            </button>
          </motion.div>

        </div>
      </section>

      {/* ================= CATEGORY FILTER ================= */}
      <section className="bg-black px-6 md:px-12 pb-16">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
          {["All", "Maintenance", "Detailing", "Protection"].map(
            (category, index) => (
              <button
                key={index}
                className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-xl 
                           border border-white/10 text-white text-sm 
                           hover:bg-white hover:text-black transition"
              >
                {category}
              </button>
            )
          )}
        </div>
      </section>

      {/* ================= BLOG GRID ================= */}
      <section className="bg-black px-6 md:px-12 pb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {blogs.slice(1).map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-2xl border border-white/10 
                         rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-8 text-white">
                <span className="text-sm text-gray-400 uppercase">
                  {blog.category}
                </span>

                <h3 className="text-xl font-semibold mt-3">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                  <Calendar size={16} />
                  {blog.date}
                  <Clock size={16} />
                  {blog.readTime}
                </div>

                <p className="text-gray-400 mt-4 text-sm">
                  {blog.description}
                </p>

                <button className="mt-6 text-white hover:underline">
                  Read Article →
                </button>
              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* ================= NEWSLETTER ================= */}
      <section className="bg-neutral-950 text-white py-32 px-6 md:px-12 text-center">

        <h2 className="text-4xl md:text-5xl font-bold">
          Join Our Automotive Circle
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl mx-auto">
          Exclusive insights, detailing techniques, and luxury care updates.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-full w-80 text-black focus:outline-none"
          />
          <button className="bg-white text-black px-10 py-4 rounded-full hover:bg-gray-200 transition">
            Subscribe
          </button>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Blogs;
