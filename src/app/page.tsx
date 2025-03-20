"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeading";
import Form from "./components/Form";
import Footer from "./components/Footer";

export default function Home() {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Forward",
      image: "/team_members/1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Midfielder",
      image: "/team_members/1.png",
    },
    {
      id: 3,
      name: "Alice Johnson",
      position: "Defender",
      image: "/team_members/1.png",
    },
    {
      id: 4,
      name: "Bob Brown",
      position: "Goalkeeper",
      image: "/team_members/1.png",
    },
    {
      id: 5,
      name: "Charlie Davis",
      position: "Captain",
      image: "/team_members/1.png",
    },
  ];

  const imgs = Array(9)
    .fill(0)
    .map((_, index) => index + 1);

  const [imagesToDisplay, setImagesToDisplay] = useState<string[]>([]);

  // Function to determine the number of images to display based on screen size
  const updateImagesToDisplay = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 640) {
      // Mobile: grid-cols-1, limit to 6 images
      setImagesToDisplay(imgs.slice(0, 6));
    } else if (screenWidth >= 640 && screenWidth < 1024) {
      // Tablet: grid-cols-2, limit to 8 images
      setImagesToDisplay(imgs.slice(0, 8));
    } else {
      // Desktop: grid-cols-3, show all 9 images
      setImagesToDisplay(imgs.slice(0, 9));
    }
  };

  // useEffect to update the images on window resize and initial load
  useEffect(() => {
    // Initial update
    updateImagesToDisplay();

    // Add event listener for window resize
    window.addEventListener("resize", updateImagesToDisplay);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateImagesToDisplay);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <Header />

      <Hero />

      <section className="flex flex-col items-center mt-20 gap-y-8 md:gap-y-18">
        {/* About us */}
        <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          {/* inner element */}
          <section className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
            {/* heading */}
            <SectionHeader text="ABOUT US" />

            {/* body */}
            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-24 xl:gap-32">
              {/* Text Section */}
              <div className="flex-1 w-full md:w-auto">
                <p className="text-base sm:text-lg mb-6 md:mb-8 robotoSlab text-[var(--text-color)] text-center md:text-left">
                  Mt. 8848 FC is a football club created to bring together
                  Nepalese boys in New Zealand, building brotherhood and
                  achieving greatness as a team. We welcome everyone to join us,
                  whether you’re a skilled player or just starting out. Through
                  football, we aim to unite, support each other, and make a
                  positive impact in our community. Together, we play, grow, and
                  succeed!
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

              {/* Image Section */}
              <div className="flex-1 w-full aspect-w-16 aspect-video relative">
                <Image
                  src="/image1.png" // Ensure this path is correct
                  alt="Hero image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>
        </section>

        {/* Moments */}
        <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 bg-[var(--secondary-bg)] py-8 md:py-18">
          <section className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
            {/* Section Header */}
            <SectionHeader text="SOME MOMENTS" />

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-6">
              {/* Loop through the images */}
              {imagesToDisplay.map((imgName, index) => (
                <div
                  key={index}
                  className="w-full aspect-w-16 aspect-video relative"
                >
                  {/* Aspect ratio container */}
                  <Image
                    src={"/moments/" + imgName + ".png"}
                    alt={`Moment ${index + 1}`}
                    fill // Fill the parent container
                    className="object-cover" // Ensure the image fits without stretching
                  />
                </div>
              ))}
            </div>
          </section>
        </section>

        {/* teams member */}
        <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
            {/* Heading */}
            <SectionHeader text="TEAM MEMBERS" />

            {/* Team Members Grid */}
            <div className="flex flex-col w-full items-center justify-center gap-8">
              {/* First Row (3 Members) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <div
                    key={member.id}
                    className={`flex flex-col items-center ${
                      index === 2
                        ? "sm:col-span-2 lg:col-span-1 sm:justify-self-center"
                        : ""
                    }`}
                  >
                    {/* Image Container with Portrait Aspect Ratio */}
                    <div className="w-48 h-64 sm:w-56 sm:h-80 relative">
                      {" "}
                      {/* Portrait size */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    {/* Name */}
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold robotoSlab text-[var(--text-color)]">
                      {member.name}
                    </h3>
                    {/* Position */}
                    <p className="text-sm sm:text-md robotoSlab text-[var(--text-color)]">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row (2 Members) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
                {teamMembers.slice(3, 5).map((member) => (
                  <div key={member.id} className="flex flex-col items-center">
                    {/* Image Container with Portrait Aspect Ratio */}
                    <div className="w-48 h-64 sm:w-56 sm:h-80 relative">
                      {" "}
                      {/* Portrait size */}
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    {/* Name */}
                    <h3 className="mt-4 text-lg sm:text-xl font-semibold robotoSlab text-[var(--text-color)]">
                      {member.name}
                    </h3>
                    {/* Position */}
                    <p className="text-sm sm:text-md robotoSlab text-[var(--text-color)]">
                      {member.position}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>

        {/* sponsor */}
        <section className="w-full relative py-16 sm:py-20 lg:py-28 flex justify-center items-center ">
          {/* Background Image */}
          <div className="w-full h-full absolute">
            <Image
              src="/background.png" // Ensure this path is correct
              alt="Background"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
            <p className="fjallaOne text-xl sm:text-2xl text-white">
              WANT TO SUPPORT US?
            </p>

            <p className="mt-4 text-xs sm:text-sm lg:text-lg font-semibold robotoSlab text-white max-w-2xl">
              We’re seeking sponsors to support our mission and create
              meaningful impact. For partnership opportunities, contact us at{" "}
              <a href="mailto:mt8848fc@gmail.com" className="underline">
                mt8848fc@gmail.com
              </a>
              . Join us in making a difference!
            </p>
          </div>
        </section>

        <Form />
        <Footer />
      </section>
    </>
  );
}
