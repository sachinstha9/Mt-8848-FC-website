"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeading";
import Form from "./components/Form";
import Footer from "./components/Footer";
import TeamMembersSection from "./components/TeamMember";
import MomentsSection from "./components/Moments";
import SponsorSection from "./components/Sponsor";
import teamMembers from "./data/teamMembers.json"; // Import the JSON file

// Generate image names (1 to 9)
const imgs: string[] = Array.from(
  { length: 9 },
  (_, index) => `${index + 1}.png`
);

export default function Home() {
  const [imagesToDisplay, setImagesToDisplay] = useState<string[]>([]);

  // Function to determine the number of images to display based on screen size
  const updateImagesToDisplay = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      setImagesToDisplay(imgs.slice(0, 6)); // Mobile: 6 images
    } else if (screenWidth >= 640 && screenWidth < 1024) {
      setImagesToDisplay(imgs.slice(0, 8)); // Tablet: 8 images
    } else {
      setImagesToDisplay(imgs.slice(0, 9)); // Desktop: 9 images
    }
  };

  // Update images on window resize and initial load
  useEffect(() => {
    updateImagesToDisplay();
    window.addEventListener("resize", updateImagesToDisplay);
    return () => window.removeEventListener("resize", updateImagesToDisplay);
  }, []);

  return (
    <>
      <Header />
      <Hero />

      <main className="flex flex-col items-center mt-20 gap-y-8 md:gap-y-18">
        {/* About Us Section */}
        <AboutUsSection />

        {/* Moments Section */}
        <MomentsSection imagesToDisplay={imagesToDisplay} />

        {/* Team Members Section */}
        <TeamMembersSection teamMembers={teamMembers} />

        {/* Sponsor Section */}
        <SponsorSection />

        <Form />
        <Footer />
      </main>
    </>
  );
}

// About Us Section Component
const AboutUsSection = () => (
  <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
      <SectionHeader text="ABOUT US" />
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-24 xl:gap-32">
        <div className="flex-1 w-full md:w-auto">
          <p className="text-base sm:text-lg mb-6 md:mb-8 robotoSlab text-[var(--text-color)] text-center md:text-left">
            Mt. 8848 FC is a football club created to bring together Nepalese
            boys in New Zealand, building brotherhood and achieving greatness as
            a team. We welcome everyone to join us, whether you’re a skilled
            player or just starting out. Through football, we aim to unite,
            support each other, and make a positive impact in our community.
            Together, we play, grow, and succeed!
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <Link
              className="fjallaOne text-white text-lg sm:text-xl bg-[var(--blue-color)] px-6 py-2 inline-block text-center"
              href="#"
            >
              Know More
            </Link>
          </div>
        </div>
        <div className="flex-1 w-full aspect-w-16 aspect-video relative">
          <Image
            src="/image1.png"
            alt="Hero image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </section>
);
