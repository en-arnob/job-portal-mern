import React from "react";
import { FaUserAlt, FaHome, FaBriefcase, FaLink } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
const UserClientDetails = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="sections">
            <div className="sectionTitle">
              <h4>
                <FaUserAlt className="d-inline-block" /> &nbsp; &nbsp;{" "}
                <span className="text-black-50">Profile</span>{" "}
              </h4>
            </div>
            <div className="sectionInfo mt-3">
              <Row>
                <Col lg={4} md={12} sm={12}>
                  <p>
                    <span className="fw-bolder fst-italic">Name: </span> Abdur
                    Rahman Mask
                  </p>
                  <p>
                    <span className="fw-bolder fst-italic">Birthday: </span> 6
                    June,1995
                  </p>
                  <p>
                    <span className="fw-bolder fst-italic">NID: </span>{" "}
                    458723454
                  </p>
                </Col>
                <Col lg={4} md={12} sm={12}>
                  <p>
                    <span className="fw-bold fst-italic">Gender: </span> Male
                  </p>
                  <p>
                    <span className="fw-bold fst-italic">Phone: </span>{" "}
                    0123456789
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="sections">
            <div className="sectionTitle">
              <h4>
                <FaHome className="d-inline-block" /> &nbsp; &nbsp;{" "}
                <span className="text-black-50">Organization</span>{" "}
              </h4>
            </div>
            <div className="sectionInfo mt-3">
              <Row>
                <Col>
                  <p>
                    <span className="fw-bolder fst-italic">Company: </span> xYz
                    Company
                  </p>
                  <p>
                    <span className="fw-bolder fst-italic">
                      Office Address:{" "}
                    </span>{" "}
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptatum, voluptate!
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="sections">
            <div className="sectionTitle">
              <h4>
                <FaBriefcase className="d-inline-block" /> &nbsp; &nbsp;{" "}
                <span className="text-black-50">Experience</span>{" "}
              </h4>
            </div>
            <div className="sectionInfo mt-3">
              <Row>
                <Col>
                  <p>
                    <span className="fw-bolder fst-italic">Designation: </span>{" "}
                    Regional Manager
                  </p>
                  <p>
                    <span className="fw-bolder fst-italic">Experiences: </span>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dignissimos in magnam repellat.{" "}
                  </p>
                </Col>
              </Row>
            </div>
          </div>

          <div className="sections">
            <div className="sectionTitle">
              <h4>
                <FaLink className="d-inline-block" /> &nbsp; &nbsp;{" "}
                <span className="text-black-50">Links</span>{" "}
              </h4>
            </div>
            <div className="sectionInfo mt-3">
              <Row>
                <Col>
                  <p>
                    <span className="fw-bolder fst-italic">
                      Company Webiste:
                    </span>{" "}
                    https://github.com/
                  </p>
                  <p>
                    <span className="fw-bolder fst-italic">Email:</span>{" "}
                    amaderemail@gmai.com
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserClientDetails;
