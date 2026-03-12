import React from "react";
import GradientBar from '../GradientBar/GradientBar.jsx';
import Footer from '../footer/footer.jsx';
import PeopleCard from "./PeopleCard";
import peopleData from "./peopleData";
import { AdvancedImage } from '@cloudinary/react';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const tickImage = cld
      .image('tick_image_arkppx')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const PeoplesPage = ({ name, areas, description, infoLink, image }) => {
  return (
    <div>
      <GradientBar/>
      <div className="p-20 text-5xl w-full text-center text-white relative overflow-hidden bg-black">
        
        {/* 1. The Cloudinary Image Background Layer */}
        <div className="absolute inset-0 z-0">
          <AdvancedImage 
            cldImg={tickImage} 
            /* Translated your backgroundSize and backgroundPosition into Tailwind utility classes */
            className="w-full h-full object-cover object-[50%_50%] opacity-70" 
          />
        </div>

        {/* 2. Dark overlay to make text more readable */}
        <div className="absolute inset-0"></div>

        {/* 3. Text Layer */}
        <div className="relative z-10 font-bold">People</div>

      </div>
      <div className="grid grid-cols-4 mt-10 bg-[#FFFFFF] mx-10">
      {peopleData.map((user)=>(
        <PeopleCard id={user.id} name={user.name} description={user.title} image={user.image} email={user.email}></PeopleCard>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default PeoplesPage;