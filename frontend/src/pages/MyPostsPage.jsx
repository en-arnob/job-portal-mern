import React, { useContext, useState, useEffect } from "react";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";

import ClientPosts from "./components/ClientPosts";
import dummy from "../assets/images/blank-profile-picture.webp";
import axios from "axios";

const MyPostsPage = () => {
  const [user, setUser] = useContext(UsersContext);
  const [userData, setUserData] = useState("");
  useEffect(() => {
    getUserDetails();
  }, []);
  const getUserDetails = () => {
    axios
      .get(`http://127.0.0.1:8000/userDetails/${user.id}/${user.usertype}`)
      .then((response) => {
        const catchData = response.data.data.user;
        setUserData(catchData);
      })
      .catch((error) => {
        // console.log(error);
      });
  };
  return (
    <div>
      {user && (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className='userDetails md:mt-3'>
              <div className=' px-2 mx-4 rounded'>
                <div class='w-full px-8 py-4 mx-auto mt-16 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-lg shadow-md dark:bg-gray-800'>
                  <div class='flex justify-center -mt-16 md:justify-end'>
                    {userData.profileImage === undefined ? (
                      <img
                        class='object-cover w-48 h-48 border-2 border-white rounded-full dark:border-blue-400'
                        alt='profile'
                        src={dummy}
                      />
                    ) : (
                      <img
                        class='object-cover w-48 h-48 border-2 border-white rounded-full dark:border-blue-400'
                        alt='profileImage'
                        src={`http://localhost:8000/${userData.profileImage}`}
                      />
                    )}
                  </div>

                  <h2 class='mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl'>
                    {user.fullname}
                  </h2>
                </div>
              </div>
              <div>
                <ClientPosts user={user} />
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MyPostsPage;
