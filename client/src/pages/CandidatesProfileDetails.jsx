import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import jsPDF from "jspdf";
import UserImage from "../assets/images/dummy-member.jpg";
import UserDetails from "./components/UserDetails";

const CandidatesProfileDetails = () => {
  const generatePdf = () => {
    const doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        pdf.save("resume.pdf");
      },
    });
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={4} sm={12} className="bg-cyan-300 userImagePrev">
            <div className="text-center my-3">
              <img
                src={UserImage}
                className="img-fluid rounded-circle"
                alt="CandidatesIamge"
              />
            </div>
            <h5 className="userName text-center text-uppercase">
              Nahim Bin Reza Udoy
            </h5>
            <p className="userName text-center mt-3">nahim_udoy</p>
          </Col>
          <Col lg={9} md={8} sm={12} className="userDetails mt-3">
            {/* <UserDetails id="content" /> */}
            <div id="content">
              <UserDetails />
            </div>
            <div className="text-center my-5">
              <button
                type="submit"
                className="btn btn-info btn-lg"
                onClick={generatePdf}
              >
                Download Resume
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CandidatesProfileDetails;
