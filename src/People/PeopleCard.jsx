import { useNavigate,Link } from 'react-router-dom';
import './PeopleCard.css'

// git init
// git add .
// git commit -m "Initial commit: Wang Lab website with Cloudinary assets"
// git branch -M main
// git remote add origin <your-github-repo-url>
// git push -u origin main

const PeopleCard = ({id, name, description, image,email}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    let str = id.replace(/\s/g, "");
    navigate('/people/' + str);
    
    // const section = document.getElementById(sectionId);
    // if (section) {
    //   section.scrollIntoView({ behavior: 'smooth' });
    // }
  };
  return (
    <div>
    <div className="bg-[#FFE4B5]  flex flex-col items-center rounded-2xl m-6 p-6 w-72 shadow-lg">
      {/* Circular Image */}
      <div className="w-64 h-64 mb-4">
        {image}
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold uppercase tracking-wide text-left">
        {name}
      </h3>

      

      {/* Description */}
      <p className="text-xl  h-10 text-center mt-3">
        {description}
      </p>

      {/* email */}
      <Link
          className="mt-4"
          to='#'
          onClick={(e) => {
              window.location.href = "mailto:"+email;
              e.preventDefault();
          }}
      >
      {email}
      </Link>
      
      <button className="nav-button-2 my-4 text-sm font-bold uppercase " onClick={() => handleNavigation()}>More Info <span>→</span></button>
    </div>
    </div>
  );
};

export default PeopleCard;