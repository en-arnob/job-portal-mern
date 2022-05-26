import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../../hooks/UsersContext";
import { FaUserAlt, FaHome, FaBriefcase, FaLink } from "react-icons/fa";
import { Card, Col, Row } from "react-bootstrap";
const UserClientDetails = () => {
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
                      {userData.fullname}
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">Birthday: </span>{" "}
                      {new Date(userData.birthday).toDateString()}
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">NID: </span>{" "}
                      {userData.nid}
                    </p>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
                    <p>
                      <span className="fw-bold fst-italic">Gender: </span>{" "}
                      {userData.gender}
                    </p>
                    <p>
                      <span className="fw-bold fst-italic">Phone: </span>{" "}
                      {userData.phone}
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
                      {userData.organization}
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">
                        Office Address:{" "}
                      </span>{" "}
                      {userData.officeAdress}
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
                      {userData.designation}
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
                      {userData.website}
                    </p>
                    <p>
                      <span className="fw-bolder fst-italic">Email:</span>{" "}
                      {userData.email}
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
