import React, { useEffect } from "react";
import "./styles.css";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
    <>
      <Loader />
      <Navbar />
      <Hero />
      <About />
      <Capabilities />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
