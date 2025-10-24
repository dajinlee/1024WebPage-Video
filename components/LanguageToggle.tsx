import React from "react";

interface LanguageToggleProps {
  language: "ko" | "en";
  onLanguageChange: (language: "ko" | "en") => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  language,
  onLanguageChange,
}) => {
  return (
    <div className="fixed top-4 right-4 z-[100]">
      <div className="flex bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 p-1">
        <button
          onClick={() => onLanguageChange("ko")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            language === "ko"
              ? "bg-cyan-500 text-white shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-gray-800"
          }`}
        >
          한국어
        </button>
        <button
          onClick={() => onLanguageChange("en")}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-all duration-200 ${
            language === "en"
              ? "bg-cyan-500 text-white shadow-lg"
              : "text-gray-300 hover:text-white hover:bg-gray-800"
          }`}
        >
          English
        </button>
      </div>
    </div>
  );
};

export default LanguageToggle;
