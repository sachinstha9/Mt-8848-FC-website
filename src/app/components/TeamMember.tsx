import React from "react";
import Image from "next/image";
import SectionHeader from "./SectionHeading";

// Define the TeamMember type
export type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

// Team Member Card Component
export const TeamMemberCard = ({
  member,
  isCentered = false,
}: {
  member: TeamMember;
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
