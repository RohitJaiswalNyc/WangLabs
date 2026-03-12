import { Link } from 'react-router-dom';
import GradientBar from '../GradientBar/GradientBar.jsx';
import Footer from '../footer/footer.jsx';

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const HomePage_Background = cld
      .image('HomePage_Background_esxghs')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity()));

const HomePage = () => {
  return (
    <div className="relative min-h-screen flex flex-col ">
      <GradientBar />
      
      {/* Hero Content Section */}
      <div className="relative flex-grow flex items-center py-20 overflow-hidden">
        
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          <AdvancedImage className="w-full h-full object-cover opacity-70" cldImg={HomePage_Background}/>
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/80 to-transparent w-full lg:w-3/4"></div>
        </div>

        {/* Main Content Wrapper - Left Aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center">
          
          <div className="w-full lg:w-2/3 flex flex-col items-start text-left">
            
            {/* Small Lab Badge */}
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#B2560D] bg-black/40 backdrop-blur-sm text-[#FFE4B5] font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(178,86,13,0.3)]">
              Research Laboratory
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Welcome to the <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE4B5] to-[#B2560D]">
                Wang Lab
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl italic font-light text-gray-300 mb-8">
              Understanding ticks to stop disease.
            </h2>

            {/* Added a subtle black/20 backdrop blur behind the paragraphs.
              This guarantees the text is easy to read even if the background image has bright spots behind it.
            */}
            <div className="text-lg md:text-xl text-gray-300 space-y-6 leading-relaxed font-light max-w-2xl border-l-4 border-[#B2560D] pl-6 py-2 bg-black/20 backdrop-blur-sm rounded-r-2xl">
              <p>
                Tick-borne diseases are an increasing global health concern. Ticks transmit a wide range of bacteria and other pathogens that can cause serious illness in humans and animals.
              </p>
              <p>
                At the Wang Lab, we study how ticks interact with the microbes they carry and transmit. Our goal is to understand how these bacteria survive inside ticks and how they are passed to humans during a tick bite.
              </p>
              <p>
                Using advanced laboratory models and modern molecular tools, we investigate the biological mechanisms that allow pathogens to persist in ticks and spread to new hosts. By uncovering these processes, we aim to develop new strategies to block disease transmission.
              </p>
              <p>
                Ultimately, our mission is to help protect human health by stopping tick-borne infections at their source.
              </p>
            </div>

            {/* Call to Action Button */}
            <div className="mt-12">
              <Link 
                to="/research" 
                className="group relative inline-flex items-center gap-3 bg-[#FFE4B5] text-black font-bold py-4 px-10 rounded-full text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,228,181,0.4)] hover:shadow-[0_0_30px_rgba(255,228,181,0.6)] hover:-translate-y-1"
              >
                Explore our Research
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </Link>
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;