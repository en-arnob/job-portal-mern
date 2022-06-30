import React, { useState, useEffect } from "react";
import axios from "axios";
import JobCardForCat from "./JobCard";
import { useLocation } from "react-router-dom";
import Breadcumb from "./Breadcumb";
import { BiCategory } from "react-icons/bi";
import TextTruncate from "react-text-truncate";
import { RiUserVoiceLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Moment from "moment";
const categoryArr = [
  "IT-Software-Web",
  "Accounting-Finance",
  "Bank",
  "Engineer-Architects",
  "Textile",
  "HR",
  "Management",
  "Graphic-Design",
  "Product-Operation",
  "Digital-Marketing",
  "Sales-Marketing",
  "Security-Consultant",
  "Research",
  "Electrical",
  "Telecommunications",
  "Medical",
  "Pharmaceuticals",
  "NGO",
  "Data-Entry",
  "Driving",
  "Law",
];

const CategoryJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [catCount, setCatCount] = useState([]);
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const fallback = "/categoryPage";

  const toJobViewComponent = (job, fallback) => {
    navigate("/jobView", { state: { job, fallback } });
  };

  const location = useLocation();

  let locCat = "IT-Software-Web";
  if (location.state.catagory) {
    locCat = location.state.catagory.value;
  }
  const [category, setCategory] = useState(locCat || "");

  useEffect(() => {
    // if (location.state.catagory) {
    //   setCategory(locCat);
    // }
    axios
      .get(`/api/jobs/cat/counter`)
      .then((response) => {
        const count = response.data.counter;

        setCatCount(count);
      })
      .catch((error) => {
        setErrors(error);
        setStatus("error");
      });
    const getAllJobs = () => {
      setStatus("loading");
      axios
        .get(`/api/jobs/${category}`)
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
    getAllJobs();
  }, [category]);

  const setCat = (cat) => {
    // locCat = "";
    setCategory(cat);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(catCount);
  return (
    <div className='min-h-screen w-full'>
      <div className='container'>
        <div className=''>
          <Breadcumb pageName='Category Page' back={"/"} pageNum={0} />
          <h1 className='flex justify-center items-center gap-2 text-center mt-4 text-3xl text-blue-800 border-b-4 border-blue-800 py-2'>
            {category} Jobs <BiCategory />
          </h1>
        </div>

        <div className='grid grid-cols-4 gap-4'>
          <div className=' text-blue-800 rounded-md mt-4'>
            {/* {categoryArr.map((catagory) => {
              return (
                <div
                  className='hidden md:flex divide-x-2 rounded dark:text-gray-100 divide-gray-700 hover:text-gray-300'
                  key={catagory}
                  onClick={() => setCat(catagory)}
                >
                  <button type='button' className='px-3 py-1'>
                    {catagory}
                  </button>
                </div>
              );
            })} */}
            {Object.keys(catCount).map((catagory) => {
              return (
                <div
                  className='hidden md:flex divide-x-2  dark:text-gray-100 divide-gray-700 hover:text-gray-300 mt-2'
                  key={catagory}
                  onClick={() => setCat(catagory)}
                >
                  <button type='button' className=' px-3 py-1'>
                    {catagory} ({catCount[catagory]})
                  </button>
                </div>
              );
            })}
          </div>

          <div className=' col-span-4 md:col-span-3 mt-4'>
            {status === "loading" ? (
              <div className=' w-full h-auto md:h-auto flex flex-col mt-10 text-center items-center justify-center'>
                <div className='w-16 h-16 border-4 border-dashed  rounded-full animate-spin dark:border-violet-400'></div>
              </div>
            ) : (
              <div>
                {jobs.map((job) => {
                  return (
                    <div
                      onClick={() => {
                        toJobViewComponent(job, fallback);
                      }}
                      className='col-span-2 mx-2 lg:h-96'
                    >
                      <h1
                        className='relative block p-8 overflow-hidden border border-gray-100 rounded-lg'
                        href=''
                      >
                        <span className='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

                        <div className='justify-between sm:flex '>
                          <div>
                            <h5 className='text-xl font-medium text-indigo-900'>
                              {job.title}
                            </h5>
                            <p className='flex gap-3 font-normal text-lg  text-blue-700'>
                              <HiOutlineOfficeBuilding className='text-lg mt-1' />{" "}
                              {job.authorId.organization}
                            </p>
                            <p className='flex gap-3 text-sm font-normal text-blue-800'>
                              <RiUserVoiceLine className='text-lg' />{" "}
                              {job.authorId.fullname}
                            </p>
                          </div>

                          {/* <div className='flex-shrink-0 hidden ml-3 sm:block'>
            <img
              className='object-cover w-16 h-16 rounded-lg shadow-sm'
              src='https://www.designbust.com/download/1060/png/microsoft_logo_transparent512.png'
              alt=''
            />
          </div> */}
                        </div>

                        <div
                          onClick={(job, fallback) => {
                            toJobViewComponent();
                          }}
                          className='mt-2 cursor-pointer text-gray-600 sm:pr-8 text-sm font-normal  '
                        >
                          <TextTruncate
                            line={1}
                            element='span'
                            truncateText='…'
                            text={job.body
                              .replace(/<[^>]+>/g, " ")
                              .replace(/&.*;/g, " ")}
                            textTruncateChild={
                              <span
                                onClick={() => {
                                  toJobViewComponent(job, fallback);
                                }}
                                className='text-indigo-600 font-normal mx-2 cursor-pointer'
                              >
                                Read more
                              </span>
                            }
                          />
                        </div>

                        <dl className='flex mt-6'>
                          <div className='flex flex-col-reverse'>
                            <dt className='text-sm font-medium text-gray-600'>
                              {job.category || "Category"}
                            </dt>
                            <dd className='text-sm  text-red-800'>
                              Deadline:{" "}
                              {Moment.utc(job.deadline).format("MMM Do, YYYY")}
                            </dd>
                          </div>

                          <div className='flex flex-col-reverse ml-3 sm:ml-6'>
                            <dt className='text-sm font-medium text-indigo-600'>
                              {job.jobType}
                            </dt>
                            <dd className='text-sm  text-gray-800'>
                              Vaccancy: {job.vaccancy}
                            </dd>
                          </div>
                        </dl>
                        <p className='text-xs flex gap-2  text-gray-800'>
                          <HiOutlineClock className='text-sm' />{" "}
                          {Moment.utc(job.dateOfPosting).format("MMM Do, YYYY")}
                        </p>
                      </h1>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryJobs;
