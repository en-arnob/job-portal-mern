import React, { useContext } from "react";
import { UsersContext } from "../../hooks/UsersContext";
import { FaUserAlt, FaHome, FaBriefcase, FaLink } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
const UserClientDetails = () => {
  const [user, setUser] = useContext(UsersContext);
  const token = localStorage.getItem("myToken");
  return (
    <div>
      {user && (
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
                      <span className="fw-bolder fst-italic">Name: </span>{" "}
                      {user.fullname}
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">Birthday: </span>{" "}
                      {user.birthday}
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">NID: </span>{" "}
                      {user.nid}
                    </p>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
                    <p>
                      <span className="fw-bold fst-italic">Gender: </span>{" "}
                      {user.gender}
                    </p>
                    <p>
                      <span className="fw-bold fst-italic">Phone: </span>{" "}
                      {user.phone}
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
                      <span className="fw-bolder fst-italic">
                        Organization:{" "}
                      </span>{" "}
                      {user.organization}
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
                      <span className="fw-bolder fst-italic">
                        Designation:{" "}
                      </span>{" "}
                      Regional Manager
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">
                        Experiences:{" "}
                      </span>
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
                      {user.email}
                    </p>
                  </Col>
                </Row>
              </div>
            </div>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default UserClientDetails;
