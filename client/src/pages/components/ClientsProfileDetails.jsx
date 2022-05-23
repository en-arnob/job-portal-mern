import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserClientDetails from "./UserClientDetails";
import UserImage from "../../assets/images/dummy-member.jpg";

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
        console.log(response.data.data.user);
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
            <Col lg={3} md={4} sm={12} className="bg-blue-300 userImagePrev">
              <div className="text-center my-3">
                <img
                  src={UserImage}
                  className="img-fluid rounded-circle"
                  alt="CandidatesIamge"
                />
              </div>
              <h5 className="userName text-center text-uppercase">
                {userData.fullname}
              </h5>
              <p className="userName text-center mt-3">{userData.username}</p>
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
