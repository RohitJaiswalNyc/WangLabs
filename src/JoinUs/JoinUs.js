// import JoinUs1 from '../resources/JoinUs1.jpeg'
// import JoinUs2 from '../resources/JoinUs2.jpeg'
// import JoinUs3 from '../resources/JoinUs3.jpeg'
// import JoinUs4 from '../resources/JoinUs4.jpeg'  
// import JoinUs5 from '../resources/JoinUs5.jpeg'
// import JoinUs6 from '../resources/JoinUs6.jpeg'
// import JoinUs7 from '../resources/JoinUs7.jpeg'
// import JoinUs8 from '../resources/JoinUs8.jpeg'
// import JoinUs9 from '../resources/JoinUs9.jpeg'
// import JoinUs10 from '../resources/JoinUs10.jpeg'
// import JoinUs11 from '../resources/JoinUs11.jpeg'
// import JoinUs12 from '../resources/JoinUs12.jpeg'

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const JoinUs1 = cld
      .image('JoinUs1_mcbbam')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs2 = cld
      .image('JoinUs2_rpgvmx')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs3 = cld
      .image('JoinUs3_u5issk')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs4 = cld
      .image('JoinUs4_lpmkrr')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs5 = cld
      .image('JoinUs5_hkcxn6')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs6 = cld
      .image('JoinUs6_dhd2um')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs7 = cld
      .image('JoinUs7_acoaxt')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs8 = cld
      .image('JoinUs8_oawkcg')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio


const JoinUs9 = cld
      .image('JoinUs9_xbyupp')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs10 = cld
      .image('JoinUs10_moukqu')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs11 = cld
      .image('JoinUs11_sqerer')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const JoinUs12 = cld
      .image('JoinUs12_jwypx0')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio
    
const joinUsImages = [JoinUs1, JoinUs2, JoinUs3, JoinUs4, JoinUs5, JoinUs6, JoinUs7, JoinUs8, JoinUs9, JoinUs10, JoinUs11, JoinUs12];

export default joinUsImages;