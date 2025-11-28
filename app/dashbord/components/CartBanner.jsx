'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import img1 from '@/public/Banner/image1.png';
import img2 from '@/public/Banner/image2.png';
import img3 from '@/public/Banner/image3.png';
import img4 from '@/public/Banner/image4.png';
import { MoveLeft, MoveRight } from 'lucide-react';

const CartBanner = () => {
  const categories = [
    { img: img1, name: "Trending" },
    { img: img2, name: "Fashion" },
    { img: img3, name: "Cosmetics" },
    { img: img4, name: "Gadget" },
    { img: img1, name: "Trending" },
    { img: img2, name: "Fashion" },
    { img: img3, name: "Cosmetics" },
    { img: img4, name: "Gadget" },
    { img: img2, name: "Fashion" },
    { img: img3, name: "Cosmeticss" },
    { img: img4, name: "Gadget" },
    { img: img2, name: "aa" },
    { img: img3, name: "a" },
  ];

  const [visibleCount, setVisibleCount] = useState(2);
  const [index, setIndex] = useState(0);

  const totalItems = categories.length;

  // Detect screen size
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(5); // Desktop
      } else {
        setVisibleCount(2); // Mobile
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);

    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) =>
        prev + 1 < totalItems - visibleCount + 1 ? prev + 1 : 0
      );
    }, 1500);
    return () => clearInterval(timer);
  }, [visibleCount]);

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? totalItems - visibleCount : prev - 1
    );
  };

  const nextSlide = () => {
    setIndex((prev) =>
      prev + 1 < totalItems - visibleCount + 1 ? prev + 1 : 0
    );
  };

  const itemWidth = 100 / visibleCount; // % width

  return (
    <div className="mt-3 px-2 relative">
        <div className="text-center">
            <h2 className="font-bold mb-3 border-b-4 border-orange-600/80 inline-block text-3xl pb-2">
                Categories
            </h2>
        </div>



      <div className="relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 bg-orange-600/80 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition ml-1"
        >
          <MoveLeft strokeWidth={2.5} size={30} />
        </button>

        {/* Viewport */}
        <div className="overflow-hidden w-full px-12">
          <div
            className="flex transition-all duration-500"
            style={{
              transform: `translateX(-${index * itemWidth}%)`
            }}
          >
            {categories.map((item, idx) => (
              <div
                key={idx}
                className="px-2 shrink-0"
                style={{ width: `${itemWidth}%` }}
              >
                <div className="flex flex-col items-center bg-orange-600 text-white rounded-xl p-2 shadow-md cursor-pointer hover:scale-105 transition">
                  <div className="h-[110px] w-full relative rounded-xl overflow-hidden">
                    <Image src={item.img} alt={item.name} fill className="object-cover" />
                  </div>
                  <p className="text-sm font-medium mt-1">{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 bg-orange-600/80 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 hover:scale-110 transition mr-1"
        >
          <MoveRight strokeWidth={2.5} size={30} />
        </button>
      </div>
    </div>
  );
};

export default CartBanner;
