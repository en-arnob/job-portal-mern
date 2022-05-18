import React from "react";
import TextTruncate from "react-text-truncate";

const JobCard = ({ job }) => {
  return (
    <div className='col-span-2 mx-2'>
      <h1
        className='relative block p-8 overflow-hidden border border-gray-100 rounded-lg'
        href=''
      >
        <span class='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

        <div className='justify-between sm:flex'>
          <div>
            <h5 className='text-xl font-bold text-indigo-900'>{job.title}</h5>
            <p className='mt-1 text-lg  text-blue-700'>
              {job.authorId.organization}
            </p>
            <p className='mt-1 text-sm font-medium text-blue-800'>
              Posted by: {job.authorId.fullname}
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

        <div className='mt-2 text-gray-600 sm:pr-8 text-sm'>
          <TextTruncate
            line={2}
            element='span'
            truncateText='…'
            text={job.body}
            textTruncateChild={
              <span className='text-blue-400 mx-2' href='#'>
                Read more on full post
              </span>
            }
          />
        </div>

        <dl class='flex mt-6'>
          <div class='flex flex-col-reverse'>
            <dt class='text-sm font-medium text-gray-600'>#React #Next.js</dt>
            <dd class='text-sm  text-red-800'>Deadline: 31st June, 2022</dd>
          </div>

          <div class='flex flex-col-reverse ml-3 sm:ml-6'>
            <dt class='text-sm font-medium text-indigo-600'>Onsite</dt>
            <dd class='text-sm  text-gray-800'>Vaccancy: 3</dd>
          </div>
        </dl>
      </h1>
    </div>
  );
};

export default JobCard;
