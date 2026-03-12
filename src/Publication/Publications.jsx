import React, { useState, useMemo } from "react";
import GradientBar from '../GradientBar/GradientBar';
import Footer from '../footer/footer';
import publicationData from "./publication"; // Renamed for clarity
import PublicationCard from "./PublicationCard";
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const tickImage = cld
      .image('tick_publication_lju84h')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const Publications = () => {
  const [sortOrder, setSortOrder] = useState("latest");
  const [searchTerm, setSearchTerm] = useState("");

  // Helper function to parse DD-MM-YYYY into a sortable Date object
  const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  // Memoized sorting and filtering logic
  const filteredPublications = useMemo(() => {
    let result = [...publicationData];

    // Filter by search term (optional but useful)
    if (searchTerm) {
      result = result.filter(pub => 
        pub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pub.citation.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort logic
    result.sort((a, b) => {
      const dateA = parseDate(a.date);
      const dateB = parseDate(b.date);
      return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
    });

    return result;
  }, [sortOrder, searchTerm]);

  return (
    <div>
      <GradientBar />
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
        <div className="absolute inset-0 "></div>

        {/* 3. Text Layer */}
        <div className="relative z-10 font-bold">Publications</div>

      </div>

      {/* Sorting & Filter Lab */}
      <div className="mx-20 mt-10 flex flex-wrap items-center justify-between gap-4 p-4 bg-[#B2560D] rounded-lg shadow-inner">
        <div className="flex items-center gap-4">
          <label className="font-semibold text-slate-700">Sort by:</label>
          <select 
            value={sortOrder} 
            onChange={(e) => setSortOrder(e.target.value)}
            className="p-2 rounded border  bg-[#FFE4B5] focus:outline-none focus:ring-2 focus:ring-[#3b4763]"
          >
            <option value="latest">Latest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>

        <div className="flex items-center gap-4 flex-grow max-w-md">
          <input 
            type="text"
            placeholder="Search titles or citations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#FFE4B5] p-2 rounded border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#3b4763]"
          />
        </div>
        
        <div className=" text-sm">
          Showing {filteredPublications.length} results
        </div>
      </div>

      <div className="m-20 mt-10">
        {filteredPublications.map((pub, index) => (
          <PublicationCard 
            key={index}
            date={pub.date} 
            name={pub.name} 
            citation={pub.citation} 
            pdfLink={pub.pdfLink} 
            publicationLink={pub.publicationLink} 
          />
        ))}
        {filteredPublications.length === 0 && (
          <div className="text-center text-slate-500 text-xl py-10">
            No publications found matching your search.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Publications;