import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Anshuman Grover",
    role: "Advisor",
    text: `"You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change."`,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    highlighted: false,
  },
  {
    name: "Shreya",
    role: "Consultation",
    text: `"Simply the best. Better than all the rest. I recommend this product to beginners and advanced users."`,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    highlighted: true,
  },
  {
    name: "Tushar SIngh",
    role: "Designer",
    text: `"I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish."`,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    highlighted: false,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#f3f3f3] py-24 px-8">

      {/* Top small text */}
      <p className="text-center text-sm text-gray-500 mb-3">
        2,157 people have said how good Rareblocks
      </p>

      {/* Heading */}
      <h2 className="text-center text-5xl font-bold mb-20">
        Our happy clients
      </h2>

      {/* Testimonials */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center">

        {testimonials.map((item, index) => (
          <div
            key={index}
            className={`p-10 rounded-3xl transition-all duration-300 ${
              item.highlighted
                ? "bg-white shadow-lg"
                : "bg-transparent"
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1 text-orange-400 mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Text */}
            <p className="text-gray-700 mb-8 leading-relaxed">
              {item.text}
            </p>

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}

      </div>

      {/* Bottom Link */}
      <div className="text-center mt-16">
        <button className="font-medium border-b border-black pb-1 hover:opacity-70 transition">
          See all reviews
        </button>
      </div>

    </section>
  );
};

export default TestimonialsSection;
