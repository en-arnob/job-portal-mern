import React, { useContext } from "react";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserImage from "../assets/images/blank-profile-picture.webp";
import ClientPosts from "./components/ClientPosts";

const MyPostsPage = () => {
  const [user, setUser] = useContext(UsersContext);
  return (
    <div>
      {user && (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="userDetails md:mt-3">
              <div className=" px-2 mx-4 rounded">
                <div class="w-full px-8 py-4 mx-auto mt-16 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 rounded-lg shadow-md dark:bg-gray-800">
                  <div class="flex justify-center -mt-16 md:justify-end">
                    <img
                      class="object-cover w-48 h-48 border-2 border-white rounded-full dark:border-blue-400"
                      alt="Testimonial avatar"
                      src={UserImage}
                    />
                  </div>

                  <h2 class="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">
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
