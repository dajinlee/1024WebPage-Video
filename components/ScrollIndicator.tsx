import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const sections = [
  { id: 'home', title: 'RE:PERSONA' },
  { id: 'project', title: 'Project' },
  { id: 'team', title: 'Team' },
  { id: 'history', title: 'Exhibition' },
];

interface ScrollIndicatorProps {
    activeSection: string;
    containerRef: React.RefObject<HTMLDivElement>;
    isScrolling: boolean;
    isMobile: boolean;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ activeSection, containerRef, isScrolling, isMobile }) => {
  const [isHovering, setIsHovering] = useState(false);

  // On mobile, only show when scrolling
  const shouldShow = isMobile ? isScrolling : true;

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    container: containerRef,
    layoutEffect: containerRef?.current !== null,
  });

  // Map scroll progress to section positions
  // Section starts map to their dot positions: home(0%), project(33%), team(66%), exhibition(100%)
  const mappedProgress = useTransform(scrollYProgress,
    [0, 0.25, 0.5, 0.75],
    [0, 0.33, 0.66, 1.0]
  );

  const smoothProgress = useSpring(mappedProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  return (
    // Container fixed to the left side
    <aside
      className={`fixed left-6 md:left-12 top-0 z-50 h-screen w-auto flex flex-col items-start justify-center transition-opacity duration-700 ease-out ${
        shouldShow ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Vertical navigation container */}
      <div className="relative flex h-1/2 flex-col justify-between">
        {/* Background track for the scrollbar */}
        <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-800" />

        {/* The actual scroll progress bar with mapped progress */}
        <motion.div
          className="absolute left-0 top-0 h-full w-0.5 bg-cyan-400 origin-top"
          style={{
            scaleY: smoothProgress
          }}
        />

        {/* Navigation dots/links */}
        {sections.map(section => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center"
            aria-label={`Go to ${section.title} section`}
          >
            {/* The interactive dot */}
            <div
              className={`
                h-3 w-3 rounded-full border-2 border-black transition-all duration-300 -translate-x-[5px]
                ${activeSection === section.id
                  ? 'bg-pink-500 scale-125 ring-2 ring-pink-500'
                  : 'bg-gray-600 group-hover:bg-cyan-400 group-hover:scale-110'}
              `}
            />
            {/* The label that appears when scrolling or hovering */}
            <span
              className={`
                ml-6 whitespace-nowrap text-xs text-white uppercase transition-opacity duration-300
                ${isScrolling || isHovering ? 'opacity-100' : 'opacity-0'}
              `}
            >
              {section.title}
            </span>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default ScrollIndicator;
