import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
// import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
// import Computer from "./Buttons/Computer";
// import Test from "./Buttons/Test";
import RunningText from "./Buttons/RunningText";

const Contact = () => {


    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Arun",
        message: message,
    }


    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     emailjs.sendForm(serviceId, templateId, form.current, publicKey)
    //         .then((result) => {
    //             console.log(result.text);
    //             setLoading(false);
    //         }, (error) => {
    //             console.log(error.text);
    //             setLoading(false);
    //         });
    // };


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        // console.log({
        //     name,
        //     email,
        //     message,
        // })


        emailjs.sendForm("service_czwd3cr", "template_t81mlbx",
            templateParams,
            "YdnHtKG_W7VWiHKUd")
            .then((result) => {
                console.log("run Successfully");
                setName('')
                setEmail('')
                setMessage('')
                setLoading(false);
            }, (error) => {
                console.log(error.text);
                setLoading(false);
            });

    }

    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact.</h3>

                <form
                    onSubmit={sendEmail}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your email</span>
                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <button
                        type='submit'
                        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                    >
                        {loading ? "Send" : "Sending..."}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='flex items-center xl:flex-1 xl:h-auto md:h-[600px] h-[400px]'
            >
                {/* <Computer /> */}
                <RunningText />
                {/* <Test/> */}

            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
