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

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeHero/>

            <ServicesAccordion/>

      <ServicesCards />
      <WashingSection />
      <HomeServices/>
      <HomeBlogSection/>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
