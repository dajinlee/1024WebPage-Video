import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="min-h-[30vh] flex items-center justify-center border-t border-gray-800 snap-start">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 text-center text-gray-500 py-8">
        <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Team Dopamine. All Rights Reserved.</p>
        <p className="font-bold text-lg md:text-xl lg:text-2xl mt-2 md:mt-3 font-display bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">TEAM DOPAMINE</p>
      </div>
    </footer>
  );
};

export default Footer;