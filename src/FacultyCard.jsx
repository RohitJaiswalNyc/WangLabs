import { useNavigate,Link } from 'react-router-dom';

const FacultyCard = ({ name, description, image,email}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    let str = name.replace(/\s/g, "");
    navigate('/people/' + str);
    
    // const section = document.getElementById(sectionId);
    // if (section) {
    //   section.scrollIntoView({ behavior: 'smooth' });
    // }
  };
  return (
    <div>
    <div className="bg-[#FF4A17] text-white flex flex-col items-center rounded-2xl m-6 p-6 w-72 shadow-lg">
      {/* Circular Image */}
      <div className="w-64 h-64 mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full border-4 border-[#3b4763] shadow-md"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold uppercase tracking-wide text-left">
        {name}
      </h3>

      

      {/* Description */}
      <p className="text-sm text-gray-200 text-center mt-3">
        {description}
      </p>

      {/* email */}
      <Link
          className="mt-2"
          to='#'
          onClick={(e) => {
              window.location.href = "mailto:"+email;
              e.preventDefault();
          }}
      >
      {email}
      </Link>
      {/* <href className="mt-3">

        {email}
      </href> */}
      {/* More info link */}
      <button className="nav-button mt-1 text-sm font-bold uppercase tracking-wide flex items-center space-x-1 hover:underline" onClick={() => handleNavigation()}>More Info <span>→</span></button>
    </div>
    </div>
  );
};

export default FacultyCard;