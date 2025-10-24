import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectSection from "./components/ProjectSection";
import TeamSection from "./components/TeamSection";
import ExhibitionSection from "./components/ExhibitionSection";
import Footer from "./components/Footer";
import ScrollIndicator from "./components/ScrollIndicator";
import { SplashCursor } from "./components/ui/splash-cursor";
import { Analytics } from "@vercel/analytics/react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

const AppContent: React.FC = () => {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // GitHub Pages SPA 라우팅을 위한 리다이렉트 처리
  useEffect(() => {
    const redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect !== location.href) {
      history.replaceState(null, '', redirect);
    }
  }, []);

  const navLinks = [
    { name: "Project", href: "#project" },
    { name: "Team", href: "#team" },
    { name: "Exhibition", href: "#history" },
  ];

  useEffect(() => {
    // Check if mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const heroElement = document.getElementById("home");

    if (!scrollContainer || !heroElement) return;

    // Section observer for active section tracking
    const sectionIds = ["home", "project", "team", "history"];
    const visibilityMap = new Map();

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        // Update visibility map with latest intersection ratios
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let mostVisibleId = "";

        visibilityMap.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        });

        // Lower threshold for better responsiveness
        const minThreshold = 0.01;
        if (mostVisibleId && maxRatio > minThreshold) {
          setActiveSection(mostVisibleId);
        }
      },
      {
        root: scrollContainer,
        threshold: [
          0, 0.01, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8,
          0.9, 1.0,
        ],
        rootMargin: isMobile ? "-40% 0px -40% 0px" : "-20% 0px -20% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        sectionObserver.observe(element);
      }
    });

    const handleScroll = () => {
      // Handle scroll state for showing/hiding header
      setIsScrolling(true);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Mobile: 750ms, Desktop: 1500ms
      const timeout = isMobile ? 750 : 1500;
      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, timeout);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      sectionObserver.disconnect();
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isMobile]);

  return (
    <div className="text-gray-200 font-sans relative w-screen h-screen overflow-hidden">
      <SplashCursor isHeroSection={true} />

      <Header showHeader={true} isScrolling={isScrolling} isMobile={isMobile} />
      <ScrollIndicator
        activeSection={activeSection}
        containerRef={scrollContainerRef}
        isScrolling={isScrolling}
        isMobile={isMobile}
      />

      <main
        id="scroll-container"
        ref={scrollContainerRef}
        className="relative z-10 h-screen overflow-y-scroll snap-y snap-mandatory"
      >
        <Hero />
        <ProjectSection />
        <TeamSection />
        <ExhibitionSection />
        <Footer />
      </main>

      <Analytics />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
