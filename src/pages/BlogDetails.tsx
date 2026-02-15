import { useParams } from "react-router-dom";
import { blogs } from "../data/blogData";
import { motion } from "framer-motion";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div className="text-white">Blog Not Found</div>;

  return (
    <section className="bg-black text-white min-h-screen pb-32">

      {/* HERO IMAGE */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={blog.heroImage}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 mt-16">

        <h1 className="text-4xl md:text-6xl font-light leading-tight">
          {blog.title}
        </h1>

        <p className="text-orange-500 mt-4 uppercase tracking-widest text-sm">
          {blog.category}
        </p>

        <div className="mt-12 space-y-10">
          {blog.content.map((block, index) => {
            if (block.type === "paragraph") {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-white/70 text-lg leading-relaxed"
                >
                  {block.text}
                </motion.p>
              );
            }

            if (block.type === "image") {
              return (
                <motion.img
                  key={index}
                  src={block.src}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="rounded-[30px] w-full shadow-2xl"
                />
              );
            }

            return null;
          })}
        </div>

      </div>
    </section>
  );
};

export default BlogDetails;
