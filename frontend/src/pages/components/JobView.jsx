import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { RiUserVoiceLine } from "react-icons/ri";
import { MdOutlineLockClock } from "react-icons/md";
import { SiPolywork } from "react-icons/si";
import { AiOutlineCoffee } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";

import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";
import Moment from "moment";
import Breadcumb from "./Breadcumb";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Modal.setAppElement("app");
Modal.setAppElement("*");

const JobView = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("myToken");
  let usr = "";
  if (token) {
    usr = jwt_decode(token).user;
  }
  const [userData, setUserData] = useState("");
  const [status, setStatus] = useState("");
  const getUserDetails = () => {
    setStatus("loading");
    axios
      .get(`/userDetails/${usr.id}/${usr.usertype}`)
      .then((response) => {
        const catchData = response.data.data.user;
        setUserData(catchData);
        setStatus("success");
      })
      .catch((error) => {
        // console.log(error);
        setStatus("error");
      });
  };
  const location = useLocation();
  const job = location.state.job;
  const fallback = location.state.fallback;
  // const fallbackk = location.state.fallbackk;
  // console.log(fallbackk);

  //moment
  const deadlineD = Moment.utc(job.deadline);
  const todayD = Moment.utc();

  const pageNum = location.state.pageNumber;

  const [similarJobs, setSimilarJobs] = useState([]);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getUserDetails();
    const getSimilarJobs = () => {
      axios
        .get(`/api/jobs/similar/${job.category}/${job._id}`)
        .then((response) => {
          const allJobs = response.data.jobs;

          setSimilarJobs(allJobs);
        })
        .catch((error) => {
          setErrors(error);
        });
    };
    getSimilarJobs();
  }, []);

  console.log(similarJobs);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#16003B";
  }

  function closeModal() {
    setIsOpen(false);
  }
  function navig() {
    navigate("/appliedJobs");
  }

  const [modalMsg, setModalMsg] = useState(" ");
  const applyJob = () => {
    axios
      .get(`/apply/${job._id}/${usr.id}`)
      .then((response) => {
        setModalMsg(response.data.msg);
        openModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // const displayBreadcumb = (fallback, fallbackk) => {
  //   if (fallback) {
  //     return <Breadcumb pageName='Job View' back={fallback} pageNum={0} />;
  //   } else if (fallbackk) {
  //     return (
  //       <Breadcumb pageName='Job View' back={fallbackk} pageNum={pageNum} />
  //     );
  //   } else {
  //     return <Breadcumb pageName='Job View' back={"/"} pageNum={pageNum} />;
  //   }
  // };
  const toJobViewComponent = (job, fallback) => {
    navigate("/jobView", { state: { job, fallback } });
  };
  return (
    <div>
      {fallback ? (
        <Breadcumb pageName='Job View' back={fallback} pageNum={0} />
      ) : (
        <Breadcumb pageName='Job View' back={"/"} pageNum={pageNum} />
      )}
      {/* {displayBreadcumb(fallback, fallbackk)} */}

      <div className='grid grid-cols-1 md:grid-cols-4 md:divide-x divide-green-500  gap-2 min-h-screen'>
        <div className=' w-full h-auto col-span-3'>
          <div className='p-4'>
            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100'>
              <h2 className='mb-8 text-4xl font-bold leading-none text-center'>
                {job.title}
              </h2>

              <ul className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
                <li className='flex items-center space-x-2'>
                  <HiOutlineOfficeBuilding />
                  <span>{job.authorId.organization}</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <RiUserVoiceLine />
                  <span>{job.authorId.fullname} </span>
                </li>
                <li className='flex items-center space-x-2'>
                  <FiMapPin />
                  <span>
                    {job.jobType === "Onsite"
                      ? `${job.address} ${job.cityName} ${job.zip}`
                      : job.jobType}
                  </span>
                </li>
                <li className='flex items-center space-x-2'>
                  <SiPolywork />
                  <span>{job.tags}</span>
                </li>
                <li className='flex items-center space-x-2'>
                  <HiOutlineClock />
                  <span>
                    {Moment.utc(job.dateOfPosting).format("MMM Do, YYYY")}
                  </span>
                </li>
                <li className='flex items-center space-x-2'>
                  <MdOutlineLockClock />
                  <span>
                    Deadline: {Moment.utc(job.deadline).format("MMM Do, YYYY")}
                  </span>
                </li>
              </ul>
            </div>
            {todayD > deadlineD ? (
              <p className='mb-8 p-2 inline text-base justify-center items-center text-center text-red-700 border-l-4 border-red-700 bg-red-50'>
                Opportunity Over
              </p>
            ) : (
              ""
            )}
            <div className='mt-4 p-4 bg-stone-100 rounded-lg'>
              <p className='text-base font-normal'>{parse(job.body)}</p>
            </div>
            {usr && usr.usertype === "candidate" ? (
              <div>
                {status === "loading" ? (
                  <div className=' w-full h-auto md:h-auto flex flex-col mt-10 text-center items-center justify-center'>
                    <div className='w-16 h-16 border-4 border-dashed  rounded-full animate-spin dark:border-violet-400'></div>
                  </div>
                ) : (
                  <div>
                    {userData.skills &&
                    userData.expertise &&
                    userData.bio &&
                    userData.institute &&
                    userData.profileImage ? (
                      <div className='block'>
                        <button
                          onClick={applyJob}
                          className='mt-4 relative inline-flex items-center px-8 py-3 overflow-hidden text-indigo-600 border border-current rounded group active:text-indigo-500 focus:outline-none focus:ring'
                          href='/download'
                        >
                          <span className='absolute left-0 transition-transform -translate-x-full group-hover:translate-x-4'>
                            <svg
                              className='w-5 h-5'
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                              />
                            </svg>
                          </span>

                          <span className='text-sm font-medium transition-all group-hover:ml-4'>
                            Apply to this job
                          </span>
                        </button>
                      </div>
                    ) : (
                      <div className='mt-4 '>
                        <h1 className='text-lg rounded-lg bg-rose-600 inline-block text-white px-2 py-1'>
                          You need to complete your profile before applying to a
                          job. We suggest you to provide your valid information
                          and real photo in order to not getting rejected by
                          recruiters.
                        </h1>
                        <h1 className='text-lg inline-block  px-2 py-1'>
                          You can update your information and profile image
                          anytime from
                          <span
                            onClick={() => navigate("/profile")}
                            className='text-blue-700 cursor-pointer font-semibold'
                          >
                            {" "}
                            Profile
                          </span>
                          .
                        </h1>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <h1 className='text-lg text-red-500 font-normal py-2'>
                ** In order to apply to a job you need to login with a
                Job-Seeker Account
              </h1>
            )}
          </div>
          <div>
            <Modal
              appElement={document.getElementById("app")}
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel='Apply Status Modal'
            >
              <h2
                className='text-2xl'
                ref={(_subtitle) => (subtitle = _subtitle)}
              >
                {job.title}
              </h2>

              <div className='text-xl py-4'>{modalMsg}</div>
              <button
                onClick={closeModal}
                className='bg-red-600 px-4 py-2 mt-2 text-white rounded-lg'
              >
                close
              </button>

              <button
                onClick={navig}
                className='pl-4 text-center justify-center items-center'
              >
                View Apply List
              </button>
            </Modal>
          </div>
        </div>
        <div className=' w-full h-auto'>
          <div className='p-4'>
            <div className='flex ml-2 gap-4 text-3xl font-normal text-stone-800'>
              {" "}
              <AiOutlineCoffee className='text-green-500' /> Similar Jobs
            </div>
            <div className='mt-4'>
              {similarJobs.map((job) => {
                return (
                  <p
                  onClick={() => {
                    toJobViewComponent(job, fallback);
                  }}
                   className='flex gap-2 mb-4 cursor-pointer'>
                    <IoCopyOutline /> {job.title} - {job.authorId.organization}
                  </p>
                );
              })}
            </div>

            <p className='mt-4'>
              {" "}
              <span className='text-red-500'>*</span> Currently no data for this
              section
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobView;
