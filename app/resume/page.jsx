"use client"
import { 
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs, 
} from "react-icons/fa";

import { 
  SiTailwindcss, 
  SiNextdotjs, 
  SiCplusplus, 
  SiPython,
} from "react-icons/si";

{/*About Data*/}
const about = {
  title: 'About me',
  description: 'Fullstack Web Developer and IOT Developer. Highly passionate about creating intuitive and dynamic user experience. I possess great problem-solving skills, pay high attention to detail, and deliver on time. Interested in the entire Fullstack Web Development field and working on great projects with positive individuals/team.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Joshua Javier',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+63) 9457498579',
    },
    {
      fieldName: 'Experience',
      fieldValue: '6 Months',
    },
    {
      fieldName: 'Github',
      fieldValue: 'Shintakino',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Filipino',
    },
    {
      fieldName: 'Email',
      fieldValue: 'joshuajaynarvaza@gmail.com',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Filipino',
    },
  ]
};

{/*Experience Data*/}
const experience = {
  icon: 'assets/resume/badge.svg',
  title: 'My Experience',
  description: 'As a web developer and iot-developer, I have proven track record of designing, developing, and implementing innovative software solutions. With strong foundation in programming languages and a passion for problem-solving, I have successfully delivered projects that meet both technical and business objectives.',
  items:[
    {
      company: 'Up-work',
      position: 'Freelance Web Developer',
      duration: 'May 2024 ‑ Present',
    },
    {
      company: 'Civil Aviation Authority of the Philippines',
      position: 'Software Engineering Intern',
      duration: 'June 2023 ‑ August 2023',
    },
  ]
};

{/*Education Data*/}
const education = {
  icon: 'assets/resume/cap.svg',
  title: 'My Education',
  description: 'My academic journey equiped me with a solid understanding of programming principles, software development methodologies, and problem-solving skills.',
  items:[
    {
      institution: 'Notre Dame of Kidapawan College',
      degree: 'BS Computer Engineering Degree',
      duration: '2020 - 2024',
    },
    {
      institution: 'Notre Dame of Kidapawan College',
      degree: 'Senior High School Diploma',
      duration: '2018-2020',
    },
    {
      institution: 'Meocan High School',
      degree: 'Junior High School Diploma',
      duration: '2014 - 2018',
    },
    {
      institution: 'Meocan Elementary School',
      degree: 'Elementary Diploma',
      duration: '2008 - 2014',
    },
  ]
};

{/*Education Data*/}
const skills = {
  title: 'My skills',
  description: 'Specializes in using Python/SQL/Excel/Tableau/R for Data Analysis, Python/Django & Nodejs for backend/API and javascript / React for front-end.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs/>,
      name: 'javascript',
    },
    {
      icon: <FaReact/>,
      name: 'react',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiTailwindcss/>,
      name: 'tailwind.css',
    },
    {
      icon: <FaNodeJs />,
      name: 'node.js',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiCplusplus/>,
      name: 'c++',
    },
    {
      icon: <SiPython/>,
      name: 'python',
    },
  ]
};

import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger, 
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";


const Resume = () => {
  return (
    <motion.div
      initial= {{opacity: 0}}
      animate= {{
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
     <div className="container mx-auto">
      <Tabs 
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList
        className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
        >
          <TabsTrigger value='experience'>Experience</TabsTrigger>
          <TabsTrigger value='education'>Education</TabsTrigger>
          <TabsTrigger value='skills'>Skills</TabsTrigger>
          <TabsTrigger value='about'>About me</TabsTrigger>
        </TabsList>

        {/*Content*/}
        <div className="min-h-[70vh] w-full">
          {/*experience*/}
          <TabsContent value='experience' className='w-full'>
           <div className="flex flex-col gap-[30px] text-center xl:text-justify">
            <h3 className="text-4xl font-bold">{experience.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {experience.description}
            </p>
            <ScrollArea className="h-[400px]">
             <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
             {experience.items.map((item,index)=>{
                return (
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 
                  rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                  >
                    <span className="text-accent">
                      {item.duration}
                    </span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center 
                    lg:text-left"
                    >  
                      {item.position}
                    </h3>
                    <div className="flex items-center gap-3">
                      {/*dot*/}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60">{item.company}</p>
                    </div>
                  </li>
                );
              })}
             </ul>
            </ScrollArea>
           </div>
          </TabsContent>

          {/*education*/}
          <TabsContent value='education' className='w-full'>
          <div className="flex flex-col gap-[30px] text-center xl:text-justify">
            <h3 className="text-4xl font-bold">{education.title}</h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {education.description}
            </p>
            <ScrollArea className="h-[400px]">
             <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
             {education.items.map((item,index)=>{
                return (
                  <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 
                  rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                  >
                    <span className="text-accent">
                      {item.duration}
                    </span>
                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center 
                    lg:text-left"
                    >  
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-3">
                      {/*dot*/}
                      <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                      <p className="text-white/60 lg:text-left">{item.institution}</p>
                    </div>
                  </li>
                );
              })}
             </ul>
            </ScrollArea>
           </div>
          </TabsContent>

          {/*skills*/}
          <TabsContent value='skills' className='w-full h-full'>
           <div className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[30px] text-center xl:text-justify">
              <h3 className="text-4xl font-bold">
                {skills.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.skillList.map((skill, index)=>{
                return (
                  <li key={index}>
                   <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl
                      flex justify-center items-center group">
                      <div className="text-6xl group-hover:text-accent transition-all duration-300">
                        {skill.icon}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="capitalize">{skill.name}</p>
                      </TooltipContent>
                    </Tooltip>  
                   </TooltipProvider>
                  </li>
                );
              })}
            </ul>
           </div>
          </TabsContent>

          {/*about*/}
          <TabsContent value='about' className='w-full text-center xl:text-justify'>
           <div className="flex flex-col gap-[30px]">
            <h3 className="text-4xl font-bold">
              {about.title}
            </h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 
            max-w-[620px] mx-auto xl:mx-0">
              {about.info.map((info,index) =>{
                return (
                  <li key={index} className="flex items-center justify-center 
                  xl:justify-start gap-4">
                    <span className="text-white/60">
                      {info.fieldName}
                    </span>
                    <span className="text-xl">
                      {info.fieldValue}
                    </span>
                  </li>
                );
              })}
            </ul>
           </div>
          </TabsContent>
        </div>
      </Tabs>
     </div>
    </motion.div>
  );
};

export default Resume;