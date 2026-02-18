import React, { useEffect } from "react";
import "./styles.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import NexusPage from "./components/NexusPage";
import SentiencePage from "./components/SentiencePage";
import GenesisPage from "./components/GenesisPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VantaBackground from "./components/VantaBackground";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  useEffect(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.transition = "opacity 0.8s ease";
      loader.style.opacity = "0";
      setTimeout(() => {
        loader.style.display = "none";
      }, 800);
    }
  }, []);

  return (
    <Router> {/* Entire app is inside the Router context now */}
      <div>
        <Loader />
	  	<VantaBackground />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Capabilities />
                <Contact />
              </>
            }
          />
          <Route path="/nexus" element={<NexusPage />} />
          <Route path="/sentience" element={<SentiencePage />} />
          <Route path="/genesis" element={<GenesisPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

