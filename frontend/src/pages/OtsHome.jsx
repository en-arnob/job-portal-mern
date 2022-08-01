import React, { useState, useEffect } from "react";
import cta from "../assets/images/cta.svg";
import pca from "../assets/images/pcsvg.svg";
import con from "../assets/images/consvg.svg";
import { useNavigate } from "react-router-dom";

import { FaMapMarkerAlt } from "react-icons/fa";

import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const OtsHome = () => {
  const navigate = useNavigate();

  const [inp, setInp] = useState({
    serviceType: "",
    location: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setInp({ ...inp, [input.name]: input.value });
  };
  // console.log(inp);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className='h-full'>
      <h1 className='text-center text-4xl border-b-2 p-2'>One Time Service</h1>
      <div className='mt-4 md:rounded container bg-gray-100'>
        <div class='flex flex-col items-center px-4 py-4 mx-auto xl:flex-row'>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeLeft}
            class='flex justify-center xl:w-1/2'
          >
            <img
              class='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
              src={cta}
              alt=''
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeBottom}
            class='flex justify-center xl:w-1/2'
          >
            <img
              class='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
              src={pca}
              alt=''
            />
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial='hidden'
            variants={fadeRight}
            class='flex justify-center xl:w-1/2'
          >
            <img
              class='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
              src={con}
              alt=''
            />
          </motion.div>
        </div>
        <div className='pb-10'>
          <h1 className='text-2xl text-center font-normal'>
            I'm looking for:{" "}
          </h1>
          <div className='md:grid grid-cols-3 gap-4 justify-around md:px-4'>
            <div>
              <select
                className='w-full p-3 text-sm border-gray-200 '
                onChange={handleChange}
                name='serviceType'
                id='serviceType'
              >
                <option value='NULL'>What do you need?</option>
                <option value='IT Support'>IT Support</option>
                <option value='Networking'>Networking</option>
                <option value='Servers'>Server</option>
                <option value='IT Home Service'>IT Home Service</option>
                <option value='Cyber Security'>Cyber Security</option>
                <option value='Digital Device Installation'>
                  Digital Device Installation
                </option>
                <option value='Electrical Services'>Electrical Services</option>
                <option value='Data Recovery'>Data Recovery</option>
                <option value='Video Filming'>Video Filming</option>
                <option value='TV'>TV</option>
              </select>
            </div>

            <div className='flex'>
              <input
                required
                type='text'
                name='location'
                id='location'
                onChange={handleChange}
                placeholder='Enter your location'
                value={inp.location}
                className='flex flex-1 text-right border sm:text-sm  focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400'
              />
              <span className='flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700'>
                <FaMapMarkerAlt />
              </span>
            </div>
            <div>
              <button
                onClick={() => navigate("/service-search", { state: { inp } })}
                // href='/one-time-service'
                class='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 no-underline'
              >
                <span class='mx-2'>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtsHome;
