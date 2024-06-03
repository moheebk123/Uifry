import AOS from "aos";
import Navbar from "./sections/navbar/Navbar.jsx";
import Header from "./sections/hero/Hero.jsx";
import Features from "./sections/features/Features.jsx";
import Advantages from "./sections/advantages/Advantages.jsx";
import Testimonials from "./sections/testimonials/Testimonials.jsx";
import Faq from "./sections/faq/Faq.jsx";
import GetStarted from "./sections/get-started/GetStarted.jsx";
import Footer from "./sections/footer/Footer.jsx";
import "aos/dist/aos.css";
import "./App.css";

const App = () => {
  AOS.init();

  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Advantages />
      <Testimonials />
      <Faq />
      <GetStarted />
      <Footer />
    </>
  );
};

export default App;
