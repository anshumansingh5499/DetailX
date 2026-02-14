import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesCards from "../components/ServicesCards";
import WashingSection from "../components/WashingSection";
import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ServicesAccordion from "../components/ServicesList";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesCards />
      <WashingSection />
      <ServicesAccordion/>
      <Packages />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
