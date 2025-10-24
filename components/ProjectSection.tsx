import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getData } from "../data";

const ProjectSection: React.FC = () => {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <>
      {/* Mobile: Project Section with Fixed Title */}
      <section className="h-screen flex flex-col py-16 container mx-auto px-6 snap-start md:hidden">
        {/* Fixed Title */}
        <div className="text-center mb-6 flex-shrink-0">
          <h2 className="text-2xl sm:text-3xl font-bold font-display mb-3">
            {data.projectIntro.title.split("\n").map((line, index, array) => (
              <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-base text-cyan-400 font-medium">
            {data.projectIntro.catchyPhrase
              .split("\n")
              .map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
          </p>
        </div>

        {/* Video Section - Moved up */}
        <div className="mb-6 flex-shrink-0 relative z-50">
          <div className="w-full h-64 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-lg mb-4">동영상을 YouTube에 업로드하고</p>
              <p className="text-white text-sm">아래 주석을 해제하여 임베드하세요</p>
            </div>
          </div>
          {/* 
          YouTube 임베드 예시 (동영상 업로드 후 사용):
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg"
          ></iframe>
          */}
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto snap-y snap-mandatory">
          {/* Description Box */}
          <div className="min-h-full snap-start flex items-center pb-8">
            <div className="w-full bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 space-y-2 text-base text-gray-300 leading-relaxed relative z-50">
              {data.projectIntro.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Experience Info + QR Section */}
          <div className="min-h-full snap-start flex items-center">
            <div className="w-full space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 relative z-50">
                <h3 className="font-bold text-xl mb-4 text-white">
                  {data.projectIntro.experienceInfo.title}
                </h3>
                <ul className="space-y-2 text-gray-300">
                  {data.projectIntro.experienceInfo.details.map(
                    (detail, index) => (
                      <li key={index}>- {detail}</li>
                    )
                  )}
                </ul>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 relative z-50">
                <h3 className="font-bold text-lg mb-3 text-white">
                  {data.projectIntro.qrSection.title}
                </h3>
                <p className="text-cyan-400">
                  {data.projectIntro.qrSection.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop: Original Layout */}
      <section
        id="project"
        className="hidden md:flex min-h-screen flex-col justify-center py-12 md:py-16 lg:py-20 container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 snap-start"
      >
        <div className="max-w-4xl mx-auto text-center mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display mb-3 md:mb-4">
            {data.projectIntro.title.split("\n").map((line, index, array) => (
              <React.Fragment key={index}>
                {line}
                {index < array.length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-cyan-400 font-medium">
            {data.projectIntro.catchyPhrase
              .split("\n")
              .map((line, index, array) => (
                <React.Fragment key={index}>
                  {line}
                  {index < array.length - 1 && <span> </span>}
                </React.Fragment>
              ))}
          </p>
        </div>

        {/* Video Section - Moved up */}
        <div className="max-w-4xl mx-auto mb-6 md:mb-8 lg:mb-10 relative z-50">
          <div className="w-full h-64 bg-gray-800 rounded-lg shadow-lg flex items-center justify-center">
            <div className="text-center">
              <p className="text-white text-lg mb-4">동영상을 YouTube에 업로드하고</p>
              <p className="text-white text-sm">아래 주석을 해제하여 임베드하세요</p>
            </div>
          </div>
          {/* 
          YouTube 임베드 예시 (동영상 업로드 후 사용):
          <iframe 
            width="100%" 
            height="400" 
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className="rounded-lg"
          ></iframe>
          */}
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          <div className="lg:col-span-3 bg-gray-900/50 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-lg border border-gray-700 space-y-2 text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed flex flex-col justify-between relative z-50">
            {data.projectIntro.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-2 flex flex-col gap-4 md:gap-6 lg:gap-8">
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-lg border border-gray-700 flex-1 flex flex-col justify-center relative z-50">
              <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4 text-white">
                {data.projectIntro.experienceInfo.title}
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-gray-300">
                {data.projectIntro.experienceInfo.details.map(
                  (detail, index) => (
                    <li key={index}>- {detail}</li>
                  )
                )}
              </ul>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm p-4 md:p-5 lg:p-6 rounded-lg border border-gray-700 flex-1 flex flex-col justify-center relative z-50">
              <h3 className="font-bold text-lg md:text-xl mb-2 md:mb-3 text-white">
                {data.projectIntro.qrSection.title}
              </h3>
              <p className="text-sm md:text-base text-cyan-400">
                {data.projectIntro.qrSection.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectSection;
