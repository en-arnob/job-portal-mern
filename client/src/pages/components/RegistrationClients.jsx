import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import RegImg from "../../assets/images/RegClient.svg";

const RegistrationClients = () => {
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
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
                      placeholder="Enter username"
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
                      placeholder="Enter email address"
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
                      placeholder="Enter nid number"
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
                      placeholder="Enter Organization name"
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
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
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
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
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
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
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
                    />
                    <p class="text-red-500 text-xs italic">
                      Please choose a strong password.
                    </p>
                  </div>
                  <div class="content-center">
                    <button
                      class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
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
