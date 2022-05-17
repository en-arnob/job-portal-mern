import React from "react";

const JobCardSponsored = () => {
  return (
    <div className='col-span-2 mx-2'>
      <h1
        className='relative block p-8 overflow-hidden border bg-green-50 border-gray-100 rounded-lg'
        href=''
      >
        <span class='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-500 via-green-500 to-green-900'></span>

        <div className='justify-between sm:flex'>
          <div>
            <h5 className='text-xl font-bold text-green-900'>
              Software Engineer
            </h5>
            <p className='mt-1 text-sm  text-green-800'>Google</p>
          </div>

          <div className='flex-shrink-0 hidden ml-3 sm:block'>
            <img
              className='object-cover w-16 h-16 rounded-lg shadow-sm'
              src='https://i0.wp.com/www.techjunkie.com/wp-content/uploads/2020/11/How-to-Change-the-Google-Logo.jpg?fit=1200%2C666&ssl=1'
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
            <dt class='text-sm font-medium text-gray-600'>
              #JavaScript #Angular
            </dt>
            <dd class='text-xs  text-stone-800'>Deadline: 31st June, 2022</dd>
          </div>

          <div class='flex flex-col-reverse ml-3 sm:ml-6'>
            <dt class='text-sm font-medium text-green-600'>Remote</dt>
            <dd class='text-xs  text-gray-800'>Vaccancy: 3</dd>
          </div>
        </dl>
      </h1>
    </div>
  );
};

export default JobCardSponsored;
