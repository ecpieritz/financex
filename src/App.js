import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import "./scss/index.scss";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <main>
        <Companies />
        <About />
        <Benefits />
        <Services />
        <Customers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
