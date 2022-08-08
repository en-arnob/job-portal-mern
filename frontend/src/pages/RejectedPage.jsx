import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import dummy from "../assets/images/blank-profile-picture.webp";
import Breadcumb from "./components/Breadcumb";

const RejectedPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state.job;
  const [userData, setUserData] = useState([]);
  // console.log(jobDetails);
  const fallback = "/applicants";

  useEffect(() => {
    const getUserDetails = () => {
      axios
        .get(`/api/jobs/${job._id}/applicants/rejected`)
        .then((response) => {
          const catchData =
            response.data.rejectedDocument[0].rejectedApplicants;
          setUserData(catchData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUserDetails();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [job]);
  //   console.log(job);
  const toApplicatsProfile = (arrElId) => {
    navigate("/profileView", {
      state: {
        userId: arrElId,
        userType: "candidate",
        recruiterId: job.authorId,
        fallback,
      },
    });
  };

  const retakeApplicant = (applicantId) => {
    // e.preventDefault();
    try {
      axios.patch(`/api/jobs/${job._id}/${applicantId}/retake`);
      setUserData(userData.filter((item) => item._id !== applicantId));
      navigate("/mypost");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='min-h-screen'>
      <Breadcumb pageName='Applicants' back={"/mypost"} pageNum={0} />
      <Container>
        <div className='text-center'>
          <p className=' text-2xl  text-rose-700 sm:text-3xl font-semibold'>
            {job.title}
          </p>
          <p className=' text-xs  text-rose-700 sm:text-sm  font-semibold'>
            <span className=' text-lg  text-slate-700 sm:text-sm'>
              Rejection List
            </span>{" "}
          </p>
        </div>
        <Row>
          {userData &&
            userData.map((arrEl) => {
              return (
                <Col key={arrEl._id} lg={4} md={6} sm={12}>
                  <div className='max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3'>
                    <div className='flex flex-col items-center py-5'>
                      {arrEl.profileImage === undefined ? (
                        <img
                          className='mb-3 w-20 h-22 rounded-full shadow-lg'
                          src={dummy}
                          alt='Userimage'
                        />
                      ) : (
                        <img
                          className='mb-3 w-20 h-22 rounded-full shadow-lg'
                          src={`http://job-portal.laptop-repair-putney.co.uk${arrEl.profileImage}`}
                          alt='Userimage'
                        />
                      )}
                      <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
                        {arrEl.fullname}
                      </h5>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {arrEl.designation || "No Designation"}
                      </span>
                      <div className='flex mt-4 space-x-3 lg:mt-6'>
                        <button
                          onClick={() => {
                            retakeApplicant(arrEl._id);
                          }}
                          className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline'
                        >
                          Retake
                        </button>
                        <button
                          onClick={() => {
                            toApplicatsProfile(arrEl._id);
                          }}
                          className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 no-underline'
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          {/* <Col lg={4} md={6} sm={12}>
            <div className="max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
              <div className="flex flex-col items-center py-5">
                <img
                  className="mb-3 w-20 h-22 rounded-full shadow-lg"
                  src={userImage}
                  alt="Userimage"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {userData.fullname}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {userData.designation}
                </span>
                <div className="flex mt-4 space-x-3 lg:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline"
                  >
                    View Profile
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 no-underline"
                  >
                    Reject
                  </a>
                </div>
              </div>
            </div>
          </Col>{" "} */}
        </Row>
      </Container>
    </div>
  );
};

export default RejectedPage;
