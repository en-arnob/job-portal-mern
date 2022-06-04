import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { Link, useParams } from "react-router-dom";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8000/verify/${param.userType}/${param.userId}/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      {validUrl ? (
        <section class='text-white bg-gray-900'>
          <div class='max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex'>
            <div class='max-w-3xl mx-auto text-center'>
              <h1 class='text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
                Account Verification
                <span class='sm:block'> Successfull.</span>
              </h1>

              <p class='max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl'>
                You may login now,
              </p>

              <div class='flex flex-wrap justify-center gap-4 mt-8 no-underline'>
                <Link
                  to='/login'
                  class='block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring no-underline'
                  href='/get-started'
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
