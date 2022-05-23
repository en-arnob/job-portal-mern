import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../../hooks/UsersContext";
import {
  FaUserAlt,
  FaGraduationCap,
  FaBriefcase,
  FaCogs,
  FaHistory,
  FaStickyNote,
  FaCertificate,
  FaLink,
} from "react-icons/fa";
import { Col, Row } from "react-bootstrap";
const UserCandidatesDetails = () => {
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
            <FaGraduationCap className="d-inline-block" /> &nbsp; &nbsp;{" "}
            <span className="text-black-50">Education</span>{" "}
          </h4>
        </div>
        <div className="sectionInfo mt-3">
          <Row>
            <Col>
              <p>
                <span className="fw-bolder fst-italic">Institute: </span>{" "}
                {userData.institute}
              </p>
              <p>
                <span className="fw-bolder fst-italic">Department: </span>{" "}
                Computer Science and Engineering
              </p>
              <p>
                <span className="fw-bolder fst-italic">CGPA: </span> 3.94
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
                {userData.designation}
              </p>
              <p>
                <span className="fw-bolder fst-italic">Experiences: </span>{" "}
                {userData.experience}
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="sections">
        <div className="sectionTitle">
          <h4>
            <FaCogs className="d-inline-block" /> &nbsp; &nbsp;{" "}
            <span className="text-black-50">Skill</span>{" "}
          </h4>
        </div>
        <div className="sectionInfo mt-3">
          <Row>
            <Col>
              <p>
                <span className="fw-bolder fst-italic">Language: </span>{" "}
                {userData.language}
              </p>
              <p>
                <span className="fw-bolder fst-italic">Expertise: </span>{" "}
                {userData.expertise}{" "}
              </p>
              <p>
                <span className="fw-bolder fst-italic">Skill: </span>{" "}
                {userData.skills}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="sections">
        <div className="sectionTitle">
          <h4>
            <FaHistory className="d-inline-block" /> &nbsp; &nbsp;{" "}
            <span className="text-black-50">Bio</span>{" "}
          </h4>
        </div>
        <div className="sectionInfo mt-3">
          <Row>
            <Col>
              <p className="fst-italic">{userData.bio}</p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="sections">
        <div className="sectionTitle">
          <h4>
            <FaStickyNote className="d-inline-block" /> &nbsp; &nbsp;{" "}
            <span className="text-black-50">Cover</span>{" "}
          </h4>
        </div>
        <div className="sectionInfo mt-3">
          <Row>
            <Col>
              <p className="fst-italic">{userData.coverLetter}</p>
            </Col>
          </Row>
        </div>
      </div>

      <div className="sections">
        <div className="sectionTitle">
          <h4>
            <FaCertificate className="d-inline-block" /> &nbsp; &nbsp;{" "}
            <span className="text-black-50">Certificate</span>{" "}
          </h4>
        </div>
        <div className="sectionInfo mt-3">
          <Row>
            <Col>
              <p>
                <span className="fw-bolder fst-italic">
                  {userData.certification}
                </span>
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
                <span className="fw-bolder fst-italic">Portfolio link:</span>{" "}
                {userData.portfolioLink}
              </p>
              <p>
                <span className="fw-bolder fst-italic">Email:</span>{" "}
                {userData.email}
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserCandidatesDetails;
