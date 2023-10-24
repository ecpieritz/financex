import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import "./scss/index.scss";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Services from "./components/Services";

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
      </main>
    </div>
  );
}

export default App;
