"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+63) 9457498579",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "joshuajaynarvaza@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "R.castillo Davao City, Philippines",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d514cc94-84ff-48c9-9edf-89c5d42e481f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage("Message sent successfully!");
        event.target.reset(); // Reset form fields on success
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again.");
      console.error("Error:", error); // Log error for debugging
    }
  }

  return (
    <motion.section
    initial={{opacity: 0}}
    animate={{
      opacity: 1, 
      transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
    }}
    className="py-6"
    >
     <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/*Form */}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
            <h3 className="text-4xl text-accent">
              Let's work together
            </h3>
            <p className="text-white/60">
              Would you like me to help you with something? Let's build something amazing together.
            </p>
            {/*Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" name="firstname" placeholder="Firstname" required/>
              <Input type="text"name="lastname" placeholder="Lastname" required/>
              <Input type="email" name="email" placeholder="Email address" required/>
              <Input type="text" name="phone" placeholder="Phone number" required/>
            </div>
            {/*Select Fields */}
            <Select name="service" required>
             <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a service"/>
             </SelectTrigger>
             <SelectContent>
              <SelectGroup>
                <SelectLabel>
                  Select a service
                </SelectLabel>
                <SelectItem value="webDev">Web Development</SelectItem>
                <SelectItem value="iotDev">IOT Development</SelectItem>
                <SelectItem value="softDev">Software Development</SelectItem>
              </SelectGroup>
             </SelectContent>
            </Select>
            {/*Text Area */}
            <Textarea 
            className="h-[200px]"
            placeholder="Type your message here."
            name="message"
            required
            />
            {/*Send Button*/}
            <Button type="submit" size='md' className="max-w-40">Send message</Button>
          </form>
          {/* Status Message */}
          {statusMessage && (
              <p className="mt-4 text-white text-center">{statusMessage}</p>
            )}
        </div>
        {/*Info */}
        <div className="flex-1 flex items-center xl:justify-end order-1
        xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item,index)=>{
              return (
               <li key={index} className="flex items-center gap-6">
                <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
               </li>
              );
            })}
          </ul>
        </div>
      </div>
     </div>
    </motion.section>
  )
}

export default Contact