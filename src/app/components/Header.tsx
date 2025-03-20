"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="flex justify-center">
      <section className="flex flex-col justify-center items-center w-full">
        {/* Header Content */}
        <section className="flex justify-between items-center w-full max-w-7xl px-4 py-2 md:py-4 relative">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150} // Default size for desktop
              height={150}
              className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40" // Responsive sizes
            />
          </Link>
          {/* Hamburger Menu (Mobile) */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          {/* Navigation Links (Desktop) */}
          <ul className="hidden md:flex justify-between items-center gap-10">
            <li>
              <Link href="#" className="header-list">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="header-list">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="header-list">
                Teams & Achievements
              </Link>
            </li>
            <li>
              <Link href="#" className="header-list">
                Contact
              </Link>
            </li>
          </ul>
          {/* Mobile Menu (Dropdown) */}
          {isMenuOpen && (
            <section className="absolute top-full left-0 w-full bg-gray-100 md:hidden z-50">
              <ul className="flex flex-col items-center gap-4 py-4">
                <li>
                  <Link href="#" className="header-list">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="header-list">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="header-list">
                    Teams & Achievements
                  </Link>
                </li>
                <li>
                  <Link href="#" className="header-list">
                    Contact
                  </Link>
                </li>
              </ul>
            </section>
          )}
        </section>
      </section>
    </section>
  );
}
