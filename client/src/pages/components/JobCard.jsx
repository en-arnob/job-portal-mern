import React from "react";

const JobCard = () => {
  return (
    <div className='col-span-2 mx-2'>
      <h1
        className='relative block p-8 overflow-hidden border border-gray-100 rounded-lg'
        href=''
      >
        <span class='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

        <div className='justify-between sm:flex'>
          <div>
            <h5 className='text-xl font-bold text-indigo-900'>
              Frontend Engineer
            </h5>
            <p className='mt-1 text-sm font-medium text-indigo-800'>
              Microsoft
            </p>
          </div>

          <div className='flex-shrink-0 hidden ml-3 sm:block'>
            <img
              className='object-cover w-16 h-16 rounded-lg shadow-sm'
              src='https://www.designbust.com/download/1060/png/microsoft_logo_transparent512.png'
              alt=''
            />
          </div>
        </div>

        <div className='mt-4 sm:pr-8'>
          <p class='text-sm text-gray-500'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At velit
            illum provident a, ipsa maiores deleniti consectetur nobis et eaque.
          </p>
        </div>

        <dl class='flex mt-6'>
          <div class='flex flex-col-reverse'>
            <dt class='text-sm font-medium text-gray-600'>#React #Next.js</dt>
            <dd class='text-xs  text-stone-800'>Deadline: 31st June, 2022</dd>
          </div>

          <div class='flex flex-col-reverse ml-3 sm:ml-6'>
            <dt class='text-sm font-medium text-indigo-600'>Onsite</dt>
            <dd class='text-xs  text-gray-800'>Vaccancy: 3</dd>
          </div>
        </dl>
      </h1>
    </div>
  );
};

export default JobCard;
