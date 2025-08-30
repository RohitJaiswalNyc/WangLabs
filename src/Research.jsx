import React from "react";
import GradientBar from './GradientBar';
import Footer from './footer';
import ResearchCard from "./ResearchCard";
import Researchdata from "./researchData";

const PeoplesPage = ({ name, areas, description, infoLink, image }) => {
  return (
    <div >
      <GradientBar/>
      <div className="mt-14 p-10 text-5xl w-full text-center  bg-red-600 text-white">Research</div>

      <div className="bg-[#FF4A17] pt-10 pb-10">
      {Researchdata.map((user)=>(
        <ResearchCard name={user.name} description={user.description} image={user.image} title={user.title}></ResearchCard>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default PeoplesPage;