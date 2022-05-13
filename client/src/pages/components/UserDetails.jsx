import React from "react";
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
const UserDetails = () => {
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
                <span className="fw-bolder fst-italic">Name: </span> Nahim Bin
                Reza Udoy
              </p>
              <p>
                <span className="fw-bolder fst-italic">Birthday: </span> 24
                May,1996
              </p>
            </Col>
            <Col lg={4} md={12} sm={12}>
              <p>
                <span className="fw-bold fst-italic">Gender: </span> Male
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
                Daffodil International University
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
                Lorem ipsum dolor sit amet
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
            <FaCogs className="d-inline-block" /> &nbsp; &nbsp;{" "}
            <span className="text-black-50">Skill</span>{" "}
          </h4>
        </div>
        <div className="sectionInfo mt-3">
          <Row>
            <Col>
              <p>
                <span className="fw-bolder fst-italic">Language: </span> Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
              <p>
                <span className="fw-bolder fst-italic">Expertise: </span> Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
                in magnam repellat.{" "}
              </p>
              <p>
                <span className="fw-bolder fst-italic">Skill: </span> Lorem
                ipsum dolor sit amet. Dignissimos in magnam repellat.{" "}
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
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                dolorem laboriosam molestias pariatur quae. Corporis dolores
                magnam officiis possimus tempore.
              </p>
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
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                dolorem laboriosam molestias pariatur quae. Corporis dolores
                magnam officiis possimus tempore.
              </p>
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
                <span className="fw-bolder fst-italic">B.Sc</span>, from Lorem
                ipsum dolor sit amet
              </p>
              <p>
                <span className="fw-bolder fst-italic">Programming Hero</span>,
                from Lorem ipsum dolor sit amet
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
                https://github.com/
              </p>
              <p>
                <span className="fw-bolder fst-italic">Email:</span>{" "}
                amaremail@gmai.com
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
