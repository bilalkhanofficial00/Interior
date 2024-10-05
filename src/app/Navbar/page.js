"use client";

import Image from 'next/image';
import logo from '../images/HeroSection/Logo.png';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" ">
      <nav className={`lg:flex justify-around items-center  py-[25px] z-30 fixed inset-x-0 top-0 bg-white transition-shadow duration-300 ${isScrolled ? 'shadow-md py-[12px] shadow-gray-500' : 'shadow-none'}`}>
        <div className="pl-4">
          <Image src={logo} alt="Logo Image" />
        </div>

        <div className="lg:flex space-x-12 list-none hidden">
          <li className="text-[#1F1F1F] text-xl font-inter font-semibold relative group">
            <a className="block" href="#home">Home</a>
            <span className="block h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="text-[#545454] text-xl font-inter font-semibold relative group">
            <a className="block" href="#Gallery">Gallery</a>
            <span className="block h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="text-[#545454] text-xl font-inter font-semibold relative group">
            <a className="block" href="#contact">Contact</a>
            <span className="block h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="text-[#545454] text-xl font-inter font-semibold relative group">
            <a className="block" href="#Support">Support</a>
            <span className="block h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
          </li>
        </div>

        <div>
          <button className='bg-[#1F1F1F] font-inter text-lg font-semibold text-white py-2 px-7 cursor-pointer hover:bg-yellow-600 rounded-lg text-center hidden lg:block'>Sign Up</button>
        </div>

        <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden block md:text-7xl cursor-pointer text-6xl absolute right-3 md:top-1 top-2.5'>
          &#8801;
        </div>

        <div className={`${isMenuOpen ? "-translate-x-5" : "translate-x-full"} lg:hidden fixed top-24 right-0 inset-x-10 rounded-3xl bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 md:border-[4px] border-[3px] shadow-lg border-yellow-500 text-white z-20 p-6 transition-transform duration-500 ease-in-out`}>
          <div className="flex flex-col space-y-5 md:py-8 text-center list-none">
            <li className="text-xl md:text-3xl font-inter font-semibold hover:text-blue-300">
              <a href="#home">Home</a>
            </li>
            <li className="text-xl md:text-3xl font-inter font-semibold hover:text-blue-300">
              <a href="#Gallery">Gallery</a>
            </li>
            <li className="text-xl md:text-3xl font-inter font-semibold hover:text-blue-300">
              <a href="#contact">Contact</a>
            </li>
            <li className="text-xl md:text-3xl font-inter font-semibold hover:text-blue-300">
              <a href="#Support">Support</a>
            </li>
          </div>
        </div>
      </nav>
    </div>
  );
}
