import { Link,useLocation } from 'react-router-dom';
import GradientBar from "../GradientBar/GradientBar";
import peopleData from "../People/peopleData";
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from "react-icons/fa";
import { IoArrowBackSharp } from "react-icons/io5";
import { motion } from 'framer-motion';
import { useNavigate} from 'react-router-dom';
import Footer from '../footer/footer'

const IndividualMember = () => {
  const currentURL = useLocation();
  const parts = (currentURL.pathname).split('/')
  const id = parts[parts.length-1]
  const user = peopleData.find(user => user.id === id);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('./..');
  };
  // console.log(User,"here2")
  return (
    <div>
        <GradientBar/>
        <div className=" w-full h-80  bg-[#FFE4B5] content-center ">
          <div className="flex justify-between">
            <div className="ml-40">
              <div className="text-black text-7xl pt-12 ">{user.name}</div>
              <div className="text-black text-xl pt-4 pl-2"> {user.title}</div>
              <div className="text-black text-xl pt-4 pb-4 pl-2"> {user.field}</div>
              <motion.button
                className="flex"
                whileHover={{ scale: 1.1 }} // Scale up on hover
                whileTap={{ scale: 0.9 }} // Scale down on click
                style={{
                  color: 'black',
                  padding: '5px 5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
                onClick={() => handleNavigation()}
              > 
                <div className="flex">
                <IoArrowBackSharp className="mt-1 mr-1"/>
                  Back To People
                </div>
              </motion.button>
            </div>
            <div className="w-60 h-60 mr-72 mt-2">
                {user.image}
              {/* <img
                src={user.image}
                alt={user.id}
                className="w-full h-full object-cover object-top  rounded-full border-4 border-[#3b4763] shadow-md"
              /> */}
            </div>
            
          </div>
        </div>
        <div className="flex mt-20 mb-60">
          <div className="ml-40 ">
            <div className="font-bold text-xl">
              CONTACT
            </div>
            <div className="flex mt-2">
              <MdEmail className="mr-2" size={24} color="#B2560D" />
              {/* email */}
              <Link
                  
                  to='#'
                  onClick={(e) => {
                      window.location.href = "mailto:"+user.email;
                      e.preventDefault();
                  }}
              >
              {user.email}
              </Link>             
            </div>
            <div className="flex mt-2">
              <FaPhoneAlt className="mr-2" size={24} color="#B2560D" />
              {/* email */}
              {user.number}
            </div>
            {user.website === undefined?<></>:
            <Link
                  className="pl-1 mt-10 text-red-400"
                  to='#'
                  onClick={(e) => {
                      window.location.href = user.website;
                      e.preventDefault();
                  }}
              >
              <u>
              { user.websiteName}
              </u>
              </Link>  
            }
            
            
            
          </div>
          <div className="mx-40 text-justify ">
            {user.description}
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default IndividualMember;