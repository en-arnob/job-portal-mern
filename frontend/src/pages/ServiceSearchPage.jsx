import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-modal";

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
  const [prop, setProp] = useState({});
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
    if (location.state) {
      setProp(location.state.inp);
    }

    getOtsCand();
  }, [location]);
  const getOtsCand = () => {
    axios
      .get(
        `/api/ots/get-candidates/${location.state.inp.serviceType}/${location.state.inp.location}`
      )
      .then((response) => {
        const allJobs = response.data.otsCandidates;
        setCand(allJobs);
      })
      .catch((error) => {
        setErrors(error);
      });
  };
  const displayCands = cand.map((candidate) => {
    return (
      <div className='ml-4 mt-4 max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800'>
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
            type='button'
            className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-600 text-gray-50'
          >
            Message
          </button>
          <button
            type='button'
            className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-green-600 text-gray-50'
          >
            Call
          </button>
          <button
            onClick={() => {
              openModal(candidate);
            }}
            type='button'
            className='flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-red-600 text-gray-50'
          >
            Hire
          </button>
        </div>
      </div>
    );
  });

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

      <div className='grid grid-cols md:grid-cols-4'>{displayCands}</div>
    </div>
  );
};

export default ServiceSearchPage;
