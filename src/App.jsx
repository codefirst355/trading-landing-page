import Contact from "./components/Contact";
import Earning from "./components/Earning";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Platform from "./components/Platform";
import Review from "./components/Review";
import Sidebar from "./components/Sidebar";
import Trust from "./components/Trust";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Hero />
      <Trust />
      <Earning />
      <Platform />
      <Review />
      <FAQs />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
