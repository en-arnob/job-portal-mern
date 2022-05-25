import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { RiUserVoiceLine } from "react-icons/ri";
import { MdOutlineLockClock } from "react-icons/md";

const JobView = () => {
  const location = useLocation();
  const job = location.state.job;

  return (
    <div className='m-4 grid grid-cols-1 md:grid-cols-3 md:divide-x divide-green-500  gap-2'>
      <div className=' w-full h-auto col-span-2'>
        <div className='p-4'>
          <div className='flex gap-4 bg-green-100 p-4 rounded-lg text-3xl font-normal text-stone-800'>
            {" "}
            <FiBriefcase className='text-green-500' /> {job.title}
          </div>
          <div className='mt-4  mx-2 flex md:flex-row flex-col '>
            <div className=' text-blue-800 flex gap-2 mr-4'>
              <h1 className='text-xl flex gap-2 font-normal'>
                <HiOutlineOfficeBuilding className=' mt-1' />
                Company Name:
              </h1>
              <h1 className='text-xl font-normal'>
                {job.authorId.organization}
              </h1>
            </div>
            <div className='flex gap-2 text-indigo-700'>
              <h1 className='text-xl flex gap-2 font-normal'>
                <RiUserVoiceLine className=' mt-1' />
                Posted By:
              </h1>
              <h1 className='text-xl font-normal'>{job.authorId.fullname}</h1>
            </div>
          </div>
          <div className='flex gap-2 p-2 rounded-lg'>
            <p className='flex gap-2'>
              <HiOutlineClock className='mt-1' />
              {job.dateOfPosting}
            </p>
            <p className='flex gap-2'>
              <MdOutlineLockClock className='mt-1' />
              Deadline: {job.dateOfPosting}
            </p>
          </div>
          <div className='bg-yellow-50 p-6 rounded-lg'>
            <p className='text-lg font-normal'>{job.body}</p>
          </div>
        </div>
      </div>
      <div className=' w-full h-auto'>
        <div className='p-4'>
          <div className='flex gap-4 bg-green-50 p-4 rounded-lg text-3xl font-normal text-stone-800'>
            {" "}
            <FiBriefcase className='text-green-500' /> Similar Jobs
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobView;
