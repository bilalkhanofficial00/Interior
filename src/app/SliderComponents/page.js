'use client'; // Required for Next.js

import Image from 'next/image';
import SliderCol from '../images/Slider/SliderCol.png';
import { useState } from 'react'; // For state management
import { Data } from "./SliderApi";
import Left from '../images/Slider/Left.png'
import Right from '../images/Slider/Right.png'

export function Slider() {
  // State for controlling the visible testimonials
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Total number of testimonial sets
  const totalSets = Math.ceil(Data.length / 2);

  // Function to handle next arrow click
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSets); // Move to the next set of 2 cards
  };

  // Function to handle previous arrow click
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSets) % totalSets); // Move to the previous set of 2 cards
  };

  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 gap-y-24  items-center">
        
        {/* Left Side with Image and Arrows */}
        <div className="relative mt-5">
          <Image src={SliderCol} alt="Interior Design" className="object-cover w-full h-full" />
          
          {/* Arrows positioned below the image */}
          <div className="absolute flex justify-center space-x-20  items-center  bottom-[-70px] left-[50%] transform -translate-x-1/2">
            <button onClick={prevSlide} >
             <Image src={Left} alt='Left Arrow'/>
            </button>
            <button onClick={nextSlide}>
            <Image src={Right} alt='Right Arrow'/>
            </button>
          </div>
        </div>

        {/* Right Side with Testimonials */}
        <div className="overflow-hidden">  {/* Ensure overflow is hidden */}
          <p className="font-inter font-bold text-center  lg:text-start text-[45px] text-[#1F1F1F] mb-10">
            What Our Customers Say About Us
          </p>

          {/* Testimonials Slider Container */}
          <div
            className="flex transition-transform duration-500 ease-in-out w-[410%] md:w-[198%]" // Adjust container width
            style={{ transform:  `translateX(-${currentIndex * 50}%)` }} // Sliding effect
          >
            {Data.map((item, index) => (
              <div className="w-[50%] p-8 bg-[#1F1F1F] rounded-md mx-2" key={index}>
                <div className="text-white text-[30px]">“</div>
                <div className="py-6 font-inter font-medium text-white text-lg">
                  {item.Message}
                </div>
                <div className="flex items-center space-x-4">
                  <div>
                    <Image src={item.image} alt={item.Name} className="w-12 h-12 rounded-full" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[20px]">{item.Name}</p>
                    <p className="text-[#929292] text-sm">{item.Address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
