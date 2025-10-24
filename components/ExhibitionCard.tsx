import React from 'react';
import type { ExhibitionRecord } from '../data';

interface ExhibitionCardProps {
  record: ExhibitionRecord;
  isSelected?: boolean;
  onClick?: () => void;
}

const ExhibitionCard: React.FC<ExhibitionCardProps> = ({ record, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-gray-900/30 backdrop-blur-sm rounded-lg border transition-all duration-500 ease-out overflow-hidden group hover:shadow-lg hover:shadow-cyan-400/20 text-right cursor-pointer ${
        isSelected
          ? 'border-cyan-400 shadow-lg shadow-cyan-400/20 scale-100 opacity-100'
          : 'border-gray-800 hover:border-cyan-400 scale-75 opacity-50 hover:opacity-75'
      }`}
    >
      <div className="overflow-hidden bg-black flex items-center justify-center">
        <img
          src={record.imageUrl}
          alt={`${record.name} poster or photo`}
          className={`w-full object-contain group-hover:scale-105 transition-all duration-500 ${
            isSelected ? 'h-32' : 'h-24'
          }`}
        />
      </div>
      {/* Desktop: Right aligned with details */}
      <div className={`hidden md:block transition-all duration-500 ${isSelected ? 'p-3' : 'p-2'}`}>
        <h3 className={`font-bold text-white mb-2 transition-all duration-500 text-right ${
          isSelected ? 'text-base' : 'text-sm'
        }`}>{record.name}</h3>
        <div className="text-right">
          <p className={`font-bold font-sans tabular-nums transition-all duration-500 ${
            isSelected ? 'text-sm' : 'text-xs'
          }`}>{record.date}</p>
          <p className={`transition-all duration-500 ${
            isSelected ? 'text-xs' : 'text-[10px]'
          }`}>{record.location}</p>
          <p className={`text-gray-400 transition-all duration-500 ${
            isSelected ? 'text-xs' : 'text-[10px]'
          }`}>{record.address}</p>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;