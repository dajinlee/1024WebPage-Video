import React from 'react';

interface HeaderProps {
  showHeader: boolean;
  isScrolling: boolean;
  isMobile: boolean;
}

const Header: React.FC<HeaderProps> = ({ showHeader, isScrolling, isMobile }) => {
  // On mobile, always show on home page, then show when scrolling on other pages
  // On desktop, show when scrolling (like the scroll indicator)
  const shouldShow = isMobile ? (!showHeader || isScrolling) : (showHeader && isScrolling);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 p-4 md:p-6 backdrop-blur-md bg-black/30 transition-opacity duration-300 ${shouldShow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <nav className="container mx-auto flex items-center justify-center">
        {/* Title */}
        <a href="#home" className="text-xl md:text-2xl font-bold font-display tracking-wider">TEAM DOPAMINE</a>
      </nav>
    </header>
  );
};

export default Header;