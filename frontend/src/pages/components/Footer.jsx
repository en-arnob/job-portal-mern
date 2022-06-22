/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div className='mt-6'>
      <footer className='bg-gray-100'>
        <div className='relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
          <div className='absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8'>
            <a
              className='inline-block p-2 text-white transition bg-teal-600 rounded-full sm:p-3 lg:p-4 hover:bg-gray-600 cursor-pointer'
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "auto",
                });
              }}
            >
              <span className='sr-only'>Back to top</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-5 h-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </a>
          </div>

          <div className='lg:flex lg:items-end lg:justify-between'>
            <div>
              <div className='flex justify-center text-teal-300 lg:justify-start'>
                <h2>ICT.jobs</h2>
              </div>

              <p className='max-w-md mx-auto mt-6 justify-center text-center items-center lg:leading-relaxed  text-gray-800 lg:text-left'>
                A concern of Symstar IT
              </p>
            </div>

            <nav className='mt-12 lg:mt-0' aria-labelledby='footer-navigation'>
              <h2 className='sr-only' id='footer-navigation'>
                Footer navigation
              </h2>

              <ul className='flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12'>
                <li>
                  <a
                    className='text-gray-700 transition no-underline hover:text-gray-700/75'
                    href='/'
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-700 transition no-underline hover:text-gray-700/75'
                    href='/'
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-700 transition no-underline hover:text-gray-700/75'
                    href='/'
                  >
                    Works
                  </a>
                </li>

                <li>
                  <a
                    className='text-gray-700 transition no-underline hover:text-gray-700/75'
                    href='/'
                  >
                    Home
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <p className='mt-12 text-sm text-center text-gray-800 lg:text-right'>
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
