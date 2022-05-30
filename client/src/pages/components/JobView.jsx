import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import { useLocation } from "react-router-dom";
import { FiBriefcase } from "react-icons/fi";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { RiUserVoiceLine } from "react-icons/ri";
import { MdOutlineLockClock } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const job = location.state.job;
  console.log(job);

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
      .get(`http://localhost:8000/apply/${job._id}/${usr.id}`)
      .then((response) => {
        setModalMsg(response.data.msg);
        openModal();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 md:divide-x divide-green-500  gap-2'>
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
          <div className='flex gap-2 p-2 rounded-lg'>
            <p className='flex gap-2'>
              <GiSkills className='mt-1' />
              Highlighited Skills: {job.tags}
            </p>
          </div>

          <div className=' p-6 rounded-lg'>
            <p className='text-lg font-normal'>{job.body}</p>
          </div>
          {usr && usr.usertype === "candidate" ? (
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
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
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
            <h1 className='text-lg text-red-500 font-normal py-2'>
              ** In order to apply to a job you need to login with a Job-Seeker
              Account
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
