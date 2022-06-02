import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import authImage from "../assets/images/two_factor_authentication.svg";
const ForgotPasswordPage = () => {
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const usertype = location.state.usertype;
  console.log(usertype);

  const [data, setData] = useState({
    email: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://127.0.0.1:8000/user/forgotPassword/${usertype}`;
      const { data: res } = await axios.post(url, data);
      navigate("/resetPassword", { state: { usertype: usertype } });
    } catch (error) {
      console.log(error.response);
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
    <div className="h-auto mb-7">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="text-center mt-5">
              <img src={authImage} alt="pic" className="img-fluid" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="mt-5">
              <Card.Body className="text-center">
                <p className="font-mono text-3xl font-extrabold text-blue-700">
                  Forgot Password?
                </p>
                <form
                  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
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
                      onChange={handleChange}
                      value={data.email}
                      placeholder="Email"
                      name="email"
                    />
                  </div>
                  <div class="mb-6">
                    {error && (
                      <p class="text-red-500 text-xs italic">{error}</p>
                    )}
                  </div>
                  <div class="text-center">
                    <button
                      class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                      //   onClick={() => {
                      //     sendUserType();
                      //   }}
                    >
                      Get Code
                    </button>
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

export default ForgotPasswordPage;
