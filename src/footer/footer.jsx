import './footer.css'

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const UniversityLogo = cld
      .image('university_logo_wtky34')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio


function Footer() {
  return (
    <div className='mt-20 gradient-bar-2 grid  grid-cols-2 w-full text-[#FFE4B5] justify-items-center  h-80 items-center justify-center'>
    <div>
      {/* <AdvancedImage className="brightness-0 invert text-[#FFE4B5]" cldImg={UniversityLogo}/> */}
      <AdvancedImage 
        cldImg={UniversityLogo} 
        alt="University Logo" 
        /* w-[300px] completely prevents the logo from blowing up */
        className="w-[300px] h-auto brightness-0 invert py-0 my-0" 
      />
      <div className="pl-5">
          <div className='text-3xl pt-10'>Contact:</div>
          <div className='text-xl'>Xinru Wang, PhD</div>
          <div className='text-xl'>wangxin@upstate.edu</div>
      </div>
    </div>
    <div>
        <div className='text-3xl'>Location:</div>
        <div className='text-xl'>4th Floor 4205</div>
        <div className='text-xl'>Institute For Human Performance (IHP)</div>
        <div className='text-xl'>505 Irving Avenue</div>
        <div className='text-xl'>Syracuse, NY 13210</div>
    </div>
    </div>
  );
}

export default Footer;