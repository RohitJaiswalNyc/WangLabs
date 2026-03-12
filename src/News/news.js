
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const XinruWangPhoto = cld
      .image('Xinru_Wang_odtiwj')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News11_Image1 = cld
      .image('News11-P2_fjxmdj')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News10_Image1 = cld
      .image('News10-P1_pkqczz')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio      

const News9_Image1 = cld
      .image('News9-P1_mdzsqi')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News9_Image3 = cld
      .image('News9-P3_ac6fy5')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News9_Image5 = cld
      .image('News9-P5_syvrne')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News8_Image1 = cld
      .image('News8-P1_zdo1qb')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News7_Image1 = cld
      .image('News7-P1_eqz4m6')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News6_Image1 = cld
      .image('News6-P1_wbzmsq')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News3_Image1 = cld
      .image('News3-p1_ig2ke3')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const News2_Image1 = cld
      .image('News2-P2_hdtzh8')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio



const news = [
  {  
    date: "July 2025",
    images:[News11_Image1], 
    description:"Datta Sawant published his first research article demonstrating that a Rickettsia parkeri protein regulates tick cell apoptosis.", 
  },
  { 
    date: "June 2025",
    images:[News10_Image1],
    description:"Datta Sawant successfully passed his qualifying exam and advanced to Ph.D. candidacy.", 
  },
  { 
    date: "May 2025",
    images:[News9_Image1,News9_Image3,News9_Image5], 
    description:"The Wang Laboratory participated in the Tick and Tick-Borne Disease Symposium at SUNY Binghamton, where Dr. Wang delivered an invited talk and two lab members presented posters", 
  },
  { 
    date: "November 2024",
    images:[News8_Image1], 
    description:"Dr. Wang received the Hendricks Intramural Pilot Award to establish and characterize embryonic cell lines from the tick Haemaphysalis longicornis.", 
  },
  { 
    date: "November 2024",
    images:[News7_Image1], 
    description:"Haritha Katasani joined the Wang Laboratory as a Research Specialist.", 
  },
  { 
    date: "June 2024",
    images:[News6_Image1], 
    description:"We welcomed Datta Sawant as the first Ph.D. student to join the Wang Laboratory.", 
  },
  { 
    date: "May 2024",
    images:[], 
    description:"Dr. Wang delivered an invited talk at the Tick and Tick-Borne Disease Symposium at SUNY Binghamton.", 
  },
  { 
    date: "December 2023",
    images:[], 
    description:"Dr. Wang delivered an invited seminar to the University of Missouri Entomology Society on tick–microbe interactions.", 
  },
  { 
    date: "November 2023",
    images:[News3_Image1], 
    description:"Dr. Wang presented her research in the Spotlight on Rickettsia webinar series hosted by the American Society for Rickettsiology.", 
  },
  { 
    date: "October 2023",
    images:[News2_Image1], 
    description:"Our work on autophagy in tick–endosymbiont interactions was accepted in Microbiology Spectrum, marking the first publication from the Wang Laboratory at SUNY Upstate.", 
  },
  { 
    date: "March 2023",
    images:[XinruWangPhoto], 
    description:"Dr. Wang established her laboratory at SUNY Upstate Medical University as an Assistant Professor and Empire Innovation Program Scholar in the Department of Microbiology & Immunology.", 
  },
];

export default news;