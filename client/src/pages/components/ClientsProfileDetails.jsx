import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserClientDetails from "./UserClientDetails";
import UserImage from "../../assets/images/blank-profile-picture.webp";
import { Link } from "react-router-dom";

const ClientsProfileDetails = () => {
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
              className="bg-slate-500 p-6 userImagePrev rounded-lg"
            >
              <div className="text-center my-3">
                <img
                  src={UserImage}
                  className="img-fluid rounded-circle"
                  alt="CandidatesIamge"
                />
              </div>
              <h5 className="userName text-center text-gray-200 text-uppercase">
                {userData.fullname}
              </h5>
              <p className="userName text-center mt-3 text-gray-300">
                {userData.username}
              </p>
              <div className="text-center">
                <button
                  class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                  to="/mypost"
                >
                  <Link className="text-white no-underline" to="/editProfile">
                    Edit Profile
                  </Link>
                </button>
              </div>
            </Col>
            <Col lg={9} md={8} sm={12} className="userDetails md:mt-3">
              <UserClientDetails />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ClientsProfileDetails;
