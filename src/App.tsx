import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import ProductivitySection from "./components/ProductivitySection";
import InnovativeTechnology from "./components/InnovativeTechnology";
import Testimonials from "./components/Testimonial";
import TrustedBy from "./components/Trustedby";
import Pricing from "./components/Plans";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustedBy/>
        <ProductivitySection/>
        <Features />
        <InnovativeTechnology/>
        <Demo />
        <Pricing/>
        <Testimonials/>
      </main>
      <Footer />
    </>
  );
};

export default App;
