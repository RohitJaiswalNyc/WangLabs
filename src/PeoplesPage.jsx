import React from "react";
import GradientBar from './GradientBar';
import Footer from './footer';
import FacultyCard from "./FacultyCard";
import peopleData from "./peopleData";

const PeoplesPage = ({ name, areas, description, infoLink, image }) => {
  return (
    <div>
      <GradientBar/>
      <div className="grid grid-cols-4 bg-[#FF4A17] mt-14">
      {peopleData.map((user)=>(
        <FacultyCard name={user.name} description={user.field} image={user.image} email={user.email}></FacultyCard>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default PeoplesPage;