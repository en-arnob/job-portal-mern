import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../hooks/UsersContext";

import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import JobsSection from "./components/JobsSection";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UsersContext);
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //pagination things

  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostPerPage] = useState(5);
  // const indexofLastPost = currentPage * postsPerPage;
  // const indexofFirstPost = indexofLastPost - postsPerPage;
  // const currentPosts = jobs.slice(indexofFirstPost, indexofLastPost);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = () => {
    axios
      .get("http://127.0.0.1:8000/api/jobs/all")
      .then((response) => {
        const allJobs = response.data.jobs;
        setJobs(allJobs);
        // console.log(allJobs);
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  return (
    <div className='text-xl'>
      {user && (
        <header className='bg-gray-50 rounded-lg md:mx-6'>
          <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
            <div className='sm:justify-between sm:items-center sm:flex'>
              <div className='text-center sm:text-left'>
                <h1 className=' text-2xl  text-rose-700 sm:text-3xl'>
                  Welcome Back,{" "}
                  <span className='font-normal text-gray-800'>
                    {user.fullname}
                  </span>
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
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
                    className='w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56'
                    id='search'
                    type='text'
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
                  <div className='flex gap-2 justify-between'>
                    <button
                      onClick={() => navigate("/createPost")}
                      className='flex gap-2 items-center justify-center px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring'
                      type='button'
                    >
                      Create Job <AiOutlineArrowDown className='text-lg' />
                    </button>
                    <button
                      onClick={() => navigate("/show-UserCandidates")}
                      className='flex gap-2 items-center justify-center px-5 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring'
                      type='button'
                    >
                      Available Job Seekers
                    </button>
                  </div>
                )}
                {user.usertype === "candidate" && (
                  <button
                    onClick={() => navigate("/appliedJobs")}
                    className='flex gap-2 items-center justify-center px-5 py-3 text-sm font-medium text-white transition bg-green-600 rounded-lg hover:bg-green-800 focus:outline-none focus:ring'
                    type='button'
                  >
                    Applied Jobs <GoTasklist className='text-lg' />
                  </button>
                )}
              </div>
            </div>
            <div className='mt-4'></div>
          </div>
          {/* <CreateJobSection /> */}
        </header>
      )}

      <h1 className='flex items-center justify-center gap-2 text-center font-normal text-2xl p-4'>
        Latest job offerings nearby <FaMapMarkerAlt className='text-red-500' />
      </h1>
      <JobsSection jobs={jobs} errors={errors} searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
