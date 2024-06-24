"use client"

import { useState, useEffect } from "react";
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
    <nav className="navbar bg-purple-100 box px-5 top-0 sticky z-50 transition-opacity border-b-2 border-secondary customWidth100"
      style={{ opacity: navbarOpacity }}
    >
      <div className="lg:flex-none">
        <Link href='/'>
          <Image 
          className=" not-prose" 
          src='/quikgist2.0.svg' 
          width={125} 
          height={125} 
          alt='logo' />
        </Link>
      </div>
      <div className="flex justify-end flex-1">
        <div className="flex items-stretch">
          {/**Normal navbar for larger screens */}
          <div className='hidden md:block text-secondary '>
            <Link href='/' className="btn btn-ghost rounded-btn hover:scale-105 transition-transform">Home</Link>
            <Link href='/aboutUs' className="btn btn-ghost rounded-btn hover:scale-105 transition-transform">About</Link>
          </div>
          {/**Modal menu for smaller screens */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div className="block md:hidden">
            <button className="bg-transparent shadow-none p-4" onClick={() => document.getElementById('my_modal_2').showModal()}>
              {/* hamburger icon */}
              <svg className=" fill-secondary" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            </button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <ul className="menu  w-56 rounded-box">
                  <li><Link href='/' className="text-primary">Home</Link></li>
                  <li><Link href='/about' className="text-primary">About</Link></li>
                  <li><Link href='/contact' className="text-primary">Contact Us</Link></li>
                </ul>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>

        </div>
        <ThemeController />
      </div>
    </nav>
  )
}
