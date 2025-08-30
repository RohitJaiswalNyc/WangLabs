import React from "react";
import GradientBar from './GradientBar';
import Footer from './footer';
import CollaborationCard from './CollaborationCard';
import CollaborationData from './collaborationData'

const CollaboarionsPage = ({ name, areas, description, infoLink, image }) => {
  return (
    <div className="App relative">
        <GradientBar />
        <div className="bg-[#FF4A17] pt-10 pb-10">
        {CollaborationData.map((user)=>(
            <CollaborationCard name={user.name} description={user.description} image={user.image} title={user.title}></CollaborationCard>
        ))}
        </div>
        <Footer/>
    </div>
  );
};

export default CollaboarionsPage;