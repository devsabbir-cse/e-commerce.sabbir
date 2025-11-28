'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Banner = () => {
  const desktopImages = [
    '/Banner/image1.png',
    '/Banner/image2.png',
    '/Banner/image3.png',
    '/Banner/image4.png',
  ];

  const mobileImages = [
    '/PhoneBanner/image1.png',
    '/PhoneBanner/image2.png',
    '/PhoneBanner/image3.png',
    '/PhoneBanner/image4.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? desktopImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto overflow-hidden py-2">
      {/* Desktop Banner */}
      <div className="relative hidden lg:block h-[300px] w-full">
        <Image
          src={desktopImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition duration-700 ease-in-out"
          priority
        />
      </div>

      {/* Mobile Banner */}
      <div className="relative lg:hidden h-[250px] w-full">
        <Image
          src={mobileImages[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          className="object-cover transition duration-700 ease-in-out"
          priority
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full shadow hover:bg-opacity-100 transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full shadow hover:bg-opacity-100 transition"
      >
        <ChevronRight className="w-6 h-6 text-gray-700" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
        {desktopImages.map((_, index) => (
          <span
            key={index}
            className={`h-[7px] w-8 rounded-full border transition-all duration-300 ${
              index === currentIndex ? 'bg-orange-600' : 'bg-orange-600/40'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
