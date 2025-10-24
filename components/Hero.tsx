import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getData } from "../data";
import GradientSphere from "./GradientSphere";

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const data = getData(language);

  return (
    <section
      id="home"
      className="min-h-screen h-screen flex flex-col container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 pt-20 md:pt-24 pb-12 md:pb-16 snap-start relative bg-black"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <GradientSphere
          size="w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw]"
          position="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
          colors="from-pink-600/70 via-purple-600/70 to-transparent"
          animationDelay="0s"
        />
        <GradientSphere
          size="w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw]"
          position="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2"
          colors="from-cyan-500/70 via-blue-600/70 to-transparent"
          animationDelay="-4s"
        />
        <GradientSphere
          size="w-[40vw] h-[40vw] md:w-[25vw] md:h-[25vw]"
          position="top-1/2 right-1/2"
          colors="from-red-500/60 to-transparent"
          animationDelay="-8s"
        />
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-widest leading-none animate-glow">
            RE:
            <br className="sm:hidden" />
            PERSONA
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-8 font-semibold text-gray-200">
            {data.project.subTitle}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
