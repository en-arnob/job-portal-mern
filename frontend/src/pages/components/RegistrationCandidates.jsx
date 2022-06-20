import React, { useState } from "react";
import axios from "axios";

import { Container, Row, Col, Card } from "react-bootstrap";
import RegImg from "../../assets/images/RegCandidates.svg";
import Modal from "react-modal";
import PasswordStrengthBar from "react-password-strength-bar";
import { useEffect } from "react";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
// Modal.setAppElement("app");
Modal.setAppElement("*");

const RegistrationCandidates = () => {
  const [data, setData] = useState({
    usertype: "candidate",
    // username: "",
    fullname: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    birthday: "",
  });
  const [error, setError] = useState(" ");
  const [passError, setPassError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [age, setAge] = useState(0);

  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#16003B";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const [modalMsg, setModalMsg] = useState(" ");
  const getAge = (birthDate) =>
    Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
    setAge(getAge(data.birthday));
  };
  // let age = 0;

  // useEffect = () => {
  //   if (data.birthday) {
  //     setAge(getAge(data.birthday));
  //     console.log(getAge(data.birthday));
  //   }
  // };
  // const checkValidation = (e) => {
  //   setConfirmPassword(e);
  //   console.log(confirmPassword, data.password);
  //   console.log(data.password);
  //   if (data.password !== confirmPassword) {
  //     console.log("Passwrd are not same");
  //   } else {
  //     console.log("matched");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (data.password === confirmPassword) {
      setPassError("");

      if (age >= 16) {
        setAgeError("");
        try {
          const url = "http://127.0.0.1:8000/candidate-register";
          const { data: res } = await axios.post(url, data);

          setModalMsg(res.msg);
          openModal();
        } catch (error) {
          if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
          ) {
            setError(error.response.data.errors[0]);
          }
        }
      } else {
        setError("");
        setAgeError("User age should be at least 16 year for creating account");
      }
    } else {
      setError("");
      setPassError("Password are not same!!");
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="mt-5">
              <Card.Body className="text-center">
                <p className="font-mono text-3xl font-extrabold text-blue-700">
                  Sign UP as Job Seeker
                </p>
                <form
                  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div class="mb-4">
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-first-name"
                    >
                      Full Name
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="text"
                      placeholder="Enter Name"
                      onChange={handleChange}
                      value={data.fullname}
                      name="fullname"
                    />

                    {/* <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-user-name"
                    >
                      Username
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="text"
                      placeholder="Enter username"
                      onChange={handleChange}
                      value={data.username}
                      name="username"
                    /> */}

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-email"
                    >
                      Email
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="email"
                      placeholder="Enter email address"
                      onChange={handleChange}
                      value={data.email}
                      name="email"
                    />

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-phone"
                    >
                      Phone
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="text"
                      placeholder="Enter phone number"
                      onChange={handleChange}
                      value={data.phone}
                      name="phone"
                    />

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-birthday"
                    >
                      Birthday
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="date"
                      onChange={handleChange}
                      value={data.birthday}
                      name="birthday"
                    />
                    {ageError && (
                      <p class="text-red-500 text-xs italic">{ageError}</p>
                    )}
                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-gender"
                    >
                      Select Gender
                    </label>
                    <div class="flex">
                      <div>
                        <div class="form-check">
                          <input
                            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-sky-500 checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="gender"
                            id="flexRadioDefault1"
                            onChange={handleChange}
                            value="male"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexRadioDefault1"
                          >
                            Male
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-sky-500 checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="gender"
                            id="flexRadioDefault2"
                            onChange={handleChange}
                            value="female"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexRadioDefault2"
                          >
                            Female
                          </label>
                        </div>

                        <div class="form-check">
                          <input
                            class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-sky-500 checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                            type="radio"
                            name="gender"
                            id="flexRadioDefault3"
                            onChange={handleChange}
                            value="other"
                          />
                          <label
                            class="form-check-label inline-block text-gray-800"
                            for="flexRadioDefault3"
                          >
                            Other
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-password"
                      type="password"
                      placeholder="******************"
                      onChange={handleChange}
                      value={data.password}
                      name="password"
                    />
                    <PasswordStrengthBar password={data.password} />

                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      Confirm Password
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="confirmPassword"
                      type="password"
                      placeholder="******************"
                      // onChange={(e) => checkValidation(e.target.value)}
                      // value={confirmPassword}
                      name="confirmPassword"
                    />

                    {passError && (
                      <p class="text-red-500 text-xs italic">{passError}</p>
                    )}
                    {error && (
                      <p class="text-red-500 text-xs italic">{error.msg}</p>
                    )}
                  </div>

                  <div class="content-center">
                    <button
                      class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Sign Up
                    </button>
                    <Modal
                      appElement={document.getElementById("app")}
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Apply Status Modal"
                    >
                      <h2
                        className="text-2xl"
                        ref={(_subtitle) => (subtitle = _subtitle)}
                      >
                        Verify your Email
                      </h2>

                      <div className="text-xl py-4">{modalMsg}</div>
                      <button
                        onClick={closeModal}
                        className="bg-red-600 px-4 py-2 mt-2 text-white rounded-lg"
                      >
                        close
                      </button>
                    </Modal>
                  </div>
                </form>
              </Card.Body>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="text-center mt-12">
              <img src={RegImg} className="img-fluid" alt="candidateImage" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationCandidates;
