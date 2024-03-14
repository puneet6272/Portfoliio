import { motion } from "framer-motion";

import { styles } from "../styles";
import ButtonHire from "./Buttons/ButtonHire";
import CVButton from "./Buttons/CVButton";
import MyPhoto from "../assets/tech/MyPhotos.jpg"


const Hero = () => {


  const letterVariants = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0},
    exit: { opacity: 0, y: 20 },
  };

  const textVariants = {
    animate: {
      transition: {
        staggerChildren: 0.1, // Adjust the stagger for the desired effect
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };


  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-6xl mx-auto ${styles.paddingX} flex flex-col justify-around sm:flex-col items-center md:flex-col lg:flex-row`}
      >

        <div className={`${styles.paddingX} flex flex-row items-center gap-5 `}
        >
          <div className='flex flex-col justify-center items-center mt-2 '>



            <div className='w-1 sm:h-30   h-48 violet-gradient relative bottom-2' />
          </div>



          <div >
            <h1 className={`${styles.heroHeadText} text-white mt-4`}>
              Hi, I'm <span className='text-[#915EFF]'>Puneet</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 mb-2 text-4xl text-white-100 `}>
              <motion.div
                variants={textVariants}
                initial="initial"
                animate="animate"
              >
                {"Fullstack  Developer".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

            </p>
            <p className=" text-[15px]">
              This is my official Portfolio website to show all
              <br /> Details and work experience  in web development
            </p>


            <div className=" w-72 flex justify-between items-center h-20">
              <ButtonHire />
              <CVButton />
            </div>
          </div>
        </div>

        <img className="md:w-[300px] xs:block absolutew-[300px] sm:w-[200px] lg:w-[350px] border rounded-full shadow-lg shadow-gray-700" src={MyPhoto} alt="" />

      </div>


      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
