import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import 'animate.css/animate.min.css';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="font-roboto">
      <Header />
      <main>
        <Routes>
          <Route path="/"element={<LandingPage/>}/>
          <Route path="/login"element={<Login/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

