import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import CompanyLogos from "./components/CompanyLogos"; // Import CompanyLogos component
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-visible">
        <Header />
        <Hero />
        {/* This instance of CompanyLogos is displayed after the Hero section */}
        <CompanyLogos className="relative z-10 mt-20 lg:block" />
        <Benefits />
      </div>
      <ButtonGradient />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
