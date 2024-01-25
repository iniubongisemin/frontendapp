// "use client"
// import React, { useState } from 'react';
import Navbar from "./Navbar";
// import { BsSunFill, BsMoon } from 'react-icons/bs';
// import LightDarkToggle from "./Light_Dark";

export default function Header() {
  // const [BsSunFill, BsMoon] = useState(true);

  // // Function to toggle the light and dark modes icon visibility
  // const toggleLight_Dark = () => {
  //   setMobileLight_Dark(!BsSunFill);
  // }

  return (
    // Header container with styling
    <header className="fixed z-10 inset-x-0">
      {/* Navigation and announcement section */}
      <div className="flex items-center justify-center gap-x-3 bg-slate-950 h-[80px] text-white"> 
        {/* Light/Dark mode toggle icon */}
        <div>
          {/* <BsSunFill /> <BsMoon /> */}
          {/* <LightDarkToggle/> */}
        </div>

        {/* Announcement button and text */}
        <button className="bg-[#3498db] rounded-2xl py-1 px-4">Announcement</button>
        <p>How we&apos;re making a difference</p>
      </div>

      {/* Navbar component */}
      <Navbar />
    </header>
  );
}