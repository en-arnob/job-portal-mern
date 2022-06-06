import React from "react";

const SponsoredCard = () => {
  return (
    <div>
      <div class='lg:py-12 lg:col-span-2'>
        <h1 class='text-3xl font-extrabold sm:text-5xl'>
          Let us boost your
          <strong class='font-extrabold text-rose-700 sm:block'>
            Job Post.
          </strong>
        </h1>
        <p class='max-w-lg mt-4 sm:leading-relaxed sm:text-xl'>
          You can post a sponsored job that appears as one of the very first job
          cards in ICT.jobs
        </p>
        <div class='flex flex-wrap gap-4 mt-8 text-center'>
          <a
            class='block w-full no-underline px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring'
            href='/get-started'
          >
            Get Started
          </a>

          <a
            class='block no-underline w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring'
            href='/about'
          >
            Learn More
          </a>
        </div>
        <p class='text-rose-700 flex gap-2 max-w-lg mt-4 text-lg'>
          or post a regular one from here{" "}
          <AiOutlineArrowRight className='mt-2' />
        </p>
      </div>
    </div>
  );
};

export default SponsoredCard;
