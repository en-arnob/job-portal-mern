import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import authImage from "../assets/images/authentication_re.svg";
const ResetPasswordPage = () => {
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const usertype = location.state.usertype;
  console.log(usertype);

  const [data, setData] = useState({
    password: "",
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resetToken = document.getElementById("passwordResetToken").value;
    try {
      const url = `http://127.0.0.1:8000/user/resetPassword/${resetToken}/${usertype}`;
      const { data: res } = await axios.patch(url, data);
      navigate("/login");
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
            <div className="mt-5">
              <Card.Body className="text-center">
                <p className="font-mono text-3xl font-extrabold text-blue-700">
                  Reset Password
                </p>
                <form
                  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div class="mb-4">
                    <label
                      class="block text-gray-700 text-sm font-bold mb-2"
                      for="token"
                    >
                      Token
                    </label>
                    <input
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="passwordResetToken"
                      type="text"
                      onChange={handleChange}
                      value={data.passwordResetToken}
                      placeholder="Code"
                      name="passwordResetToken"
                    />
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
                      placeholder="*****"
                      onChange={handleChange}
                      value={data.password}
                      name="password"
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
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </Card.Body>
            </div>
          </Col>

          <Col lg={6} md={6} sm={12}>
            <div className="text-center mt-5">
              <img src={authImage} alt="pic" className="img-fluid" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResetPasswordPage;
