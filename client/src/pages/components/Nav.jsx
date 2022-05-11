import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-500 mb-3'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link
              className='px-3 text-2xl py-2 flex items-center   font-bold leading-snug text-white hover:opacity-75 no-underline'
              to='/'
            >
              ICT.jobs{" "}
              <span className='ml-4 text-xs text-green-500 md:text-lg md:text-white '>
                #1 Job portal for ICT Sector in Bangladesh
              </span>
            </Link>

            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <CgMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item'>
                <Link
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/login'
                >
                  Login
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/reg'
                >
                  Register
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75 no-underline'
                  to='/'
                >
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
