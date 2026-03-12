import React from 'react';
import './GradientBar.css';
import { useNavigate } from 'react-router-dom';

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

//Wang_lab_logo_file_mgbagf

const GradientBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate('/' + sectionId);
  };

  return (
    <div className="gradient-bar justify-between">
      <div className="flex ml-10">
        <AdvancedImage className="h-auto w-auto scale-125  object-scale" cldImg={Wang_lab_logo}/>
        
        <p className="nav-headline flex">
        Wang Lab
        </p>
      </div>
      <nav className="nav-menu" >
        <button className="nav-button" onClick={() => handleNavigation('home')}>Home</button>
        <button className="nav-button" onClick={() => handleNavigation('research')}>Research</button>
        <button className="nav-button" onClick={() => handleNavigation('people')}>People</button>
        <button className="nav-button" onClick={() => handleNavigation('publication')}>Publication</button>
        <button className="nav-button" onClick={() => handleNavigation('news')}>News</button>
        <button className="nav-button" onClick={() => handleNavigation('JoinUs')}>Join us</button>
      </nav>
    </div>
  );
};

export default GradientBar;
