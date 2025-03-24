import Image from "next/image";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeading";
import TeamMembersSection from "../components/TeamMember";
import teamMembers from "../data/teamMembers.json";
import SponsorSection from "../components/Sponsor";
import Form from "../components/Form";
import Footer from "../components/Footer";
import BreadcrumbSection from "../components/Breadcrumb";

export default function AboutUs() {
  return (
    <>
      <Header />
      <BreadcrumbSection title="ABOUT US" backgroundImage="/image1.png" />

      <main className="flex flex-col items-center mt-20 gap-y-8 md:gap-y-18">
        {/* Our Story Section */}
        <StorySection />

        {/* About Us Section */}
        <AboutSection />

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

// Our Story Section Component
const StorySection = () => (
  <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
      <SectionHeader text="OUR STORY" />

      <div className="w-full max-w-2xl aspect-w-16 aspect-video relative">
        <Image
          src="/image1.png"
          alt="Our story"
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-6xl">
        <p className="text-base sm:text-lg mb-6 md:mb-8 robotoSlab text-[var(--text-color)] text-center flex flex-col gap-5">
          <span>
            Mt. 8848 FC began with a simple dream: to create a home away from
            home for Nepalese boys in New Zealand. A group of friends, missing
            the camaraderie and love for football from back home, decided to
            start a club where everyone could feel welcome—whether they were
            experienced players or just starting out. Named after Mount
            Everest's height (8,848 meters), our club symbolizes resilience,
            unity, and the courage to dream big. In the early days, it was just
            a few of us playing in local parks with a ball and a lot of
            enthusiasm. We didn't have much, but we had each other, and that was
            enough. As more people joined, our small group grew into a
            close-knit community. Football became more than just a game—it
            became a way to connect, support one another, and build something
            meaningful.
          </span>
          <span>
            Today, Mt. 8848 FC is a family where everyone belongs. It's a place
            where we grow together, both on and off the field, and strive to
            make a positive impact in our community. Our journey is still
            unfolding, and we're excited to climb higher, together.
          </span>
        </p>
      </div>
    </div>
  </section>
);

// About Us Section Component
const AboutSection = () => (
  <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
      <SectionHeader text="ABOUT US" />

      <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-8 md:gap-12 xl:gap-16">
        <div className="w-full md:w-1/2">
          <p className="text-base sm:text-lg mb-6 md:mb-8 robotoSlab text-[var(--text-color)] text-center md:text-left flex flex-col gap-5 md:gap-8">
            <span>
              At Mt. 8848 FC, our mission is to unite Nepalese boys in New
              Zealand through the power of football. We create a welcoming and
              inclusive space where everyone, regardless of skill level, can
              come together to build brotherhood, grow personally, and make a
              positive impact in the community. Through the game, we inspire
              resilience, teamwork, and a sense of belonging, helping our
              members thrive not only on the field but in all aspects of life.
              Together, we aim to climb new heights, celebrating our shared
              passion and supporting one another every step of the way.
            </span>

            <span>
              We are built on unity, bringing people together as a family, bound
              by a love for the game and a shared vision. Inclusivity ensures
              that everyone feels welcome and valued, creating a space where
              diversity is celebrated. We value community, supporting each other
              through thick and thin, and giving back to make a meaningful
              difference. Finally, we believe in growth, using football as a
              tool to develop teamwork, discipline, and leadership skills that
              extend far beyond the pitch. These values are the heart of Mt.
              8848 FC, driving us to play, grow, and achieve greatness together.
            </span>
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <div
            className="relative w-full"
            style={{ aspectRatio: "9/16", maxHeight: "500px" }}
          >
            <Image
              src="/image14.png"
              alt="About Us"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
