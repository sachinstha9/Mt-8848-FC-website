import React from "react";

interface SectionHeadingProps {
  text: string;
}

const SectionHeader: React.FC<SectionHeadingProps> = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Text */}
      <p className="fjallaOne text-xl sm:text-2xl text-[var(--text-color)]">
        {text}
      </p>

      {/* Lines */}
      <div className="flex w-44 h-1">
        <span className="flex-1 bg-[var(--blue-color)]"></span>
        <span className="flex-1 bg-[var(--red-color)]"></span>
      </div>
    </div>
  );
};

export default SectionHeader;
