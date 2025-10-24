import React from "react";
import type { TeamMember } from "../data";
import { useLanguage } from "../contexts/LanguageContext";
import { getData } from "../data";

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 hover:border-pink-500 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300 transform hover:-translate-y-1 relative z-50">
      <p className="text-gray-400 text-sm">{member.role}</p>
      <div className="flex flex-col md:flex-row md:items-center md:gap-3 mt-1">
        <h4 className="text-lg md:text-xl font-bold text-white">
          {member.name}
        </h4>
        <p className="text-cyan-400 text-sm md:text-base md:mt-0 font-medium">
          {member.nameEn}
        </p>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <>
      {/* Mobile: Team Section - Single Page Layout */}
      <section className="h-screen flex flex-col justify-center py-12 container mx-auto px-6 snap-start md:hidden">
        <div className="flex flex-col gap-4 max-h-[85vh]">
          {/* Title */}
          <div className="text-center flex-shrink-0">
            <h2 className="text-2xl sm:text-3xl font-bold font-display">
              {data.teamIntro.title}
            </h2>
          </div>

          {/* Team Description - Auto-sized based on content */}
          <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 text-sm text-gray-300 leading-relaxed flex-shrink-0 relative z-50">
            {data.teamIntro.description}
          </div>

          {/* Team Members - Takes remaining space */}
          <div className="flex-1 flex flex-col overflow-hidden min-h-0">
            <h3 className="text-lg font-bold font-display mb-3 text-center flex-shrink-0">
              {data.teamIntro.membersTitle}
            </h3>
            <div className="flex-1 overflow-y-auto">
              <div className="grid grid-cols-2 gap-3 h-full">
                {data.teamIntro.members.map((member, index) => (
                  <TeamMemberCard key={index} member={member} />
                ))}
              </div>
            </div>

            {/* Contact Email */}
            <div className="mt-4 pt-4 border-t border-gray-700 flex-shrink-0">
              <div className="text-center">
                <p className="text-lg text-gray-400 mb-2">Contact Us</p>
                <a
                  href={`mailto:${data.teamIntro.contact}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigator.clipboard.writeText(data.teamIntro.contact);
                    window.location.href = `mailto:${data.teamIntro.contact}`;
                  }}
                  className="text-cyan-400 hover:text-cyan-200 transition-colors duration-300 text-lg font-medium cursor-pointer"
                >
                  {data.teamIntro.contact}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: Horizontal Split Layout */}
      <section
        id="team"
        className="hidden md:flex min-h-screen flex-col justify-center py-16 md:py-20 lg:py-32 container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 snap-start"
      >
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display">
            {data.teamIntro.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left - Team Description */}
          <div className="flex flex-col justify-center">
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-gray-700 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed relative z-50">
              {data.teamIntro.description}
            </div>
          </div>

          {/* Right - Team Members */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-display mb-4 md:mb-6 text-center">
              {data.teamIntro.membersTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6 mb-6">
              {data.teamIntro.members.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>

            {/* Contact Email */}
            <div className="text-center">
              <p className="text-lg text-gray-400 mb-2">Contact Us</p>
              <a
                href={`mailto:${data.teamIntro.contact}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigator.clipboard.writeText(data.teamIntro.contact);
                  window.location.href = `mailto:${data.teamIntro.contact}`;
                }}
                className="text-cyan-400 hover:text-cyan-200 transition-colors duration-300 text-lg font-medium cursor-pointer"
              >
                {data.teamIntro.contact}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamSection;
