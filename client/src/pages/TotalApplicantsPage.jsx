import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import userImage from "../assets/images/blank-profile-picture.webp";

const TotalApplicantsPage = () => {
  return (
    <div>
      <Container>
        <div className="text-center">
          <p className=" text-2xl  text-rose-700 sm:text-3xl font-semibold">
            <span className=" text-2xl  text-slate-700 sm:text-3xl">
              Job Title:
            </span>{" "}
            Lorem ipsum dolor sit amet.
          </p>
          <p className=" text-xs  text-rose-700 sm:text-sm  font-semibold">
            <span className=" text-sm  text-slate-700 sm:text-sm">
              Total Applicant:
            </span>{" "}
            21 /{" "}
            <span className=" text-sm  text-slate-700 sm:text-sm">
              Total Vacancy:
            </span>{" "}
            5
          </p>
        </div>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <div class="max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
              <div class="flex flex-col items-center py-5">
                <img
                  class="mb-3 w-20 h-22 rounded-full shadow-lg"
                  src={userImage}
                  alt="Userimage"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Md. Jannat-Ul Naim
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Laravel Developer
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
          </Col>{" "}
          <Col lg={4} md={6} sm={12}>
            <div class="max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
              <div class="flex flex-col items-center py-5">
                <img
                  class="mb-3 w-20 h-22 rounded-full shadow-lg"
                  src={userImage}
                  alt="Userimage"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Md. Jannat-Ul Naim
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Laravel Developer
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
          </Col>{" "}
          <Col lg={4} md={6} sm={12}>
            <div class="max-w-sm bg-slate-300 rounded-lg border border-slate-300 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-3">
              <div class="flex flex-col items-center py-5">
                <img
                  class="mb-3 w-20 h-22 rounded-full shadow-lg"
                  src={userImage}
                  alt="Userimage"
                />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  Md. Jannat-Ul Naim
                </h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">
                  Laravel Developer
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TotalApplicantsPage;
