import React, { useContext, useEffect, useState } from "react";
import { UsersContext } from "../hooks/UsersContext";

import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineArrowDown, AiOutlineFire } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import JobsSection from "./components/JobsSection";
import CityJobsSection from "./components/CityJobsSection";

import Select from "react-select";
import OTSCall from "./components/OTSCall";

const areaOptions = [
  { value: "Dhaka", label: "Dhaka" },
  { value: "Sylhet", label: "Sylhet" },
  { value: "Chittagong", label: "Chittagong" },
  { value: "Mymensingh", label: "Mymensingh" },
  { value: "Rajshahi", label: "Rajshahi" },
];
const catagoryOptions = [
  { value: "IT-Software-Web", label: "IT-Software-Web" },
  { value: "Accounting-Finance", label: "Accounting-Finance" },
  { value: "Bank", label: "Bank" },
  { value: "Engineer-Architects", label: "Engineer-Architects" },
  { value: "Textile", label: "Textile" },
  { value: "HR", label: "HR" },
  { value: "Management", label: "Management" },
  { value: "Graphic-Design", label: "Graphic-Design" },
  { value: "Product-Operation", label: "Product-Operation" },
  { value: "Digital-Marketing", label: "Digital-Marketing" },
  { value: "Sales/Marketing", label: "Sales/Marketing" },
  { value: "Security-Consultant", label: "Security-Consultant" },
  { value: "Research", label: "Research" },
  { value: "Electrical", label: "Electrical" },
  { value: "Telecommunications", label: "Telecommunications" },
  { value: "Medical", label: "Medical" },
  { value: "Pharmaceuticals", label: "Pharmaceuticals" },
  { value: "NGO", label: "NGO" },
  { value: "Data-Entry", label: "Data-Entry" },
  { value: "Driving", label: "Driving" },
  { value: "Law", label: "Law" },
];

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UsersContext);
  const [jobs, setJobs] = useState([]);
  const [errors, setErrors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [status, setStatus] = useState("");
  const location = useLocation();

  //city

  const [city, setCity] = useState({});
  const [catagory, setCatagory] = useState({});
  const [sortType, setSortType] = useState("");

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
    setStatus("loading");
    axios
      .get("/api/jobs/all")
      .then((response) => {
        const allJobs = response.data.jobs;
        setJobs(allJobs);
        setStatus("success");
      })
      .catch((error) => {
        setErrors(error);
        setStatus("error");
      });
  };
  const nav2Cat = () => {
    navigate("/categoryPage", { state: { catagory } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='text-xl min-h-screen'>
      {user && (
        <header className='bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 md:rounded-lg md:mx-6'>
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
                {user.usertype === "recruiter" && (
                  <div className='flex gap-2 justify-between'>
                    <button
                      onClick={() => navigate("/createPost")}
                      className='flex gap-2 items-center justify-center px-3 py-3 text-sm font-medium text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring'
                      type='button'
                    >
                      Create Job <AiOutlineArrowDown className='text-lg' />
                    </button>
                    <button
                      onClick={() => navigate("/show-UserCandidates")}
                      className='flex gap-2 items-center justify-center px-3 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring'
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
      <OTSCall />
      <div className='grid md:grid-cols-3 py-2 px-2 bg-stone-100 mt-4 mx-4 rounded-lg'>
        <div className='justify-center'>
          <div className='flex gap-4 my-4 justify-center items-center '>
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
          </div>
        </div>
        <div className='justify-center'>
          <div className='flex gap-4 my-4 justify-center items-center '>
            <h1
              className='items-center justify-center px-3 py-2 text-base font-medium text-stone-900 transition  rounded-sm  '
              type='button'
            >
              Browse from City
            </h1>
            <Select
              options={areaOptions}
              placeholder='Select your city'
              isSearchable
              isClearable={true}
              name='fuc'
              onChange={setCity}
            />
          </div>
        </div>

        <div className='justify-center'>
          <div className='flex gap-4 my-4 justify-center items-center '>
            <Select
              options={catagoryOptions}
              placeholder='Select Catagory'
              isSearchable
              isClearable
              name='fu'
              onChange={setCatagory}
            />
            <button
              onClick={nav2Cat}
              className='items-center justify-center px-3 py-2 text-sm font-medium text-white transition  bg-green-700 rounded-sm hover:bg-gray-600 focus:outline-none focus:ring'
              type='button'
            >
              Browse by Catagory
            </button>
          </div>
        </div>
      </div>
      <div>
        {city && city.value ? (
          <div>
            <h1 className='flex items-center justify-center gap-2 text-center font-normal text-2xl p-4'>
              Hot jobs in {city.value}{" "}
              <FaMapMarkerAlt className='text-red-500' />
            </h1>
            <CityJobsSection
              jobs={jobs}
              status={status}
              errors={errors}
              searchTerm={searchTerm}
              location={location}
              city={city.value}
            />
          </div>
        ) : (
          <div>
            <h1 className='flex items-center justify-center gap-2 text-center font-normal text-2xl p-4'>
              Recent Job Offerings <AiOutlineFire className='text-red-500' />
            </h1>
            <JobsSection
              jobs={jobs}
              status={status}
              errors={errors}
              searchTerm={searchTerm}
              location={location}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
