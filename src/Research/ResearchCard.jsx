import { AdvancedImage } from '@cloudinary/react';

const ResearchCard = ({ name, description, image,title}) => {
  
  return (
    <div className="flex flex-col lg:flex-row items-center rounded-2xl p-6 lg:p-10 mx-4 lg:mx-20 my-10 lg:my-20 bg-[#FFE4B5] shadow-2xl gap-6 lg:gap-10">
        {/* Circular Image */}
        <div className="flex-shrink-0 w-48 h-48 lg:w-80 lg:h-80">
          <AdvancedImage className="w-full h-full object-cover rounded-full border-4 border-[#3b4763] shadow-md brightness-150 contrast-110" cldImg={image}/>
        </div>
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left"> 
          <div className="text-2xl lg:text-3xl font-bold mb-4">
            {title}
          </div>
          <div className="text-lg lg:text-xl text-justify">
            {description} 
          </div>
        </div>
        
    
    </div>
  );
};

export default ResearchCard;