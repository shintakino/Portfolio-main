"use client";
import { motion } from "framer-motion";
import React, { useState} from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Image from 'next/image';


import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
  {
    num: '01',
    category: 'Fullstack IOT Integration',
    Title: 'Eco-solution Indoor Hydroponic System',
    description: 'This eco-friendly hydroponics system, built with React, PHP, SQL, Arduino Nano, and ESP32, empowers users to manage their indoor growing environment. Set light (DLI & duration), nutrient (EC & pH) levels, and VPD (using fans) for optimal plant growth. Visualize sensor data with comprehensive graphs and reports. Understand the concept of networking of hardware devices to communicate with each other.',
    stack:[
      {name: "Php"},{name: "Tailwind.css"},{name: "MySQL"},{name: "React.js"},
    ],
    image: "/assets/work/1.png",
    live:"",
    github:"https://github.com/shintakino/Eco-Solution-Hydroponic-System.git",
  },
  {
    num: '02',
    category: 'Fullstack Software Development',
    Title: 'NDKC Attendance Face Recognition System',
    description: 'Leverage facial recognition for accurate identification of registered students/employees. Automate attendance marking, saving time and eliminating manual errors. Securely store data in a MySQL database to ensure data integrity and privacy. Generate easy-to-access attendance reports using stored CSV files. Utilizes Python\'s versatility and OpenCV\'s facial recognition capabilities for a robust solution.',
    stack:[
      {name: "Python"},{name: "Pillow"},{name: "OpenCv"},{name: "MySQL"},
    ],
    image: "/assets/work/2.png",
    live:"",
    github:"https://github.com/shintakino/ndkc_face_recognition_system.git",
  },
  {
    num: '03',
    category: 'Fullstack Web Booking System',
    Title: 'NDKC Online Facility Booking System',
    description: 'Leverages Google APIs for seamless integration and functionality. An intuitive web interface allows users to easily search and book available facilities. Google Maps integration ensures accurate location information, and Google Calendar facilitates smooth scheduling and availability management. Utilizes Google APIs (Maps & Calendar) for a user-friendly and efficient online facility booking experience.',
    stack:[
      {name: "HTML5"},{name: "Bootstrap"},{name: "Css3"},{name: "Javascript"},
    ],
    image: "/assets/work/3.png",
    live:"https://shintakino.github.io/NDKC-Facilities",
    github:"https://github.com/shintakino/NDKC-Facilities",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // Get current index of slide 
    const currentIndex = swiper.activeIndex;
    // Update project State based on the current slide
    setProject(projects[currentIndex]);

  };

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
     <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap-[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
        xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
            {/*Outline Num */}
            <div className="text-8xl leading-none font-extrabold
            text-transparent text-outline">
              {project.num}
            </div>
            {/*Project Category */}
            <h2 className="text-[42px] font-bold leading-none text-white
            group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>
            {/*Project Description */}
            <p className="text-white/60 text-justify">
              {project.description}
            </p>
            {/*Project Stack */}
            <ul className="flex gap-4">
              {project.stack.map((item, index)=>{
                return (
                  <li 
                  key={index}
                  className="text-xl text-accent"
                  >
                    {item.name}
                    {/*Disable Comma in last item */}
                    {index !== project.stack.length-1 &&  ","}
                  </li>
                );
              })}
            </ul>
            {/*Border */}
            <div className="border border-white/20"></div>
            {/*Buttons */}
            <div className="flex items-center gap-4 ">
              {/*Live Project Button */}
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                 <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                  bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl
                    group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Live project</p>
                  </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
              </Link>
              {/*GithubProject Button */}
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                 <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                  bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl
                    group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Github repository</p>
                  </TooltipContent>
                 </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[50%]">
          <Swiper 
          spaceBetween={30} 
          slidesPerView={1} 
          className="xl:h-[520px] mb-12"
          onSlideChange={handleSlideChange}
          >
            {projects.map((project, index) =>{
              return (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center 
                  items-center bg-pink-50/20">
                   {/*overlay*/}
                   <div className="absolute top-0 bottom-0 w-full h-full
                   bg-black/10 z-10">

                   </div>
                   {/*image*/}
                   <div className="relative w-full h-full">
                    <Image
                    src={project.image}
                    fill
                    className="object-cover"
                    alt=""
                    />
                   </div>
                  </div>
                </SwiperSlide>
              );
            })}
            {/*slider buttons*/}
            <WorkSliderBtns 
            containerStyles="flex gap-2 absolute right-0 
            bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between 
            xl:w-max xl:justify-none" 
            btnStyles="bg-accent hover:bg-accent-hover
            text-primary text-[22px] w-[44px] flex justify-center items-center
            transition-all"/>
          </Swiper>
        </div>
      </div>
     </div>
    </motion.section>
  );
};

export default Work;