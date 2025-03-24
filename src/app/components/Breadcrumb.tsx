import React from "react";
import Link from "next/link";

// Define the props interface
interface BreadcrumbSectionProps {
  title: string;
  backgroundImage: string;
}

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  title,
  backgroundImage,
}) => {
  return (
    <section
      className="flex flex-col items-center w-full px-4 py-8 sm:py-10 md:py-12 lg:py-14 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Content */}
      <section className="w-full max-w-7xl gap-8 md:gap-18 relative z-10">
        <p className="fjallaOne text-white tracking-wide text-lg sm:text-xl md:text-2xl">
          <Link href="/">HOME</Link> / {title}
        </p>
      </section>
    </section>
  );
};

export default BreadcrumbSection;
