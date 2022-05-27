import React, { useState, useEffect } from "react";
import JobCardSponsored from "./JobCardSponsored";
import JobCard from "./JobCard";
import ReactPaginate from "react-paginate";

const JobsSection = (props) => {
  const jobs = props.jobs;
  const errors = props.errors;
  const searchTerm = props.searchTerm;

  //pagination stuffs
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 10;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = jobs
    .filter((post) => {
      if (searchTerm === "") {
        return post;
      } else if (post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return post;
      }
    })
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((post) => {
      return <JobCard key={post._id} job={post} />;
    });

  const pageCount = Math.ceil(jobs.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className='my-4 md:mx-6 grid md:grid-cols-4 gap-4'>
        {errors.length > 0 && (
          <div className='p-4 mx-4 text-red-700 border-l-4 border-red-700 bg-red-50'>
            <h3 class='text-sm font-medium'>
              Error fetching data! Try a stable internet connection
            </h3>
          </div>
        )}
        {/* <JobCardSponsored /> */}
        {displayPosts}
      </div>
      <div className='text-center items-center justify-center'>
        <ReactPaginate
          breakLabel=''
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          className={"inline-flex -space-x-px no-underline"}
          pageClassName={
            "py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
          }
          activeClassName={
            "py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 "
          }
          previousClassName={
            "py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
          }
          nextClassName={
            "py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
          }
          previousLinkClassName={"no-underline text-gray-600"}
          nextLinkClassName={"no-underline text-gray-600"}
          breakClassName={"mx-2 border-x-2"}
        />
      </div>
    </div>
  );
};

export default JobsSection;
