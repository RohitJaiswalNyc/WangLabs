import React from "react";
import GradientBar from '../GradientBar/GradientBar';
import Footer from '../footer/footer';
import ResearchCard from "./ResearchCard";
import Researchdata from "./researchData";
import './Research.css'
// import tickImage from '../resources/tick.jpg';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const tickImage = cld
      .image('tick_krzvqu')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity()));


const PeoplesPage = () => {
  return (
    <div >
      <GradientBar/>
      <div className="p-20 text-5xl w-full text-center text-white relative overflow-hidden bg-black">
  
        {/* 1. The Cloudinary Image Background Layer */}
        <div className="absolute inset-0 z-0">
          <AdvancedImage 
            cldImg={tickImage} 
            /* Translated your backgroundSize and backgroundPosition into Tailwind utility classes */
            className="w-full h-full object-cover object-[50%_30%] opacity-70" 
          />
        </div>

        {/* 2. Dark overlay to make text more readable */}
        <div className="absolute inset-0  z-0"></div>

        {/* 3. Text Layer */}
        <div className="relative z-10 font-bold">Research</div>

      </div>

      <div className="  pb-10">
      {Researchdata.map((user)=>(
        <ResearchCard name={user.name} description={user.description} image={user.image} title={user.title}></ResearchCard>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default PeoplesPage;