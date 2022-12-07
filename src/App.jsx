import "./App.css";
import Features from "./pages/Features";
import Footer from "./pages/Footer";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App relative bg-white overflow-x-hidden">
      <Home />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
