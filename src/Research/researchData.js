// import P1 from '../resources/P1.png'
// import P2 from '../resources/P2.jpg'
// import P3 from '../resources/P3.jpg'
// import P4 from '../resources/ISE6 cells p42.jpg'

import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const P1 = cld
      .image('P1_a0leeg')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const P2 = cld
      .image('P2_frmr7s')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const P3 = cld
      .image('P3_gnzzgh')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio      

const P4 = cld
      .image('ISE6_cells_p42_hmipud')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio


const Researchdata = [
  { id: "1", 
    image:P1, 
    title:"Endosymbiont–Vector Interactions",
    description:<> <div>Ticks harbor vertically transmitted bacterial symbionts that are deeply integrated into host biology. Our work investigates how Rickettsia buchneri, a dominant endosymbiont of Ixodes scapularis, interfaces with tick cellular pathways and reproductive physiology. Rather than viewing symbionts as passive residents, we examine how they actively shape host homeostasis and influence vector competence. This project aims to define the molecular principles governing stable symbiosis in arthropod vectors.</div> </> 
  },
  { id: "2", 
    image:P2, 
    title:"Molecular Mechanisms of Tick Cell Invasion and Intracellular Manipulation",
    description:<> <div>Successful transmission requires pathogens to invade, survive, and replicate within tick cells. We study how pathogenic Rickettsia engage host surface factors, deploy effector proteins, and remodel intracellular pathways to establish infection. By dissecting entry mechanisms and host–pathogen interfaces, this project seeks to uncover conserved principles of vector colonization and intracellular persistence.</div> </> 
  },
  { id: "3", 
    image:P3, 
    title:"Tick Innate Immunity and Programmed Cell Death",
    description:<> <div>Ticks rely on evolutionarily conserved innate immune pathways to regulate microbial colonization. Our laboratory investigates how programmed cell death pathways—including autophagy and apoptosis—shape microbial survival and vector competence. We aim to understand how immune signaling networks balance tolerance and restriction of symbionts and pathogens within arthropod vectors.</div> </>  
  },
  { id: "3", 
    image:P4, 
    title:"Tick Cell Line Innovation and Pathogen Isolation Platforms",
    description:<> <div>Progress in vector biology depends on robust experimental systems. We develop and optimize tick-derived cell lines and in vitro platforms to enable mechanistic studies of intracellular bacteria. These tools support bacterial isolation, functional interrogation, and comparative analyses across symbiotic and pathogenic species. By expanding technical infrastructure, this program advances the field’s capacity to study emerging tick-borne microbes. </div> </> 
  },
  
];

export default Researchdata;