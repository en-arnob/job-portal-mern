import React, { useState, useContext } from "react";
import { UsersContext } from "../../hooks/UsersContext";
import { Link } from "react-router-dom";
import { CgMenu, CgClose } from "react-icons/cg";
import { UserContext } from "../../App";

const Nav = () => {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UsersContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { state } = useContext(UserContext);
  const token = localStorage.getItem("myToken");
  const RenderNav = () => {
    if (!state && !token) {
      return (
        <>
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            <li className='nav-item'>
              <Link
                onClick={() => setNavbarOpen(!navbarOpen)}
                className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                to='/'
              >
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                onClick={() => setNavbarOpen(!navbarOpen)}
                className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                to='/login'
              >
                Login
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                onClick={() => setNavbarOpen(!navbarOpen)}
                className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                to='/reg'
              >
                Register
              </Link>
            </li>
          </ul>
        </>
      );
    } else {
      if (user.usertype === "recruiter") {
        return (
          <>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/profile'
                >
                  Profile
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/mypost'
                >
                  My Jobs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/messenger'
                >
                  Messenger
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/logout'
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        );
      } else {
        return (
          <>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/profile'
                >
                  Profile
                </Link>
              </li>

              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/messenger'
                >
                  Messenger
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  onClick={() => setNavbarOpen(!navbarOpen)}
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/logout'
                >
                  Logout
                </Link>
              </li>
            </ul>
          </>
        );
      }
    }
  };
  return (
    <>
      <nav className=' flex flex-wrap items-center justify-between px-2 py-3 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500  mb-4'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className='px-3 text-2xl py-2 flex items-center   font-bold leading-snug text-blue-800 hover:opacity-75 no-underline'
              to='/'
            >
              ICT.jobs
            </Link>

            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {!navbarOpen ? <CgMenu /> : <CgClose />}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            {/* dynamic nav */}
            <RenderNav />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
