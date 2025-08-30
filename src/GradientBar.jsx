import React from 'react';
import './GradientBar.css';
import { useNavigate } from 'react-router-dom';

const GradientBar = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    navigate('/' + sectionId);
  };

  return (
    <div className="gradient-bar justify-between">
      <h1 className="nav-headline ml-12">The Wang Lab</h1>
      <nav className="nav-menu   " >
        <button className="nav-button" onClick={() => handleNavigation('home')}>Home</button>
        <button className="nav-button" onClick={() => handleNavigation('research')}>Research</button>
        <button className="nav-button" onClick={() => handleNavigation('people')}>People</button>
        <button className="nav-button" onClick={() => handleNavigation('collaborations')}>Collaborations</button>
        <button className="nav-button" onClick={() => handleNavigation('publication')}>Publication</button>
        <button className="nav-button" onClick={() => handleNavigation('media')}>Media</button>
      </nav>
    </div>
  );
};

export default GradientBar;
