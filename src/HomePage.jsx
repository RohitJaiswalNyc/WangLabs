import React from "react";
import GradientBar from './GradientBar';
import Footer from './footer';

const HomePage = ({ name, areas, description, infoLink, image }) => {
  return (
    <div className="App relative">
        <GradientBar />
        <img src={require('./image-1.jpeg')} alt="My Background" className='mt-12 object-fill w-full h-[50rem]' />
        <p className="absolute top-80 left-[550px] text-2xl p-4 text-center bg-white bg-opacity-50 h-60 w-96">hi, this is our home page. <br/> Hope you enjoy the site and explore it!</p>
        <Footer/>
    </div>
  );
};

export default HomePage;