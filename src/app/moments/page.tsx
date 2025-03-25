"use client";
import Image from "next/image";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeading";
import Footer from "../components/Footer";
import BreadcrumbSection from "../components/Breadcrumb";
import { useEffect, useState } from "react";
import momentsData from "../data/moments.json"; // Import the JSON file

interface EventData {
  title: string;
  date: string;
  description: string;
  images: string[];
}

const EventCard = ({ event }: { event: EventData }) => {
  const { title, date, description, images } = event;
  const [screenSize, setScreenSize] = useState<"lg" | "md" | "sm">("lg");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setScreenSize("lg"); // Large (3 cols)
      } else if (width >= 480) {
        setScreenSize("md"); // Medium (2 cols)
      } else {
        setScreenSize("sm"); // Small (1 col)
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGridCols = () => {
    switch (screenSize) {
      case "lg":
        return "grid-cols-3";
      case "md":
        return "grid-cols-2";
      case "sm":
        return "grid-cols-1";
      default:
        return "grid-cols-1";
    }
  };

  const getImageSize = () => {
    switch (screenSize) {
      case "lg":
        return "33vw";
      case "md":
        return "50vw";
      case "sm":
        return "100vw";
      default:
        return "100vw";
    }
  };

  return (
    <div className="w-full mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
      <div className="w-full flex flex-col gap-3 xs:gap-4 sm:gap-5 md:gap-6">
        <div className="text-[var(--text-color)] gap-2 xs:gap-3 flex flex-col">
          <div className="flex flex-col gap-1">
            <p className="fjallaOne text-lg xs:text-xl sm:text-2xl md:text-3xl">
              {title}
            </p>
            <p className="robotoSlab text-sm xs:text-base sm:text-lg md:text-xl text-gray-600">
              {date}
            </p>
          </div>
          <p className="robotoSlab text-sm xs:text-base sm:text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>

        {images.length > 0 && (
          <div className={`grid ${getGridCols()} gap-2 xs:gap-3 sm:gap-4`}>
            {images.map((img, idx) => (
              <div key={idx} className="relative aspect-video">
                <Image
                  src={`/${img}`}
                  alt={`Event image ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes={getImageSize()}
                  priority={idx < 6}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Moments() {
  return (
    <>
      <Header />
      <BreadcrumbSection title="MOMENTS" backgroundImage="/image1.png" />

      <main className="flex flex-col items-center mt-8 xs:mt-10 sm:mt-12 md:mt-14 lg:mt-16 xl:mt-20 gap-y-4 xs:gap-y-5 sm:gap-y-6 md:gap-y-8 lg:gap-y-10">
        <section className="flex flex-col items-center w-full px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
          <div className="flex flex-col items-center w-full max-w-7xl gap-6 xs:gap-7 sm:gap-8 md:gap-10 lg:gap-12">
            <SectionHeader text="SOME MOMENTS" />

            <div className="w-full px-1 xs:px-2 sm:px-3 md:px-4">
              {momentsData.map((event, index) => (
                <EventCard key={`event-${index}`} event={event} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
