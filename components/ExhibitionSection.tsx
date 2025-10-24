import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getData } from "../data";
import ExhibitionCard from "./ExhibitionCard";
import type { ExhibitionRecord } from "../data";

const ExhibitionSection: React.FC = () => {
  const { language } = useLanguage();
  const data = getData(language);
  const [selectedExhibition, setSelectedExhibition] =
    useState<ExhibitionRecord | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [modalImage, setModalImage] = useState<ExhibitionRecord | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Set the last exhibition (NCA) as default when component mounts
    if (data.exhibitions.records.length > 0) {
      setSelectedExhibition(
        data.exhibitions.records[data.exhibitions.records.length - 1]
      );
    }
  }, [data.exhibitions.records]);

  const handleCardClick = (record: ExhibitionRecord) => {
    setSelectedExhibition(record);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="history"
        className="min-h-screen flex flex-col py-10 md:py-14 container mx-auto px-6 md:px-32 snap-start"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-4 text-center">
          {data.exhibitions.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left - Detail View */}
          <div className="md:col-span-2">
            <div className="md:sticky md:top-[calc(50vh-200px)] w-full">
              {selectedExhibition ? (
                <div className="bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 flex flex-col relative z-50">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {selectedExhibition.name}
                  </h3>
                  <div
                    className="bg-black rounded-lg mb-3 flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-80 transition-opacity flex-shrink-0"
                    style={{ height: "320px" }}
                    onClick={() => {
                      setModalImage(selectedExhibition);
                      setShowImageModal(true);
                    }}
                  >
                    <img
                      src={selectedExhibition.imageUrl}
                      alt={selectedExhibition.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-bold">
                      {selectedExhibition.date}
                    </p>
                    <p className="text-sm">{selectedExhibition.location}</p>
                    <p className="text-xs text-gray-400">
                      {selectedExhibition.address}
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-lg border border-gray-700 flex items-center justify-center relative z-50"
                  style={{ height: "400px" }}
                >
                  <p className="text-gray-500 text-center">
                    전시를 선택하면
                    <br />
                    상세 정보가 표시됩니다
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right - Exhibition Timeline (Vertical) */}
          <div className="md:col-span-1">
            <div className="relative flex flex-row md:flex-col gap-4 md:gap-0 md:space-y-4">
              {/* Vertical Timeline Line - hidden on mobile */}
              <div className="hidden md:block absolute right-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>

              {/* Coming Soon Card */}
              <div className="relative flex-1 md:flex-none">
                {/* Timeline dot for coming soon */}
                <div className="hidden md:block absolute right-4 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black border-dashed bg-gray-800 transition-all duration-300 z-10"></div>

                {/* Coming Soon Card with right padding for timeline */}
                <div className="md:pr-8">
                  <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg border border-dashed border-gray-500 overflow-hidden cursor-default scale-75 opacity-70 hover:opacity-90 transition-all duration-500 ease-out">
                    <div className="overflow-hidden bg-black/40 flex items-center justify-center h-24">
                      <div className="text-gray-400 text-center">
                        <svg
                          className="w-8 h-8 mx-auto mb-1 opacity-60"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="p-2">
                      <h3 className="text-xs md:text-sm font-bold text-gray-400 mb-2 text-right">
                        What's next
                      </h3>
                      <div className="text-right">
                        <p className="text-xs text-gray-500">다음 전시 예정</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {data.exhibitions.records.map((record, index) => (
                <div key={index} className="relative flex-1 md:flex-none">
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:block absolute right-4 top-1/2 translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black transition-all duration-300 z-10 ${
                      selectedExhibition?.name === record.name
                        ? "bg-pink-500 scale-125 ring-2 ring-pink-500"
                        : "bg-gray-600"
                    }`}
                  ></div>

                  {/* Card with right padding for timeline */}
                  <div className="md:pr-8">
                    <ExhibitionCard
                      record={record}
                      isSelected={selectedExhibition?.name === record.name}
                      onClick={() => handleCardClick(record)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {showImageModal && modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90"></div>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Image */}
            <div className="w-full rounded-lg overflow-hidden shadow-2xl">
              <img
                src={modalImage.imageUrl}
                alt={modalImage.name}
                className="w-full h-auto object-contain max-h-[85vh]"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold text-xl mb-1">
                {modalImage.name}
              </p>
              <p className="text-gray-300 text-sm">
                {modalImage.location} · {modalImage.date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExhibitionSection;
