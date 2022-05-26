import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserImage from "../assets/images/blank-profile-picture.webp";
import ClientPosts from "./components/ClientPosts";

const MyPostsPage = () => {
  const [user, setUser] = useContext(UsersContext);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getJobDtails();
  }, []);

  const getJobDtails = () => {
    axios
      .get(`http://127.0.0.1:8000/api/jobs/client-job/${user.id}`)
      .then((response) => {
        const catchData = response.data.job;
        setUserData(catchData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {user && (
        <Container>
          <Row>
            <Col
              lg={3}
              md={4}
              sm={12}
              className="bg-slate-500 p-6 userImagePrev"
            >
              <div className="text-center my-3">
                <img
                  src={UserImage}
                  className="img-fluid rounded-circle"
                  alt="CandidatesIamge"
                />
              </div>
              <h5 className="userName text-center text-gray-200 text-uppercase">
                {user.fullname}
              </h5>
              <p className="userName text-center mt-3 text-gray-200">
                Total Post:{userData.length}
              </p>
            </Col>
            <Col lg={9} md={8} sm={12} className="userDetails md:mt-3">
              <ClientPosts totalPost={userData} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MyPostsPage;
