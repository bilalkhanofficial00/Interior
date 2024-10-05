'use client';

import Image from "next/image";
import { images } from "./imagesapi";
import { useState } from "react";

export function Services() {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState('first'); // Default to first bulk
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  // Handle view button click
  const handleViewClick = (image) => {
    setSelectedImage(image);
  };

  // Split images into 5 bulks of 12 images each
  const firstBulk = images.slice(0, 12);
  const secondBulk = images.slice(12, 24);
  const thirdBulk = images.slice(24, 36);
  const fourthBulk = images.slice(36, 48);
  const fifthBulk = images.slice(48, 60);

  return (
    <>
      <div className="container" id="Gallery">
        <div className="py-10 px-4 max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-inter font-bold text-center lg:my-20 md:my-8 my-4">Image Gallery</h2>

          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center items-center lg:space-x-8 md:space-x-5 my-12 gap-5">
            <button
              onClick={() => setActiveTab('first')}
              className={`py-2 px-4 text-xl font-semibold font-inter rounded-md shadow-md ${activeTab === 'first' ? 'bg-[#1F1F1F] text-white' : 'bg-gray-200 text-black'}`}
            >
              First Bulk
            </button>
            <button
              onClick={() => setActiveTab('second')}
              className={`py-2 px-4 text-xl font-semibold font-inter rounded-md shadow-md ${activeTab === 'second' ? 'bg-[#1F1F1F] text-white' : 'bg-gray-200 text-black'}`}
            >
              Second Bulk
            </button>
            <button
              onClick={() => setActiveTab('third')}
              className={`py-2 px-4 text-xl font-semibold font-inter rounded-md shadow-md ${activeTab === 'third' ? 'bg-[#1F1F1F] text-white' : 'bg-gray-200 text-black'}`}
            >
              Third Bulk
            </button>
            <button
              onClick={() => setActiveTab('fourth')}
              className={`py-2 px-4 text-xl font-semibold font-inter rounded-md shadow-md ${activeTab === 'fourth' ? 'bg-[#1F1F1F] text-white' : 'bg-gray-200 text-black'}`}
            >
              Fourth Bulk
            </button>
            <button
              onClick={() => setActiveTab('fifth')}
              className={`py-2 px-4 text-xl font-semibold font-inter rounded-md shadow-md ${activeTab === 'fifth' ? 'bg-[#1F1F1F] text-white' : 'bg-gray-200 text-black'}`}
            >
              Fifth Bulk
            </button>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Show images depending on active tab */}
            {activeTab === 'first' && firstBulk.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group relative">
                <Image
                  src={src}
                  alt={src.alt || `Image ${index + 1}`}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                {/* Overlay content (View Button) */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold mb-2">ROCKPORT – THE DAVISVILLE</p>
                  <p className="text-white text-sm mb-4">In City, Exteriors, Interiors</p>
                  <button
                    onClick={() => handleViewClick(src)}
                    className="bg-[#1F2023] text-white px-4 py-2 rounded-md"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}

            {activeTab === 'second' && secondBulk.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group relative">
                <Image
                  src={src}
                  alt={src.alt || `Image ${index + 1}`}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold mb-2">ROCKPORT – THE DAVISVILLE</p>
                  <p className="text-white text-sm mb-4">In City, Exteriors, Interiors</p>
                  <button
                    onClick={() => handleViewClick(src)}
                    className="bg-[#1F2023] text-white px-4 py-2 rounded-md"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}


            {activeTab === 'third' && thirdBulk.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group relative">
                <Image
                  src={src}
                  alt={src.alt || `Image ${index + 1}`}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold mb-2">ROCKPORT – THE DAVISVILLE</p>
                  <p className="text-white text-sm mb-4">In City, Exteriors, Interiors</p>
                  <button
                    onClick={() => handleViewClick(src)}
                    className="bg-[#1F2023] text-white px-4 py-2 rounded-md"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}



            {activeTab === 'fourth' && fourthBulk.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group relative">
                <Image
                  src={src}
                  alt={src.alt || `Image ${index + 1}`}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold mb-2">ROCKPORT – THE DAVISVILLE</p>
                  <p className="text-white text-sm mb-4">In City, Exteriors, Interiors</p>
                  <button
                    onClick={() => handleViewClick(src)}
                    className="bg-[#1F2023] text-white px-4 py-2 rounded-md"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}




            {activeTab === 'fifth' && fifthBulk.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg group relative">
                <Image
                  src={src}
                  alt={src.alt || `Image ${index + 1}`}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-md font-bold mb-2">ROCKPORT – THE DAVISVILLE</p>
                  <p className="text-white text-sm mb-4">In City, Exteriors, Interiors</p>
                  <button
                    onClick={() => handleViewClick(src)}
                    className="bg-[#1F2023] text-white px-4 py-2 rounded-md"
                  >
                    View
                  </button>
                </div>
              </div>
            ))}
            {/* Additional bulk mappings */}
          </div>

          {/* Fullscreen View Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
              <Image src={selectedImage} alt="Fullscreen" className="max-w-full max-h-full object-cover object-center" />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white text-3xl font-bold"
              >
                &times;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
