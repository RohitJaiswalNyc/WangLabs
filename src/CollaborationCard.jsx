
const CollaborationCard = ({ name, description, image,title}) => {
  
  return (
    <div className="grid grid-cols-4 items-center rounded-2xl pl-20 mx-20 py-4  my-20 bg-slate-100   shadow-2xl ">
        {/* Circular Image */}
        <div className="col-span-1 flex w-80 h-80  content-between">
            <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full border-4 border-[#3b4763] shadow-md"
            />
        </div>
        
        <div className="mx-20 col-span-3 text-red-500"> 
          <div className="text-2xl">
            {title}
          </div>
          <div className="text-xl">
            {description} 
          </div>
          </div>
        
    
    </div>
  );
};

export default CollaborationCard;