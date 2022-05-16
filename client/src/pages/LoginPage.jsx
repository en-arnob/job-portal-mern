import React, { useState } from "react";
import LoginCandidates from "./LoginCandidates";
import LoginClients from "./LoginClients";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

const LoginPage = () => {
  const [loginC, setLoginC] = useState(1);
  const navigate = useNavigate();
  const token = localStorage.getItem("myToken");
  if (token) {
    const decodedToken = jwt_decode(token);
    const expiresIn = new Date(decodedToken.exp * 1000);
    if (new Date() > expiresIn) {
      localStorage.removeItem("myToken");
      navigate("/login");
    } else {
      const { user } = decodedToken;
      navigate("/");
    }
  }

  return (
    <div>
      <div class='flex items-center justify-center'>
        <div
          class='inline-flex shadow-md hover:shadow-lg focus:shadow-lg'
          role='group'
        >
          <button
            onClick={() => setLoginC(1)}
            type='button'
            class='rounded-l inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-md leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out'
          >
            Job Seeker
          </button>

          <button
            onClick={() => setLoginC(0)}
            type='button'
            class=' rounded-r inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-md leading-tight uppercase hover:bg-green-700 focus:bg-green-700 focus:outline-none focus:ring-0 active:bg-green-800 transition duration-150 ease-in-out'
          >
            Recruiter
          </button>
        </div>
      </div>
      {loginC ? <LoginCandidates /> : <LoginClients />}
    </div>
  );
};

export default LoginPage;
