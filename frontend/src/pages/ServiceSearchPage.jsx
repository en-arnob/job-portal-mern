import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";
import { FaMapMarkerAlt } from "react-icons/fa";
import sadface from "../assets/images/sadface.svg";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import dummy from "../assets/images/blank-profile-picture.webp";

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
Modal.setAppElement("*");

const ServiceSearchPage = () => {
  const location = useLocation();
  const [prop, setProp] = useState(location.state.inp);
  const [cand, setCand] = useState([]);
  const [errors, setErrors] = useState([]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(candidate) {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    getOtsCand(prop);
  }, [prop]);
  const getOtsCand = (prop) => {
    axios
      .get(`/api/ots/get-candidates/${prop.serviceType}/${prop.location}`)
      .then((response) => {
        const allJobs = response.data.otsCandidates;
        setCand(allJobs);
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  const handleChange = ({ currentTarget: input }) => {
    setProp({ ...prop, [input.name]: input.value });
  };
  const navigate = useNavigate();
  const toCandidateProfile = (candidateId) => {
    navigate("/profileView", {
      state: {
        userId: candidateId,
        userType: "candidate",
        pageNumber: 0,
        fromPage: "availableJobSeeker",
      },
    });
  };
  if (prop.serviceType === "" || prop.location === "") {
    return (
      <div className='min-h-screen'>
        <div className='md:grid grid-cols-3 gap-4 justify-around md:px-4'>
          <div>
            <select
              className='w-full p-3 text-sm border-gray-200 '
              onChange={handleChange}
              name='serviceType'
              id='serviceType'
            >
              <option value='NULL'>What do you need?</option>
              <option value='IT Support'>IT Support</option>
              <option value='Networking'>Networking</option>
              <option value='Servers'>Server</option>
              <option value='IT Home Service'>IT Home Service</option>
              <option value='Cyber Security'>Cyber Security</option>
              <option value='Digital Device Installation'>
                Digital Device Installation
              </option>
              <option value='Electrical Services'>Electrical Services</option>
              <option value='Data Recovery'>Data Recovery</option>
              <option value='Video Filming'>Video Filming</option>
              <option value='TV'>TV</option>
            </select>
          </div>

          <div className='flex'>
            <input
              type='text'
              name='location'
              id='location'
              onChange={handleChange}
              placeholder='Enter your location'
              value={prop.location}
              className='flex flex-1 text-right border sm:text-sm  focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400'
            />
            <span className='flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700'>
              <FaMapMarkerAlt />
            </span>
          </div>
          <div>
            <button
              // onClick={() => navigate("/service-search", { state: { inp } })}
              // href='/one-time-service'
              className='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 no-underline'
            >
              <span className='mx-2'>Search</span>
            </button>
          </div>
        </div>
        <div className='p-4'>
          <img
            className='h-72 w-72 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover '
            src={sadface}
            alt=''
          />
          <h4 className='text-xl font-normal'>
            Make sure you have selected the service type and entered your
            location!
          </h4>
        </div>
      </div>
    );
  }

  // console.log(cand);

  return (
    <div className='min-h-screen'>
      <h4 className='ml-4'>
        {prop.serviceType} providers in {prop.location}
      </h4>
      <div className='flex divide-x-2 rounded text-center items-center justify-center text-gray-800 divide-gray-300'>
        <button type='button' className='px-3 py-1'>
          List View
        </button>
        <button type='button' className='px-3 py-1'>
          Map View
        </button>
        <div className='md:grid grid-cols-3 gap-4 justify-around md:px-4'>
          <div>
            <select
              className='w-full p-3 text-sm border-gray-200 '
              onChange={handleChange}
              name='serviceType'
              id='serviceType'
            >
              <option value='NULL'>What do you need?</option>
              <option value='IT Support'>IT Support</option>
              <option value='Networking'>Networking</option>
              <option value='Servers'>Server</option>
              <option value='IT Home Service'>IT Home Service</option>
              <option value='Cyber Security'>Cyber Security</option>
              <option value='Digital Device Installation'>
                Digital Device Installation
              </option>
              <option value='Electrical Services'>Electrical Services</option>
              <option value='Data Recovery'>Data Recovery</option>
              <option value='Video Filming'>Video Filming</option>
              <option value='TV'>TV</option>
            </select>
          </div>

          <div className='flex'>
            <input
              type='text'
              name='location'
              id='location'
              onChange={handleChange}
              placeholder='Enter your location'
              value={prop.location}
              className='flex flex-1 text-right border sm:text-sm  focus:ring-inset dark:border-gray-700 dark:text-gray-100 dark:bg-gray-800 focus:ring-violet-400'
            />
            <span className='flex items-center px-3 pointer-events-none sm:text-sm rounded-r-md dark:bg-gray-700'>
              <FaMapMarkerAlt />
            </span>
          </div>
          {/* <div>
            <button
              // onClick={() => navigate("/service-search", { state: { inp } })}
              // href='/one-time-service'
              class='inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600 no-underline'
            >
              <span class='mx-2'>Search</span>
            </button>
          </div> */}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel='Hire'
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
            Hire OTS for {prop.serviceType}
          </h2>
          <button onClick={closeModal}>close</button>
          <div>Call</div>
        </Modal>
      </div>

      {/* <div className='grid grid-cols md:grid-cols-4'>{displayCands}</div> */}
      <div className='grid grid-cols md:grid-cols-4'>
        {cand && cand !== undefined ? (
          <div>
            {cand.map((candidate) => {
              return (
                <div
                  key={candidate._id}
                  className='mt-4 p-2 m-2 rounded-md shadow-md bg-gray-50 text-gray-800'
                >
                  {candidate.profileImage === undefined ? (
                    <img
                      className='mb-3 w-20 h-22 rounded-full shadow-lg'
                      src={dummy}
                      alt='Userimage'
                    />
                  ) : (
                    <img
                      className='mb-3 w-20 h-22 rounded-full shadow-lg'
                      src={`http://job-portal.laptop-repair-putney.co.uk${candidate.profileImage}`}
                      alt='Userimage'
                    />
                  )}
                  <div className='flex flex-col justify-between p-6 space-y-3'>
                    <div className='space-y-2'>
                      <h2 className='text-3xl font-semibold tracking-wide'>
                        {candidate.fullname}
                      </h2>
                      <p className='text-gray-800'>{candidate.phone}</p>
                    </div>
                    <button
                      onClick={() => {
                        toCandidateProfile(candidate._id);
                      }}
                      type='button'
                      className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50'
                    >
                      Profile
                    </button>

                    <button
                      onClick={() => {
                        openModal(candidate);
                      }}
                      type='button'
                      disabled
                      className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-200 text-gray-50'
                    >
                      Hire
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>NO DATA</div>
        )}
      </div>
    </div>
  );
};

export default ServiceSearchPage;
