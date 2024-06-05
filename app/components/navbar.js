"use client"

import { useState,useEffect } from "react";
import Link from "next/link";
import ThemeController from "./themeController";
import Image from "next/image";


export default function Navbar() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setNavbarOpacity(0.5);
      } else {
        // Scrolling up
        setNavbarOpacity(1);
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  
  return (
    <nav className="navbar bg-base-300 box px-5 top-0 sticky z-50 transition-opacity customWidth100"
    style={{opacity:navbarOpacity}}
    >
      <div className="lg:flex-none">
        <Image className=" not-prose" src='/quikgist.svg' width={125} height={125} alt='logo' />
      </div>
      <div className="flex justify-end flex-1">
        <div className="flex items-stretch">
          {/**Normal navbar for larger screens */}
          <div className='hidden md:block'>
            <Link href='/' className="btn btn-ghost rounded-btn">Home</Link>
            <Link href='/about' className="btn btn-ghost rounded-btn">About</Link>
            <Link href='/contact' className="btn btn-ghost rounded-btn">Contact Us</Link>
          </div>
          {/**Dropdown menu for smaller screens */}
          <div className="dropdown dropdown-end block md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost rounded-btn">
              <label className="btn btn-circle swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" />

                {/* hamburger icon */}
                <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                {/* close icon */}
                <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

              </label>
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-[50] p-2 shadow bg-base-100 rounded-box w-52 mt-4">
              <li><Link href='/' className="btn btn-ghost rounded-btn">Home</Link></li>
              <li><Link href='/about' className="btn btn-ghost rounded-btn">About</Link></li>
              <li><Link href='/contact' className="btn btn-ghost rounded-btn">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <ThemeController />
      </div>
    </nav>
  )
}
