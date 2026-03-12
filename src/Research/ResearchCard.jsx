import { AdvancedImage } from '@cloudinary/react';

const ResearchCard = ({ name, description, image,title}) => {
  
  return (
    <div className="grid grid-cols-4 items-center  rounded-2xl pl-20 mx-20 py-4  my-20 bg-[#FFE4B5]   shadow-2xl ">
        {/* Circular Image */}
        <div className="col-span-1 flex w-80 h-80  content-between">
          <AdvancedImage className="w-full h-full object-cover  rounded-full border-4 border-[#3b4763] shadow-md brightness-150 contrast-110" cldImg={image}/>
        </div>
        
        <div className="mx-20 col-span-3"> 
          <div className="text-3xl">
            {title}
          </div>
          <div className="text-xl text-justify">
            {description} 
          </div>
          </div>
        
    
    </div>
  );
};

export default ResearchCard;