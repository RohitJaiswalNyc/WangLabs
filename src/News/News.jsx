import React from "react";
import GradientBar from '../GradientBar/GradientBar';
import Footer from '../footer/footer';
import _news from "./news";
import NewsCard from "./NewsCard"
// import tickImage from '../resources/tick-news.jpg';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const tickImage = cld
      .image('tick-news_gneplr')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News = () => {
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
        <div className="absolute inset-0  z-0"></div>

        {/* 3. Text Layer */}
        <div className="relative z-10 font-bold">News</div>

      </div>
      {/* <div 
        className=" p-20 text-5xl w-full text-center text-white relative overflow-hidden"
        style={{ 
          backgroundImage: `url(${tickImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: '50% 50%' 
        }}
      >News</div> */}
      <div className=" w-600 mx-auto">
      {_news.map((news)=>(
        <NewsCard name={news.name} images={news.images } date={news.date} description={news.description} pdfLink={news.pdfLink} newsLink={news.newsLink}></NewsCard>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default News;