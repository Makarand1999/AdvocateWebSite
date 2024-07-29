import React from "react";

import "animate.css/animate.min.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

function LandingPage() {
  return (
    <div className="font-roboto">
    
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      
    </div>
  );
}

export default LandingPage;
