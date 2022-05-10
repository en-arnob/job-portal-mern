import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import loginImg from "../assets/images/loginClients.svg";
const LoginClients = () => {
  return (
    <div className="h-auto mb-7">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="text-center mt-5">
              <img src={loginImg} className="img-fluid" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="mt-5">
              <Card.Body className="text-center">
                <p className="font-mono text-3xl font-extrabold text-blue-700">
                  Sign In as Recruiter
                </p>
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="password"
                    >
                      Password
                    </label>
                    <input
                      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <p class="text-red-500 text-xs italic">
                      Please choose a password.
                    </p>
                  </div>
                  <div class="flex items-center justify-between">
                    <button
                      class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Sign In
                    </button>
                    <a
                      class="inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800"
                      href="#"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </form>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginClients;
