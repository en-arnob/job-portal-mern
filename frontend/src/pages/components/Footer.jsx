import React from "react";

const Footer = () => {
  return (
    <div className='mt-6'>
      <footer class='bg-gray-900'>
        <div class='relative max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 lg:pt-24'>
          <div class='absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8'>
            <a
              class='inline-block p-2 text-teal-300 transition bg-gray-700 rounded-full sm:p-3 lg:p-4 hover:bg-gray-600'
              href='#MainContent'
            >
              <span class='sr-only'>Back to top</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                class='w-5 h-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fill-rule='evenodd'
                  d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
                  clip-rule='evenodd'
                />
              </svg>
            </a>
          </div>

          <div class='lg:flex lg:items-end lg:justify-between'>
            <div>
              <div class='flex justify-center text-teal-300 lg:justify-start'>
                <h2>ICT.jobs</h2>
              </div>

              <p class='max-w-md mx-auto mt-6 leading-relaxed  text-gray-400 lg:text-left'>
                A concern of Symstar IT
              </p>
            </div>

            <nav class='mt-12 lg:mt-0' aria-labelledby='footer-navigation'>
              <h2 class='sr-only' id='footer-navigation'>
                Footer navigation
              </h2>

              <ul class='flex flex-wrap justify-center gap-6 lg:justify-end md:gap-8 lg:gap-12'>
                <li>
                  <a
                    class='text-white transition no-underline hover:text-white/75'
                    href='/'
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    class='text-white transition no-underline hover:text-white/75'
                    href='/'
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    class='text-white transition no-underline hover:text-white/75'
                    href='/'
                  >
                    Works
                  </a>
                </li>

                <li>
                  <a
                    class='text-white transition no-underline hover:text-white/75'
                    href='/'
                  >
                    Home
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <p class='mt-12 text-sm text-center text-gray-400 lg:text-right'>
            Copyright &copy; 2022. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
