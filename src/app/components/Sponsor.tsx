import Image from "next/image";

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

export default SponsorSection;
