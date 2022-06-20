import React, { useState, useEffect } from "react";
import LoginCandidates from "./LoginCandidates";
import LoginClients from "./LoginClients";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ history }) => {
  const [loginC, setLoginC] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("myToken")) {
      //   const decodedToken = jwt_decode(localStorage.getItem("myToken"));
      //   const expiresIn = new Date(decodedToken.exp * 1000);
      //   if (!new Date() > expiresIn) {
      //     history.push("/profile");
      //   } else {
      //     localStorage.getItem("myToken");
      //   }
      // }
      window.location.href = "/";
    }
  });

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
