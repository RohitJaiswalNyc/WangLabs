import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const cld = new Cloudinary({ cloud: { cloudName: 'dbgjfxqot' } });
  
const XinruWangPhoto = cld
      .image('Xinru_Wang_odtiwj')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const DattaSawantPhoto = cld
      .image('datta_bhai_photo_js7fmo')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const HaritaKatsaniPhoto = cld
      .image('Harita_r0wxpy')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const AmandaPhoto = cld
      .image('Amanda_picture_dottsl')
      .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
      .quality('auto')
      .resize(auto().gravity(autoGravity())); // Transform the image: auto-crop to square aspect_ratio

const peopleData = [
  { id: "XinruWang", 
    name: "Xinru Wang, PhD",
    
    image: <AdvancedImage className="w-full h-full object-cover object-top rounded-full border-4 border-[#3b4763] shadow-md" cldImg={XinruWangPhoto}/>,
    field: <div>Department of Microbiology & Immunology</div>,
    title:<div>Assistant Professor</div>,
    email:"WangXin@upstate.edu",
    number:"+1 315 464 4724",
    description:<> <div>Dr. Xinru Wang is an Assistant Professor and Empire Innovation Scholar in the Department of Microbiology & Immunology at SUNY Upstate Medical University, where she established her laboratory in 2023. She began her work in tick and Rickettsia biology during her postdoctoral training (2018-2022) in the laboratory of Drs. Ulrike Munderloh and Timothy Kurtti at the University of Minnesota, where she developed expertise in tick-pathogen interactions and intracellular bacterial mechanisms. Her independent research program focuses on the molecular principles governing symbiosis, pathogenesis, and vector competence using innovative tick cell line platforms. </div> </> 
  },
  { id: "DattatraySawant", 
    name: "Dattatray Sawant",
    image:<AdvancedImage className="w-full h-full object-cover object-top rounded-full border-4 border-[#3b4763] shadow-md" cldImg={DattaSawantPhoto}/>, 
    field: <div>Department of Microbiology & Immunology</div>,
    title:<div>PhD Candidate</div>,
    email:"SawantD@upstate.edu",
    number:"+1 315 880 1553",
    website:"",
    websiteName:"",
    description:<> <p>Dattatray completed his undergraduate and master's degrees at the University of Mumbai, India, with a major in Microbiology. During his master's training, he contributed to research on microbial vitamin B12 production at the National Facility for Biopharmaceuticals (NFB) under the guidance of Dr. Vinal Pardhi. He later continued at NFB as a Senior Research Fellow and also gained industry experience at Advanced Enzyme Technologies Ltd.</p><br/>

<p>Dattatray joined the Wang Lab at SUNY Upstate Medical University as a rotation student in 2024 and subsequently became the lab's first PhD student. His interest in obligate intracellular bacteria drew him to pursue his doctoral thesis in the lab. He is currently involved in multiple projects focused on Rickettsia species, particularly the tick endosymbiont Rickettsia buchneri. In his work, he applies microbiological, molecular, proteomic, and tick cell culture approaches to better understand tick-Rickettsia biology.</p><br/>

<p>Outside of research, Dattatray enjoys hiking and cycling.</p> </>
  },
  { id: "HarithaKatasani", 
    name: "Haritha Katasani",
    image:<AdvancedImage className="w-full h-full object-cover object-top rounded-full border-4 border-[#3b4763] shadow-md" cldImg={HaritaKatsaniPhoto}/>, 
    field:<div>Department of Microbiology & Immunology</div>,
    title:<div>Senior Research Support Specialist</div>,
    email:"KatasanH@upstate.edu",
    number:"+1 315 464 9496",
    websiteName:"",
    website:"",
    description:<> <p>I am a Senior Research Support Specialist with a strong background in molecular and cellular biology, specializing in mammalian and tick cell culture, PCR- and qPCR-based gene expression analysis, and flow cytometry.</p><br/>

<p>My projects focused on tick-pathogen interactions, including studies of tick cellular responses to infection and molecular mechanisms underlying pathogen transmission. My work emphasizes hands-on experimental execution, assay optimization, and reproducible data generation in support of ongoing research efforts. I also support both experimental research and daily laboratory operations, with a focus on workflow organization, media preparation, inventory coordination, and reproducible data generation.</p><br/>

<p>Trained in biotechnology and with experience in both academic and industry research environments, I value precision, consistency, and collaboration in scientific research. Outside the lab, I enjoy traveling and spending time outdoors.</p> </> 
  },
  { id: "AmandaBaliban", 
    name: "Amanda Baliban",
    image:<AdvancedImage className="w-full h-full object-cover object-top rounded-full border-4 border-[#3b4763] shadow-md" cldImg={AmandaPhoto}/>, 
    field: <div>Department of Microbiology & Immunology </div>,
    title:<div>Visiting Student</div>,
    email:"abaliban@binghamton.edu",
    number:"+1 609 332 9665",
    website:"",
    websiteName:"",
    description:<> <div>Amanda Baliban is a graduate student and teaching assistant in the Department of Anthropology at SUNY Binghamton. She helps run the Molecular and Biomedical Anthropology Lab which partners with Tick-Borne Disease Research Center to conduct research on pathogen prevalence and microbiome composition of ticks found throughout New York. Amanda started working in Dr. Wang’s lab in 2025, where she was involved with projects concerning tick cell line maintenance and gene knockout in Rickettsia via CRISPR-Cas9 systems. Amanda is continuing her work exploring tick-pathogen interactions at Binghamton University analyzing microbial communities of Ixodes scapularis found in Southern Tier, NY. When Amanda isn't in the lab, she enjoys reading or having board game nights with her friends.</div> </>
  },
];

export default peopleData;