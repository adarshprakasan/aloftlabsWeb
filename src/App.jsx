import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import HeroSection from "./Components/HeroSection";
import Solutions from "./Components/Solutions";
import Footer from "./Components/Footer";
import DetailSection from "./Components/DetailSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <HeroSection />
        <DetailSection />
        <Solutions />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
