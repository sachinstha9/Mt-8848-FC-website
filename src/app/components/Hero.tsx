import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen relative">
      <div className="w-full h-[60vh] md:h-auto md:aspect-video relative">
        {/* Background Image */}
        <Image
          src="/image1.png"
          alt="Hero image"
          fill
          className="object-cover"
          priority
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

        {/* Content Container - switches between centered and left-aligned */}
        <div className="absolute inset-0 z-10 max-w-7xl mx-auto flex flex-col justify-center px-4 sm:px-6 lg:px-8">
          {/* Mountain Logo - Centered on mobile, left-aligned on desktop */}
          <div
            className={`relative w-full h-12 xs:h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 mb-2 xs:mb-3 sm:mb-4 md:mb-6 
            mx-auto flex justify-center md:justify-start md:mx-0`}
          >
            <div className="relative inline-block h-full w-auto">
              <Image
                src="/hero_section_mountain.png"
                alt="Mountain Logo"
                width={400} // Adjust based on your image's aspect ratio
                height={100} // Adjust based on your image's aspect ratio
                className="object-contain h-full w-auto md:w-full"
                priority
                sizes="(max-width: 768px) 50vw, 30vw"
              />
            </div>
          </div>

          {/* Text - Centered on mobile, left-aligned on desktop */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white fjallaOne tracking-wider leading-tight">
              Mt.8848 TO THE <br className="hidden sm:inline" />
              <span className="sm:ml-2">SUMMIT</span>
            </h1>

            {/* Optional Subtitle */}
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white mt-2 xs:mt-3 sm:mt-4 max-w-md mx-auto md:mx-0 robotoSlab opacity-90">
              Uniting Nepalese youth through football in New Zealand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
