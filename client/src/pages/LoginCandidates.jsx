import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import loginImg from "../assets/images/loginCandidates.svg";
const LoginCandidates = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://127.0.0.1:8000/candidate-login";
      const { data: res } = await axios.post(url, data);
      navigate("/");
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
    <div className='h-auto mb-7'>
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className='text-center mt-5'>
              <img src={loginImg} alt='pic' className='img-fluid' />
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className='mt-5'>
              <Card.Body className='text-center'>
                <p className='font-mono text-3xl font-extrabold text-blue-700'>
                  Sign In as Job Seeker
                </p>
                <form
                  class='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
                  onSubmit={handleSubmit}
                >
                  <div class='mb-4'>
                    <label
                      class='block text-gray-700 text-sm font-bold mb-2'
                      for='email'
                    >
                      Email
                    </label>
                    <input
                      class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                      id='email'
                      type='email'
                      onChange={handleChange}
                      value={data.email}
                      placeholder='Email'
                      name='email'
                    />
                  </div>
                  <div class='mb-6'>
                    <label
                      class='block text-gray-700 text-sm font-bold mb-2'
                      for='password'
                    >
                      Password
                    </label>
                    <input
                      class='shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                      id='password'
                      type='password'
                      placeholder='*****'
                      onChange={handleChange}
                      value={data.password}
                      name='password'
                    />
                    {error && (
                      <p class='text-red-500 text-xs italic'>{error.msg}</p>
                    )}
                  </div>
                  <div class='flex items-center justify-between'>
                    <button
                      class='bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                      type='submit'
                    >
                      Sign In
                    </button>
                    <a
                      class='inline-block align-baseline font-bold text-sm text-blue-700 hover:text-blue-800'
                      href='/'
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

export default LoginCandidates;
