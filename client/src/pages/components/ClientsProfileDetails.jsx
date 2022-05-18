import React, { useContext } from "react";
import { UsersContext } from "../../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserClientDetails from "./UserClientDetails";
import UserImage from "../../assets/images/dummy-member.jpg";

const ClientsProfileDetails = () => {
  const [user, setUser] = useContext(UsersContext);
  const token = localStorage.getItem("myToken");
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
                {user.fullname}
              </h5>
              <p className="userName text-center mt-3">{user.username}</p>
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
