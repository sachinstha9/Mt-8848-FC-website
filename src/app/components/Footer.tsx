import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="flex flex-col items-center justify-center w-full bg-gray-800 py-8 md:py-12 lg:py-18">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 sm:space-x-6 mb-4">
        <Link
          href="#"
          className="text-gray-800 flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-white hover:bg-gray-200 transition-colors"
        >
          <FaFacebook size={24} className="sm:w-7 sm:h-7" />
        </Link>
        <Link
          href="#"
          className="text-gray-800 flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-white hover:bg-gray-200 transition-colors"
        >
          <FaInstagram size={24} className="sm:w-7 sm:h-7" />
        </Link>
        <Link
          href="#"
          className="text-gray-800 flex justify-center items-center w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] rounded-full bg-white hover:bg-gray-200 transition-colors"
        >
          <FaPinterest size={24} className="sm:w-7 sm:h-7" />
        </Link>
      </div>

      {/* Contact Information */}
      <div className="robotoSlab text-gray-100 font-light flex flex-col items-center gap-4 mt-6 text-center">
        <p className="text-base sm:text-lg">
          We're based in{" "}
          <span className="underline">Auckland, New Zealand</span>.
        </p>

        <div className="flex flex-col sm:flex-row text-sm gap-4 sm:gap-8 lg:gap-32 justify-center">
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>mt8848fc@gmail.com</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaPhone />
            <span>123456789</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-gray-400 text-sm mt-4">© Copyright. Made by Sachin</p>
    </section>
  );
}
