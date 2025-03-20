import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-screen">
      <div className="w-full aspect-video relative">
        {/* 16:9 aspect ratio */}
        <Image
          src="/image1.png"
          alt="Hero image"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
