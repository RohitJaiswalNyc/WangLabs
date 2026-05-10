import React, { useState } from 'react';
import './GradientBar.css';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const Wang_lab_logo = cld
      .image('Wang_lab_logo_file_mgbagf')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity()));

const GradientBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    navigate('/' + sectionId);
    setIsOpen(false); // Close menu on navigation
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'research', label: 'Research' },
    { id: 'people', label: 'People' },
    { id: 'publication', label: 'Publication' },
    { id: 'news', label: 'News' },
    { id: 'JoinUs', label: 'Join us' },
  ];

  return (
    <div className="gradient-bar relative">
      <div className="flex items-center ml-4 md:ml-10">
        <AdvancedImage className="h-12 w-12 md:h-16 md:w-16 object-scale-down" cldImg={Wang_lab_logo}/>
        <p className="nav-headline ml-4">
          Wang Lab
        </p>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex items-center gap-4 mr-10" >
        {navItems.map((item) => (
          <button key={item.id} className="nav-button" onClick={() => handleNavigation(item.id)}>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden mr-4 text-[#FFE4B5] hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#B2560D]/95 backdrop-blur-md shadow-xl lg:hidden flex flex-col items-center py-4 z-[1001] border-t border-[#FFE4B5]/20">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              className="nav-button w-full text-center py-3 border-b border-[#FFE4B5]/10 last:border-0" 
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default GradientBar;
