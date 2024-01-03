import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center '>
      {technologies.map((technology) => (
        <div className='w-28 h-28 m-2  shadow-md' key={technology.name}>
          <motion.img whileHover={{
    scale: 1.2,
    transition: { duration: 0.5 },
  }} src={technology.icon}/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
