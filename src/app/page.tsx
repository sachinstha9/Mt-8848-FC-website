"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SectionHeader from "./components/SectionHeading";
import Form from "./components/Form";
import Footer from "./components/Footer";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Hari Kumar Rana Magar",
    position: "President",
    image: "/team_members/1.png",
  },
  {
    id: 2,
    name: "Ramesh Dangol",
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

// Moments Section Component
const MomentsSection = ({ imagesToDisplay }: { imagesToDisplay: string[] }) => (
  <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 bg-[var(--secondary-bg)] py-8 md:py-18">
    <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
      <SectionHeader text="SOME MOMENTS" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 sm:gap-6">
        {imagesToDisplay.map((imgName, index) => (
          <div key={index} className="w-full aspect-w-16 aspect-video relative">
            <Image
              src={`/moments/${imgName}`}
              alt={`Moment ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

// Team Members Section Component
const TeamMembersSection = ({ teamMembers }: { teamMembers: TeamMember[] }) => (
  <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
      <SectionHeader text="TEAM MEMBERS" />
      <div className="flex flex-col w-full items-center justify-center gap-8">
        {/* First Row (3 Members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {teamMembers.slice(0, 3).map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              isCentered={index === 2}
            />
          ))}
        </div>
        {/* Second Row (2 Members) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
          {teamMembers.slice(3, 5).map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Team Member Card Component
const TeamMemberCard = ({
  member,
  isCentered = false,
}: {
  member: (typeof teamMembers)[0];
  isCentered?: boolean;
}) => (
  <div
    className={`flex flex-col items-center ${
      isCentered ? "sm:col-span-2 lg:col-span-1 sm:justify-self-center" : ""
    }`}
  >
    <div className="w-48 h-64 sm:w-56 sm:h-80 relative">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover"
      />
    </div>
    <h3 className="mt-4 text-lg sm:text-xl font-semibold robotoSlab text-[var(--text-color)]">
      {member.name}
    </h3>
    <p className="text-sm sm:text-md robotoSlab text-[var(--text-color)]">
      {member.position}
    </p>
  </div>
);

// Sponsor Section Component
const SponsorSection = () => (
  <section className="w-full relative py-16 sm:py-20 lg:py-28 flex justify-center items-center">
    <div className="w-full h-full absolute">
      <Image
        src="/background.png"
        alt="Background"
        fill
        className="object-cover"
      />
    </div>
    <div className="z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
      <p className="fjallaOne text-xl sm:text-2xl text-white">
        WANT TO SUPPORT US?
      </p>
      <p className="mt-4 text-xs sm:text-sm lg:text-lg font-semibold robotoSlab text-white max-w-2xl">
        We’re seeking sponsors to support our mission and create meaningful
        impact. For partnership opportunities, contact us at{" "}
        <a href="mailto:mt8848fc@gmail.com" className="underline">
          mt8848fc@gmail.com
        </a>
        . Join us in making a difference!
      </p>
    </div>
  </section>
);
