import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import "./scss/index.scss";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <main>
        <Companies />
        <About />
      </main>
    </div>
  );
}

export default App;
