import Image from "next/image";

export type TeamMember = {
  id: number;
  name: string;
  position: string;
  image: string;
};

const TeamMemberCard = ({
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

export default TeamMemberCard;
