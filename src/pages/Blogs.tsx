import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import blog1 from "../assets/washing.jpg";
import blog2 from "../assets/detailing.jpg";
import blog3 from "../assets/ceramic.jpg";
import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";

const blogs = [
  {
    title: "Why Regular Car Wash is Important",
    image: blog1,
    category: "Maintenance",
    date: "March 12, 2024",
    readTime: "5 min read",
    description:
      "Regular washing prevents paint damage, corrosion, and keeps your vehicle looking brand new.",
  },
  {
    title: "Benefits of Professional Auto Detailing",
    image: blog2,
    category: "Detailing",
    date: "April 02, 2024",
    readTime: "7 min read",
    description:
      "Professional detailing enhances appearance, protects surfaces, and increases resale value.",
  },
  {
    title: "How Ceramic Coating Protects Your Car",
    image: blog3,
    category: "Protection",
    date: "May 18, 2024",
    readTime: "6 min read",
    description:
      "Ceramic coating creates a protective layer that shields against dirt, UV rays, and scratches.",
  },
];

const Blogs = () => {
  return (
    <>
      <Navbar />

      <section className="bg-white">

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center bg-black text-white overflow-hidden">

          <div className="absolute inset-0">
            <img
              src={blog1}
              alt="Blog Hero"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black" />

          <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold leading-tight max-w-4xl"
            >
              Automotive
              <br />
              <span className="text-blue-500">Insights & Expertise</span>
            </motion.h1>

            <p className="mt-8 text-gray-400 text-lg max-w-xl">
              Expert maintenance guides, detailing secrets, and professional advice to keep your vehicle flawless.
            </p>
          </div>
        </section>

        {/* FEATURED BLOG */}
        <section className="px-6 md:px-12 py-28">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-[450px] object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
                Featured • {blogs[0].category}
              </span>

              <h2 className="text-4xl font-bold mt-4">
                {blogs[0].title}
              </h2>

              <div className="flex items-center gap-6 text-gray-500 text-sm mt-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {blogs[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  {blogs[0].readTime}
                </div>
              </div>

              <p className="text-gray-600 mt-6 leading-relaxed">
                {blogs[0].description}
              </p>

              <button className="mt-8 bg-black text-white px-10 py-4 rounded-full hover:bg-gray-900 transition">
                Read Full Article
              </button>
            </motion.div>
          </div>
        </section>

        {/* CATEGORY FILTER */}
        <section className="px-6 md:px-12 pb-16">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-4">
            {["All", "Maintenance", "Detailing", "Protection"].map(
              (category, index) => (
                <button
                  key={index}
                  className="px-6 py-2 rounded-full bg-gray-100 hover:bg-red-600 
                             hover:text-white transition text-sm"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </section>

        {/* BLOG GRID */}
        <section className="px-6 md:px-12 pb-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">

            {blogs.slice(1).map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group rounded-3xl overflow-hidden bg-white 
                           border border-gray-100 shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                </div>

                <div className="p-8">
                  <span className="text-red-600 text-sm font-medium">
                    {blog.category}
                  </span>

                  <h3 className="text-xl font-semibold mt-2">
                    {blog.title}
                  </h3>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mt-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      {blog.readTime}
                    </div>
                  </div>

                  <p className="text-gray-600 mt-4 text-sm">
                    {blog.description}
                  </p>

                  <button className="mt-6 text-red-600 font-semibold hover:underline">
                    Read Article →
                  </button>
                </div>
              </motion.div>
            ))}

          </div>
        </section>

        {/* NEWSLETTER – PREMIUM DARK */}
        <section className="bg-black text-white py-32 px-6 md:px-12 text-center">

          <h2 className="text-4xl font-bold">
            Stay Ahead in Automotive Care
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Join our premium community for exclusive detailing tips and expert advice.
          </p>

          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full w-80 text-black focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-red-700 transition">
              Subscribe
            </button>
          </div>

        </section>

      </section>

      <Footer />
    </>
  );
};

export default Blogs;
