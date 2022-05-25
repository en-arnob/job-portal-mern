import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import { saveAs } from "file-saver";
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

  const createAndDownloadPDF = () => {
    axios
      .post("http://127.0.0.1:8000/generate-resume", userData)
      .then(() => {
        axios
          .get("http://127.0.0.1:8000/generate-resume", {
            responseType: "arraybuffer",
          })
          .then((res) => {
            const pdfBlob = new Blob([res.data], {
              type: "application/pdf",
            });
            saveAs(pdfBlob, `${userData.fullname}'s Resume.pdf`);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
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
              <div>
                <UserCandidatesDetails />
              </div>
              <div className="text-center my-5">
                <button
                  class="bg-cyan-400 hover:bg-cyan-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
                  onClick={createAndDownloadPDF}
                >
                  <svg
                    class="fill-current w-4 h-4 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                  </svg>
                  <span>Download Resume</span>
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
