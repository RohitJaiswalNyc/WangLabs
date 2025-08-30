import React from "react";
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from "react-icons/gr";

const PublicationsCard = ({ year, description, pdfLink, publicationLink }) => {
  return (
    <div className="bg-slate-200 my-10 mr-48 ml-24 h-fit p-2 pl-4 py-4 rounded-md text-lg">
      {description}
      <div className="flex">
        <Link
                className="pl-1  text-red-400 hover:text-sky-700"
                to='#'
                onClick={(e) => {
                    window.location.href = pdfLink;
                    e.preventDefault();
                }}
            >
            <u className="flex">
            <GrDocumentPdf className="mr-2 mt-1"/>
            <p className="">PDF</p>
            
            </u>
            </Link>
            <Link
                className="pl-2  text-red-400 hover:text-sky-700"
                to='#'
                onClick={(e) => {
                    window.location.href = publicationLink;
                    e.preventDefault();
                }}
            >
            <u>
            Publisher's version
            </u>
            </Link>
        </div>
    </div>
  );
};

export default PublicationsCard;