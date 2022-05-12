import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserImage from "../assets/images/dummy-member.jpg";
import UserDetails from "./components/UserDetails";

const CandidatesProfileDetails = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12} className="userImagePrev">
            <div className="text-center my-3">
              <img src={UserImage} className="img-fluid rounded-circle" />
            </div>
            <h5 className="userName text-center text-uppercase">
              Nahim Bin Reza Udoy
            </h5>
          </Col>
          <Col lg={9} md={8} sm={12} className="userDetails mt-3">
            <UserDetails />
            <div className="text-center my-5">
              <button type="submit" className="btn btn-info btn-lg">
                Download CV
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CandidatesProfileDetails;
