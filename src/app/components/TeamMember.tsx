import React from "react";
import TeamMemberCard from "./TeamMemberCard";
import SectionHeader from "./SectionHeading";

// Define the TeamMember type
export type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

// Team Members Section Component
const TeamMembersSection = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  // Slice the teamMembers array to only take the first 9 members
  const displayedMembers = teamMembers.slice(0, 9);

  return (
    <section className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center w-full max-w-7xl gap-8 md:gap-18">
        <SectionHeader text="TEAM MEMBERS" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-6">
          {displayedMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembersSection;
