import React, { Fragment, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import NoAccess from "./components/NoAccess";
import axios from "axios";
import CandidatesCard from "./components/CandidatesCard";
import ReactPaginate from "react-paginate";
import { useLocation, useNavigate } from "react-router-dom";

const ShowUserCandidates = () => {
  const token = localStorage.getItem("myToken");
  const usr = jwt_decode(token);
  const user = usr.user;
  const location = useLocation();
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([]);
  //pagination stuffs
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 12;
  const pagesVisited = pageNumber * postsPerPage;
  const [errors, setErrors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (location.state) {
      setPageNumber(location.state.pageNum);
    }
  }, []);
  const fetchCandidates = () => {
    axios
      .get(`http://localhost:8000/api/${user.id}/fetchCandidates`)
      .then((response) => {
        const allCandidates = response.data.candidates;
        setCandidates(allCandidates);
        // console.log(allJobs);
      })
      .catch((error) => {
        setErrors(error);
      });
  };
  useEffect(() => {
    if (usr.user.usertype === "recruiter") {
      fetchCandidates();
    } else {
      setCandidates([]);
    }
  }, []);
  const displayCandidates = candidates
    .filter((candidate) => {
      if (searchTerm === "") {
        return candidate;
      } else if (
        candidate.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return candidate;
      }
    })
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((candidate) => {
      return (
        <CandidatesCard
          key={candidate._id}
          candidate={candidate}
          pageNumber={pageNumber}
        />
      );
    });

  const pageCount = Math.ceil(candidates.length / postsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {token && usr.user.usertype === "recruiter" ? (
        <div className='p-2 mx-4'>
          <div className='flex-col gap-2 mb-4'>
            <h2 className='bg-green-200 px-2 py-2 inline rounded-lg font-normal text-lg md:text-xl text-gray-800'>
              Available Job Seekers
            </h2>
            <h2
              onClick={() => {
                navigate("/");
              }}
              className=' px-4 py-2 inline rounded-lg cursor-pointer font-normal text-sm text-gray-800'
            >
              Home
            </h2>
          </div>

          <div class='relative'>
            <span class='absolute inset-y-0 left-0 flex items-center pl-3'>
              <svg
                class='w-5 h-5 text-gray-400'
                viewBox='0 0 24 24'
                fill='none'
              >
                <path
                  d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                ></path>
              </svg>
            </span>

            <input
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              type='text'
              class='w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
              placeholder='Search by Expertise'
            />
          </div>
          <div className='grid grid-cols md:grid-cols-4 mt-10'>
            {displayCandidates}
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
      ) : (
        <NoAccess />
      )}
    </Fragment>
  );
};

export default ShowUserCandidates;
