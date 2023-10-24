import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import "./scss/index.scss";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import Customers from "./components/Customers";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
