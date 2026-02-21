import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServicesCards from "../components/ServicesCards";
import WashingSection from "../components/WashingSection";
// import Packages from "../components/Packages";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import ServicesAccordion from "../components/ServicesList";
import HomeBlogSection from "../components/HomeBlogSection";
import HomeServices from "../components/HomeServices";
import HomeHero from "../components/HomeHero";
import ContactStrip from "../components/ContactStrip";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ContactStrip/>
      <HomeHero/>

      <ServicesAccordion/>
      <HomeServices/>

      <ServicesCards />
      <WashingSection />
      <HomeBlogSection/>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
