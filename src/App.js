import HeroBanner from "./components/HeroBanner";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import "./scss/index.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <main>
        <Companies />
      </main>
    </div>
  );
}

export default App;
