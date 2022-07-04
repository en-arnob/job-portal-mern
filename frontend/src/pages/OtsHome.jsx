import React from "react";
import cta from "../assets/images/cta.svg";
import pca from "../assets/images/pcsvg.svg";
import con from "../assets/images/consvg.svg";

const OtsHome = () => {
  const handleChange = () => {};
  return (
    <div className='h-full'>
      <h1 className='text-center text-4xl border-b-2 p-2'>One Time Service</h1>
      <div className='mt-4 md:rounded container bg-gray-100'>
        <div class='flex flex-col items-center px-4 py-4 mx-auto xl:flex-row'>
          <div class='flex justify-center xl:w-1/2'>
            <img
              class='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
              src={cta}
              alt=''
            />
          </div>
          <div class='flex justify-center xl:w-1/2'>
            <img
              class='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
              src={pca}
              alt=''
            />
          </div>
          <div class='flex justify-center xl:w-1/2'>
            <img
              class='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
              src={con}
              alt=''
            />
          </div>
        </div>
        <div className='pb-10'>
          <h1 className='text-2xl text-center'>I'm a Recruiter</h1>
          <div className='md:grid grid-cols-3 gap-4 justify-around md:px-4'>
            <div>
              <select
                className='w-full p-3 text-sm border-gray-200 '
                onChange={handleChange}
                name='jobType'
                id='jobType'
              >
                <option value='Remote'>What do you need?</option>
                <option value='Onsite'>Onsite</option>
              </select>
            </div>

            <div>
              <input
                className='w-full p-3 text-sm border-gray-200 '
                placeholder='Location'
                type='number'
                id='vaccancy'
                onChange={handleChange}
                value='fegf'
                name='vaccancy'
                required
              />
            </div>
            <div>
              <button
                // onClick={() => navigate("/one-time-service")}
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
