"use client"
import React, { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import { Heart, Search, ShoppingCart, X } from "lucide-react";
import Navbar from "./Navbar";

const Header = () => {

   const [mobileNavbar,setMobileNavbar] = useState(false);


  const li = "hover:font-bold text-2xl hover:bg-orange-700 pl-5 py-2 border-b ";
  return (
    <div className="sticky top-0 z-20">
      {/* TOP BAR */}
      <div className="flex justify-between bg-orange-600 py-8 pl-3 pr-8 items-center text-white font-bold relative" >
        {/* Mobile Menu Icon */}
        

        <div className="lg:hidden">
          {mobileNavbar ? <X size={30}  onClick={()=>setMobileNavbar(false)}/> : <VscThreeBars size={30}  onClick={()=>setMobileNavbar(true)}/>}
        </div>
        

        {/* Logo */}
        <div>
          <p className="text-2xl">AmarShop</p>
        </div>

        <div className="w-full mx-[200px] relative hidden lg:block">
          <input
            type="text"
            className="border-2 focus:border-3 bg-white w-full h-10 px-4 border-black focus:outline-none text-black font-medium text-base"
            placeholder="Search Product . . ."
        />
        <div className="bg-orange-600/40 hover:bg-orange-600/50 text-black px-4 absolute top-0 right-0 h-full flex items-center gap-x-2 ">
          <Search />
          <button >Search</button>
        </div>
        </div>

        {/* Icons */}
        <div className="flex gap-x-7">
          <Heart size={28} />
          <div className="relative">
            <ShoppingCart size={28} />

            <span className="absolute -top-4 -right-4 bg-white text-black text-sm font-bold rounded-full w-8 h-8 flex items-center justify-center">
              9
            </span>
          </div>


        </div>
        {
          mobileNavbar && 
          <div className="absolute top-[90px] bg-orange-600/95 z-10 left-0 w-[250px] font-semibold lg:hidden" >
            <ul className="flex flex-col gap-y-1 px-3">
              <li className={li}>Trending</li>
              <li className={li}>Top Sale</li>
              <li className={li}>Fashion</li>
              <li className={li}>Cosmetics</li>
              <li className={li}>Gadget</li>
              <li className={li}>Cosmetics</li>
              <li className={li}>Fashion</li>
              <li className={li}>Gadget</li>
            </ul>
          </div>
        }
      </div>

      {/* MOBILE SEARCH BAR */}
      <div className="flex gap-x-2 justify-between items-center mt-[1px] lg:hidden relative">
        <input
            type="text"
            className="border-2 focus:border-3 bg-white w-full h-10 px-4 border-black focus:outline-none text-black font-medium text-base"
            placeholder="Search Product . . ."
        />
        <div className="bg-orange-600 hover:bg-orange-600/50 text-white px-4 absolute top-0 right-0 h-full flex items-center gap-x-2 ">
          <Search />
          <button >Search</button>
        </div>
      </div>
      <Navbar/>

    </div>
  );
};

export default Header;
