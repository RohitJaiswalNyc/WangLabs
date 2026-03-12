import React, { useState } from "react";
import GradientBar from '../GradientBar/GradientBar.jsx';
import Footer from '../footer/footer.jsx';
// import BackgroundImage from '../resources/JoinUs_BackGround.png'; 
import { MdChevronLeft, MdChevronRight, MdFullscreen, MdClose } from "react-icons/md";
import galleryImages from './JoinUs.js'; // Importing your array of 12 images
import { AdvancedImage } from '@cloudinary/react';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const BackgroundImage = cld
      .image('JoinUs_BackGround_neemgn')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio


const JoinUs = () => {
  // State for the Image Carousel and Lightbox Modal
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  // Stop propagation ensures clicking arrows doesn't accidentally open the modal
  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex - -1
    ); // (prevIndex + 1)
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <GradientBar />
      
      {/* Hero / Main Content Section */}
      <div className="relative flex-grow flex items-center justify-center py-20">
        
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <AdvancedImage className="w-full h-full object-cover opacity-80" cldImg={BackgroundImage}/>
          
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Central Self-Contained Box (Vertical Stack Layout) */}
        <div className="relative z-10 bg-[#FFE4B5] w-[95%] max-w-5xl rounded-2xl shadow-2xl p-8 md:p-14 border-4 border-[#3b4763] flex flex-col gap-8 items-center">
          
          {/* 1. Header */}
          <h1 className="text-5xl md:text-6xl font-bold text-[#3b4763] border-b-4 border-[#B2560D] pb-4 text-center w-full">
            Join the Wang Lab
          </h1>

          {/* 2. Interactive Image Gallery (From NewsCard) */}
          <div className="w-full flex flex-col items-center mt-2">
            
            {/* Main Stage */}
            <div className="relative group w-full max-w-4xl bg-slate-900 rounded-xl overflow-hidden border-4 border-[#3b4763] shadow-xl aspect-video flex items-center justify-center">
              <AdvancedImage className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-105" onClick={() => setIsExpanded(true)} cldImg={galleryImages[currentIndex]}/>
              {/* <img
                src={galleryImages[currentIndex]}
                alt={`Lab Moment ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain cursor-pointer transition-transform duration-500 group-hover:scale-105"
                onClick={() => setIsExpanded(true)}
              /> */}

              {/* Overlay Fullscreen Button */}
              <button 
                onClick={() => setIsExpanded(true)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
              >
                <MdFullscreen size={24} />
              </button>

              {/* Navigation Buttons */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#3b4763] p-2 rounded-full shadow-xl hover:bg-white transition-all transform hover:scale-110 active:scale-95 z-10"
                    aria-label="Previous image"
                  >
                    <MdChevronLeft size={32} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 text-[#3b4763] p-2 rounded-full shadow-xl hover:bg-white transition-all transform hover:scale-110 active:scale-95 z-10"
                    aria-label="Next image"
                  >
                    <MdChevronRight size={32} />
                  </button>
                </>
              )}
            </div>

            
          </div>

          {/* 3. Text & Opportunities */}
          <div className="w-full max-w-4xl flex flex-col mt-4">
            <div className="text-lg text-slate-800 leading-relaxed space-y-6">
              <p className="text-justify font-medium">
                We are a collaborative and driven research team at SUNY Upstate Medical University. 
                Our laboratory explores the fascinating molecular principles of tick-microbe interactions, 
                vector competence, and intracellular bacterial mechanisms. We are always looking for 
                passionate individuals to grow with us.
              </p>

              {/* Opportunities Highlight Box */}
              <div className="bg-white/60 p-6 md:p-8 rounded-xl border-l-8 border-[#3b4763] shadow-inner my-6">
                <h2 className="text-2xl font-bold text-[#B2560D] mb-6">We are actively welcoming:</h2>
                <ul className="space-y-5 text-base md:text-lg">
                  <li className="flex items-start">
                    <span className="text-[#B2560D] font-bold mr-3 text-2xl leading-none">✓</span>
                    <div>
                      <strong className="text-[#3b4763]">Postdoctoral Researchers:</strong> Highly motivated fellows with a strong background in microbiology, molecular biology, or vector biology.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B2560D] font-bold mr-3 text-2xl leading-none">✓</span>
                    <div>
                      <strong className="text-[#3b4763]">Ph.D. Students:</strong> Prospective students applying through the Biomedical Sciences Ph.D. program, as well as current rotation students.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B2560D] font-bold mr-3 text-2xl leading-none">✓</span>
                    <div>
                      <strong className="text-[#3b4763]">Summer Interns:</strong> Enthusiastic undergraduates looking to gain hands-on laboratory experience.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#B2560D] font-bold mr-3 text-2xl leading-none">✓</span>
                    <div>
                      <strong className="text-[#3b4763]">Volunteering Students:</strong> Local students eager to learn foundational lab operations and shadow experienced researchers.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Call to Action Footer */}
              <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-6">
                <p className="font-bold text-2xl text-[#3b4763] text-center md:text-left">
                  Ready to explore the ticks world with us?
                </p>
                
                {/* Call to Action Button */}
                <button
                  onClick={() => window.location.href = "mailto:wangxin@upstate.edu"}
                  className="bg-[#B2560D] text-white font-bold py-4 px-8 rounded-full text-xl hover:bg-[#3b4763] hover:scale-105 transition-all duration-300 shadow-lg flex-shrink-0"
                >
                  ✉ Contact Dr. Xinru Wang
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />

      {/* Fullscreen Modal / Lightbox Component */}
      {isExpanded && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setIsExpanded(false)}
            className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors z-[110]"
          >
            <MdClose size={40} />
          </button>
          <AdvancedImage className="max-w-full max-h-[90vh] object-contain"  cldImg={galleryImages[currentIndex]}/>
          
        </div>
      )}
    </div>
  );
};

export default JoinUs;