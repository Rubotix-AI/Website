import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import Capabilities from "./components/Capabilities";
import Industries from "./components/Industries";
import FAQ from "./components/FAQ";
import Quote from "./components/Quote";
import Footer from "./components/Footer";
import StickyCTA from "./components/StickyCTA";
import NetworkBackground from "./components/NetworkBackground";

const App = () => {
  return (
    <>
      <NetworkBackground />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Capabilities />
        <Industries />
        <FAQ />
        <Quote />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
};

export default App;
