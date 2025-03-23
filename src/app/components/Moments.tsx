import Image from "next/image";
import SectionHeader from "./SectionHeading";

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

export default MomentsSection;
