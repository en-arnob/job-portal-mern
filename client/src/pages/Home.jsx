import React, { useContext, useEffect } from "react";
import { UsersContext } from "../hooks/UsersContext";
import jwt_decode from "jwt-decode";
import JobCard from "./components/JobCard";
import { FaMapMarkerAlt, FaUserCircle } from "react-icons/fa";
import JobCardSponsored from "./components/JobCardSponsored";

const Home = () => {
  const [user, setUser] = useContext(UsersContext);
  const token = localStorage.getItem("myToken");

  return (
    <div className='text-xl'>
      {user && (
        <header class='bg-gray-50 rounded-lg md:mx-6'>
          <div class='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
            <div class='sm:justify-between sm:items-center sm:flex'>
              <div class='text-center sm:text-left'>
                <h1 class=' text-2xl  text-stone-800 sm:text-3xl'>
                  Welcome Back, {user.fullname}{" "}
                </h1>
                {user.usertype === "recruiter" ? (
                  <p class='mt-1.5 text-lg text-gray-500'>
                    Create a new job opportunity in{" "}
                    <span className='text-indigo-600 font-bold'>
                      {user.organization}
                    </span>{" "}
                    🎉
                  </p>
                ) : (
                  <p class='mt-1.5 text-lg text-green-500'>
                    Explore ICT.jobs or instantly search for your next job! 🔎
                  </p>
                )}
              </div>

              <div class='flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center'>
                <div class='relative'>
                  <label class='sr-only' for='search'>
                    Search
                  </label>

                  <input
                    class='w-full h-10 pl-4 pr-10 text-sm bg-white border-none rounded-full shadow-sm sm:w-56'
                    id='search'
                    type='search'
                    placeholder='Search for jobs...'
                  />

                  <button
                    class='absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1'
                    type='button'
                    aria-label='Submit Search'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-4 h-4'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                      />
                    </svg>
                  </button>
                </div>
                {user.usertype === "recruiter" && (
                  <button
                    class='block px-5 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring'
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
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </div>
  );
};

export default Home;
