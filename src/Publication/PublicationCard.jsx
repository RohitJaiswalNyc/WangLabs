import React from "react";
import { Link } from 'react-router-dom';
import { GrDocumentPdf } from "react-icons/gr";

const PublicationsCard = ({ date, name, citation , pdfLink, publicationLink }) => {
  return (
    <div className="bg-[#FFE4B5] my-10 mr-48 ml-24 h-fit p-2 pl-4 py-4 rounded-md">
        <div className=" text-slate-700  pt-1  rounded text-s  font-mono">{date}</div>
        <div className="font-bold text-2xl py-1 text-slate-700">{name}</div>
        <div className="text-s text-justify text-slate-700">{citation}</div>
      <div className="flex">
        <Link
                className="pl-1  text-[#B2560D] hover:text-sky-700"
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
                className="pl-2  text-[#B2560D] hover:text-sky-700"
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