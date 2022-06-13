import React, { useState, useContext, useEffect } from "react";

import axios from "axios";
import Moment from "moment";
import arnobx from "../assets/images/arnobx.jpeg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state.userId;
  const userType = location.state.userType;
  const recruiterId = location.state.recruiterId;
  Moment.locale("en");

  const [userData, setUserData] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = () => {
    axios
      .get(`http://127.0.0.1:8000/userDetails/${userId}/${userType}`)
      .then((response) => {
        const catchData = response.data.data.user;
        setUserData(catchData);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const messageBtn = () => {
    const conversationDetails = {
      senderId: recruiterId,
      receiverId: userId,
    };
    const res = axios.post(
      "http://127.0.0.1:8000/api/live-chat/conversation",
      conversationDetails
    );
    if (res) navigate("/messenger");
  };
  return (
    <div className="">
      <div className=" px-2 mx-4 rounded">
        <div class="w-full px-8 py-4 mx-auto mt-16 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 rounded-lg shadow-md dark:bg-gray-800">
          <div class="flex justify-center -mt-16 md:justify-end">
            <img
              class="object-cover w-48 h-48 border-2 border-white rounded-full dark:border-blue-400"
              alt="Testimonial avatar"
              src={arnobx}
            />
          </div>

          <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
            {userData.fullname}
          </h2>

          <div class="mt-2 text-gray-600 dark:text-gray-200">
            {userData.designation || "No Data"}
            <p className="flex gap-1">
              <FaMapMarkerAlt className="text-red-500 mt-1" />
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 px-6 mx-6 bg-gray-200 rounded-lg">
        <div class="flex justify-center">
          <button class="flex items-center h-12 px-2 py-2 text-center text-gray-700 border border-b-0 border-gray-300 sm:px-4 dark:border-gray-500 rounded-t-md -px-1 dark:text-white whitespace-nowrap focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <span class="mx-1 text-sm sm:text-base">Profile</span>
          </button>

          <button class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>

            <span class="mx-1 text-sm sm:text-base">Dowload Resume</span>
          </button>

          <button
            onClick={messageBtn}
            class="flex items-center h-12 px-2 py-2 text-center text-gray-700 bg-transparent border-b border-gray-300 sm:px-4 dark:border-gray-500 -px-1 dark:text-white whitespace-nowrap cursor-base focus:outline-none hover:border-gray-400 dark:hover:border-gray-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-4 h-4 mx-1 sm:w-6 sm:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>

            <span class="mx-1 text-sm disabled sm:text-base">Message</span>
          </button>
        </div>
      </div>
      <div className="mx-6 mt-4 mb-4 ">
        <div class="bg-white  p-3 shadow-sm rounded-lg">
          <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span clas="text-green-500">
              <svg
                class="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span class="tracking-wide">About</span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Full Name</div>
                <div class="px-4 py-2">{userData.fullname}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Address</div>
                <div class="px-4 py-2">West Razabazar, Dhaka</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2">{userData.gender}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Contact No.</div>
                <div class="px-4 py-2">{userData.phone}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">
                  Last/Current Organization
                </div>
                <div class="px-4 py-2">{userData.institute}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Designation</div>
                <div class="px-4 py-2"> {userData.designation}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email</div>
                <div class="px-4 py-2">
                  <a class="text-blue-800" href="mailto:jane@example.com">
                    {userData.email}
                  </a>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Birthday</div>
                <div class="px-4 py-2">
                  {Moment(userData.birthday).format("d MMM YYYY")}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Education</div>
                <div class="px-4 py-2">{userData.edu || "No Data"}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Details</div>
                <div class="px-4 py-2">{userData.eduDetails || "No Data"}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Expertise</div>
                <div class="px-4 py-2">{userData.expertise || "No Data"}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Skills</div>
                <div class="px-4 py-2">{userData.skills || "No Data"}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Experience</div>
                <div class="px-4 py-2">{userData.experience || "No Data"}</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Certification</div>
                <div class="px-4 py-2">
                  {userData.certification || "No Data"}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Portfolio</div>
                <div class="px-4 py-2">
                  {userData.portfolioLink || "No Data"}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full lg:w-9/12 px-4">
              <p class="font-normal text-pink-500">Bio</p>
              <p class="mt-4 text-lg leading-relaxed text-blueGray-700">
                {userData.bio || "No Data"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
