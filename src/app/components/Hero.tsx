import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen">
      <div className="w-full h-[50vh] md:h-auto md:aspect-video relative">
        {/* Taller height on mobile, 16:9 aspect ratio on desktop */}
        <Image
          src="/image1.png"
          alt="Hero image"
          fill
          className="object-cover"
          priority // Add priority for faster loading of the hero image
        />
      </div>
    </section>
  );
}
