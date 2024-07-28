import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import 'animate.css/animate.min.css';

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

