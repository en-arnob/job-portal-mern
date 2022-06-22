import React from "react";
import TextTruncate from "react-text-truncate";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { GoVerified } from "react-icons/go";

const JobCardSponsored = () => {
  return (
    <div className='col-span-2 mx-2'>
      <h1
        className='relative block p-8 overflow-hidden border bg-green-50 border-gray-100 rounded-lg'
        href=''
      >
        <span className='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-500 via-green-500 to-green-900'></span>

        <div className='justify-between sm:flex'>
          <div>
            <h5 className='text-2xl font-medium text-green-900'>
              Software Engineer
            </h5>
            <p className='flex gap-3 font-normal text-lg  text-indigo-800'>
              <HiOutlineOfficeBuilding className='text-lg mt-1' />
              Google
            </p>
            <p className='flex gap-3 text-sm font-medium text-blue-800'>
              <GoVerified className='text-lg' /> Sponsored Job
            </p>
          </div>

          <div className='flex-shrink-0 hidden ml-3 sm:block'>
            <img
              className='object-cover w-16 h-16 rounded-lg shadow-sm'
              src='https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg?fit=1200%2C666&ssl=1'
              alt=''
            />
          </div>
        </div>

        <div className='mt-2 text-gray-600 sm:pr-8 text-sm'>
          <TextTruncate
            line={2}
            element='span'
            truncateText='…'
            text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.'
            textTruncateChild={
              <span className='text-blue-400 mx-2' href='#'>
                Read more on full post
              </span>
            }
          />
        </div>

        <dl className='flex mt-6'>
          <div className='flex flex-col-reverse'>
            <dt className='text-sm font-medium text-gray-600'>
              #JavaScript #Angular
            </dt>
            <dd className='text-sm  text-stone-800'>
              Deadline: 31st June, 2022
            </dd>
          </div>

          <div className='flex flex-col-reverse ml-3 sm:ml-6'>
            <dt className='text-sm font-medium text-green-600'>Remote</dt>
            <dd className='text-sm  text-gray-800'>Vaccancy: 3</dd>
          </div>
        </dl>
        <p className='text-xs flex gap-2  text-gray-800'>
          <HiOutlineClock className='text-sm' /> Thu May 19 2022 03:22:35
          GMT+0600 (Bangladesh Standard Time)
        </p>
      </h1>
    </div>
  );
};

export default JobCardSponsored;
