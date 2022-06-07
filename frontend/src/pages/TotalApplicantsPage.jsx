import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

import userImage from "../assets/images/blank-profile-picture.webp";

const TotalApplicantsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const jobDetails = location.state.jobDetails;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getUserDetails();
  }, []);
  const toApplicatsProfile = (arrElId) => {
    navigate("/profileView", {
      state: { userId: arrElId, userType: "candidate" },
    });
  };

  const getUserDetails = () => {
    axios
      .get(`http://127.0.0.1:8000/api/job/${jobDetails._id}`)
      .then((response) => {
        const catchData = response.data.data.job.applicants;
        setUserData(catchData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rejectApplicant = (applicantId, e) => {
    // e.preventDefault();
    try {
      axios.patch(
        `http://127.0.0.1:8000/api/job/rejectApplicant/${jobDetails._id}/${applicantId}`
      );
      setUserData(userData.filter((item) => item._id !== applicantId));
      navigate("/mypost");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Container>
        <div className="text-center">
          <p className=" text-2xl  text-rose-700 sm:text-3xl font-semibold">
            <span className=" text-2xl  text-slate-700 sm:text-3xl">
              Job Title:
            </span>{" "}
            {jobDetails.title}
          </p>
          <p className=" text-xs  text-rose-700 sm:text-sm  font-semibold">
            <span className=" text-sm  text-slate-700 sm:text-sm">
              Total Applicant:
            </span>{" "}
            {jobDetails.applicants.length} /{" "}
            <span className=" text-sm  text-slate-700 sm:text-sm">
              Total Vacancy:
            </span>{" "}
            {jobDetails.vaccancy}
          </p>
        </div>
        <Row>
          {userData &&
            userData.map((arrEl) => {
              return (
                <Col lg={4} md={6} sm={12}>
                  <div class="max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
                    <div class="flex flex-col items-center py-5">
                      <img
                        class="mb-3 w-20 h-22 rounded-full shadow-lg"
                        src={userImage}
                        alt="Userimage"
                      />
                      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        {arrEl.fullname}
                      </h5>
                      <span class="text-sm text-gray-500 dark:text-gray-400">
                        {arrEl.designation}
                      </span>
                      <div class="flex mt-4 space-x-3 lg:mt-6">
                        <button
                          onClick={() => {
                            toApplicatsProfile(arrEl._id);
                          }}
                          class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline"
                        >
                          View Profile
                        </button>
                        <button
                          onClick={() => {
                            rejectApplicant(arrEl._id);
                          }}
                          class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 no-underline"
                        >
                          Reject
                        </button>
                      </div>
                    </div>
                  </div>
                </Col>
              );
            })}
          {/* <Col lg={4} md={6} sm={12}>
            <div class="max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
              <div class="flex flex-col items-center py-5">
                <img
                  class="mb-3 w-20 h-22 rounded-full shadow-lg"
                  src={userImage}
                  alt="Userimage"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {userData.fullname}
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  {userData.designation}
                </span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                  <a
                    href="#"
                    class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 no-underline"
                  >
                    View Profile
                  </a>
                  <a
                    href="#"
                    class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 no-underline"
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

export default TotalApplicantsPage;
