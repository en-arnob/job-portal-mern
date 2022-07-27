import React, { useEffect } from "react";
import cta from "../../assets/images/cta.svg";
import { useNavigate } from "react-router-dom";
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

const OTSCall = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className='mt-4 px-4 '>
      <section class='bg-white sm:rounded-lg dark:bg-gray-900'>
        <div class='container flex flex-col items-center px-4 py-4 mx-auto xl:flex-row'>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
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
            variants={fadeRight}
            class='flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0'
          >
            <motion.h2 class='text-4xl font-bold tracking-tight text-gray-800 xl:text-5xl dark:text-white'>
              One Time Service -{" "}
              <span className='font-bold text-blue-600'>OTS</span>
            </motion.h2>

            <motion.p class='block max-w-2xl mt-4 text-xl font-bold text-blue-900 dark:text-gray-300'>
              For the first time ever in{" "}
              <span className='font-bold text-green-700'>Bangladesh</span>,
              we're happy to introduce{" "}
              <span className='text-blue-600'>OTS.</span>
            </motion.p>
            <motion.p class='block max-w-2xl text-2xl font-bold text-blue-900 dark:text-gray-300'>
              Hire <span className='font-bold text-pink-600'>IT-Experts</span> .
              Complete your <span className='text-green-600'>on-site</span>{" "}
              tasks.
            </motion.p>

            <div class=' sm:-mx-2'>
              <div class='inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0'>
                <button
                  onClick={() => navigate("/one-time-service")}
                  // href='/one-time-service'
                  class='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 no-underline'
                >
                  <span class='mx-2'>Explore</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OTSCall;
