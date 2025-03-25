import Header from "../components/Header";
import SectionHeader from "../components/SectionHeading";
import Footer from "../components/Footer";
import BreadcrumbSection from "../components/Breadcrumb";
import teamMembers from "../data/teamMembers.json";
import TeamMemberCard from "../components/TeamMemberCard";

// Create a type that matches your existing TeamMemberCard's expected props
type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

export default function Team() {
  // Type assertion to match your JSON structure with TeamMemberCard's expectations
  const members: TeamMember[] = teamMembers as TeamMember[];

  // Filter team management (id 1-9)
  const teamManagement = members.filter((member) => member.id <= 9);
  const president = teamManagement.find(
    (member) => member.position === "President"
  );
  const otherManagement = teamManagement.filter(
    (member) => member.position !== "President"
  );

  // Filter players (id 10 and above)
  const players = members.filter((member) => member.id >= 10);

  return (
    <>
      <Header />
      <BreadcrumbSection title="TEAM MEMBERS" backgroundImage="/image1.png" />

      <main className="flex flex-col items-center mt-20 gap-y-8 md:gap-y-18">
        <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
          {/* Team Members Photo Section */}
          <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
            <SectionHeader text="TEAM MEMBERS" />

            <div className="flex flex-col justify-between items-center w-full gap-12 md:gap-24">
              {/* Team Management Section */}
              <div className="w-full flex items-center flex-col gap-8">
                <p className="robotoSlab text-[var(--text-color)] text-xl md:text-2xl">
                  TEAM MANAGEMENT
                </p>

                {/* President Card (Top Single) */}
                {president && (
                  <div className="w-full flex justify-center">
                    <TeamMemberCard member={president} isCentered={true} />
                  </div>
                )}

                {/* Other Management Members (Grid) */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {otherManagement.map((member) => (
                    <TeamMemberCard key={member.id} member={member} />
                  ))}
                </div>
              </div>

              {/* Players Section */}
              <div className="w-full flex items-center flex-col gap-8">
                <p className="robotoSlab text-[var(--text-color)] text-xl md:text-2xl">
                  PLAYERS
                </p>

                {/* Players Grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                  {players.map((player) => (
                    <TeamMemberCard key={player.id} member={player} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
