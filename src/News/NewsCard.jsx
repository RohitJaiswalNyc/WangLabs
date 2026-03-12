import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight, MdFullscreen, MdClose } from "react-icons/md";
import { AdvancedImage } from '@cloudinary/react';


const NewsCard = ({ name, images = [], date, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex justify-center">
      <div className="bg-[#FFE4B5] mt-20 w-[90%] max-w-4xl relative h-fit p-6 rounded-xl shadow-lg border border-orange-200">
        
        {/* Header Info */}
        <div className="flex justify-between items-center">
          <div className="text-slate-700 pt-1 rounded text-sm font-mono font-bold tracking-wider">
            {date}
          </div>
          <div className="text-slate-500 text-xs">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Description Section */}
        <div className="text-slate-800  text-2xl text-bold leading-relaxed  p-4 rounded-lg italic">
          {description}
        </div>

        {/* Improved Image Stage */}
        {images.length > 0 && <div className="relative group w-full bg-slate-900 rounded-lg overflow-hidden border-4 border-[#3b4763] shadow-inner aspect-video flex items-center justify-center">
          
          <AdvancedImage className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-105" onClick={() => setIsExpanded(true)} cldImg={images[currentIndex] || "/api/placeholder/800/450"}/>
          
          {/* Overlay Tools */}
          <button 
            onClick={() => setIsExpanded(true)}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <MdFullscreen size={24} />
          </button>

          {/* Side Navigation Icons */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#3b4763] p-2 rounded-full shadow-xl hover:bg-white transition-all transform hover:scale-110 active:scale-95 z-10"
              >
                <MdChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#3b4763] p-2 rounded-full shadow-xl hover:bg-white transition-all transform hover:scale-110 active:scale-95 z-10"
              >
                <MdChevronRight size={32} />
              </button>
            </>
          )}
        </div>
        }

        {/* Thumbnail Preview Strip */}
        {images.length > 1 && (
          <div className="flex justify-center gap-2 mt-4 overflow-x-auto py-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-16 rounded-md overflow-hidden border-2 transition-all ${
                  currentIndex === idx ? "border-[#3b4763] scale-110 shadow-md" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <AdvancedImage className="w-full h-full object-cover" cldImg={img || "/api/placeholder/800/450"}/>
              </button>
            ))}
          </div>
        )}

        
      </div>

      {/* Fullscreen Modal / Lightbox */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors"
          >
            <MdClose size={40} />
          </button>
          <img 
            src={images[currentIndex]} 
            className="max-w-full max-h-[90vh] object-contain"
            alt="Expanded view" 
          />
        </div>
      )}
    </div>
  );
};

export default NewsCard;