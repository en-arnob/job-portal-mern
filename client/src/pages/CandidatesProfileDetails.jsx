import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import jsPDF from "jspdf";
import UserImage from "../assets/images/dummy-member.jpg";
import UserCandidatesDetails from "./components/UserCandidatesDetails";

const CandidatesProfileDetails = () => {
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
      {user && (
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
                {userData.fullname}
              </h5>
              <p className="userName text-center mt-3">{userData.username}</p>
            </Col>
            <Col lg={9} md={8} sm={12} className="userDetails mt-3">
              {/* <UserDetails id="content" /> */}
              <div id="content">
                <UserCandidatesDetails />
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
      )}
    </div>
  );
};

export default CandidatesProfileDetails;
