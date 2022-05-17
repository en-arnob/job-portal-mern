import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import RegImg from "../../assets/images/RegClient.svg";
import jwt_decode from "jwt-decode";

const RegistrationClients = () => {
  const [data, setData] = useState({
    usertype: "recruiter",
    username: "",
    fullname: "",
    email: "",
    organization: "",
    nid: "",
    password: "",
    confirmPass: "",
    phone: "",
    gender: "",
  });
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8000/client-register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      localStorage.setItem("myToken", res.jwtToken);
      const token = localStorage.getItem("myToken");
      if (token) {
        const decodedToken = jwt_decode(token);
        const expiresIn = new Date(decodedToken.exp * 1000);
        if (new Date() > expiresIn) {
          localStorage.removeItem("myToken");
        } else {
          const { user } = decodedToken;
          console.log(user);
        }
      }
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.errors[0]);
      }
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
                  Sign UP as Recruiter
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
                      onChange={handleChange}
                      value={data.fullname}
                      placeholder="Enter Name"
                      name="fullname"
                    />

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-user-name"
                    >
                      Username
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="text"
                      onChange={handleChange}
                      value={data.username}
                      placeholder="Enter username"
                      name="username"
                    />

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
                      onChange={handleChange}
                      value={data.email}
                      placeholder="Enter email address"
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
                      onChange={handleChange}
                      value={data.phone}
                      placeholder="Enter phone number"
                      name="phone"
                    />

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-nid"
                    >
                      Nid
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-full-name"
                      type="text"
                      onChange={handleChange}
                      value={data.nid}
                      placeholder="Enter nid number"
                      name="nid"
                    />

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-organization"
                    >
                      Organization
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-organization"
                      type="text"
                      onChange={handleChange}
                      value={data.organization}
                      placeholder="Enter Organization name"
                      name="organization"
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
                      name="birthday"
                      // value={data.birthday}
                    />

                    <label
                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      for="grid-image"
                    >
                      Upload an image
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-file"
                      type="file"
                      onChange={handleChange}
                      name="image"
                      // value={data.image}
                    />

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
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      Confirm Password
                    </label>
                    <input
                      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-password"
                      type="password"
                      placeholder="******************"
                      name="confirmPassword"
                    />
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
                  </div>
                </form>
              </Card.Body>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="text-center mt-44">
              <img src={RegImg} className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegistrationClients;
