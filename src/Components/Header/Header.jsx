import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import 'animate.css/animate.min.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      const handleScroll = () => {
        closeMenu();
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isOpen]);

  return (
    <header className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adv. Sachin Yashwantrao Mane
        </h1>
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <XMarkIcon className="h-6 w-6"/> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
        <ul className={`fixed inset-0 flex flex-col items-center justify-center bg-gray-900 space-y-6 transform transition-transform duration-300 ease-in-out z-10 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:static md:flex md:flex-row md:space-x-4 md:space-y-0 md:bg-transparent md:transform-none`}>
          <li><a href="#home" className="hover:text-gray-400" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" className="hover:text-gray-400" onClick={closeMenu}>About</a></li>
          <li><a href="#" className="hover:text-gray-400" onClick={closeMenu}>Case Studies</a></li>
          <li><a href="#contact" className="hover:text-gray-400" onClick={closeMenu}>Contact</a></li>
          <li><a href="#contact" className="hover:text-gray-400" onClick={closeMenu}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
