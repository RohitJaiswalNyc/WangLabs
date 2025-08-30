import React from "react";
import GradientBar from './GradientBar';
import Footer from './footer';
import publication from "./publication";
import PublicationCard from "./PublicationCard"

const Publications = () => {
  return (
    <div>
      <GradientBar/>
      <div className="my-14 p-10 text-5xl w-full text-center bg-red-600 text-white">Publications</div>
      <div className="m-20 mt-20 ">
      {publication.map((pub)=>(
        <PublicationCard year={pub.year} description={pub.description} pdfLink={pub.pdfLink} publicationLink={pub.publicationLink}></PublicationCard>
      ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Publications;