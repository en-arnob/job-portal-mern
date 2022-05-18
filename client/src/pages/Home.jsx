import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../hooks/UsersContext";
import JobCard from "./components/JobCard";
import { FaMapMarkerAlt } from "react-icons/fa";
import JobCardSponsored from "./components/JobCardSponsored";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useContext(UsersContext);
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    axios
      .get("http://127.0.0.1:8000/api/jobs/all")
      .then((response) => {
        const allJobs = response.data.jobs;
        console.log(allJobs);
        setJobs(allJobs);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div className='text-xl'>
      {user && (
        <header className='bg-gray-50 rounded-lg md:mx-6'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
            <div className='sm:justify-between sm:items-center sm:flex'>
              <div className='text-center sm:text-left'>
                <h1 className=' text-2xl  text-stone-800 sm:text-3xl'>
                  Welcome Back, {user.fullname}{" "}
                </h1>
                {user.usertype === "recruiter" ? (
                  <p className='mt-1.5 text-lg text-gray-500'>
                    Create a new job opportunity in{" "}
                    <span className='text-indigo-600 font-bold'>
                      {user.organization}
                    </span>{" "}
                    🎉
                  </p>
                ) : (
                  <p className='mt-1.5 text-lg text-green-500'>
                    Explore ICT.jobs or instantly search for your next job! 🔎
                  </p>
                )}
              </div>

              <div className='flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center'>
                <div className='relative'>
                  <label className='sr-only' htmlFor='search'>
                    Search
                  </label>

                  <input
                    className='w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56'
                    id='search'
                    type='search'
                    placeholder='Search for jobs...'
                  />

                  <button
                    className='absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1'
                    type='button'
                    aria-label='Submit Search'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-4 h-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      strokeWidth='2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </button>
                </div>
                {user.usertype === "recruiter" && (
                  <button
                    className='block px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring'
                    type='button'
                  >
                    Post Job
                  </button>
                )}
              </div>
            </div>
          </div>
        </header>
      )}
      <h1 className='flex items-center justify-center gap-2 text-center font-normal text-2xl p-4'>
        Latest job offerings nearby <FaMapMarkerAlt className='text-red-500' />
      </h1>

      <div className='my-4 md:mx-6 grid md:grid-cols-4 gap-4'>
        <JobCardSponsored />
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;
