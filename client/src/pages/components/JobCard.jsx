import React from "react";
import TextTruncate from "react-text-truncate";
import { RiUserVoiceLine } from "react-icons/ri";
import { HiOutlineOfficeBuilding, HiOutlineClock } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const postDate = job.dateOfPosting;
  const cdate = new Date(postDate).toString();

  const toJobViewComponent = () => {
    navigate("/jobView", { state: { job } });
  };
  return (
    <div className="col-span-2 mx-2">
      <h1
        className="relative block p-8 overflow-hidden border border-gray-100 rounded-lg"
        href=""
      >
        <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

        <div className="justify-between sm:flex">
          <div>
            <h5 className="text-2xl font-medium text-indigo-900">
              {job.title}
            </h5>
            <p className="flex gap-3 font-normal text-lg  text-blue-700">
              <HiOutlineOfficeBuilding className="text-lg mt-1" />{" "}
              {job.authorId.organization}
            </p>
            <p className="flex gap-3 text-sm font-normal text-blue-800">
              <RiUserVoiceLine className="text-lg" /> {job.authorId.fullname}
            </p>
          </div>

          <div className="flex-shrink-0 hidden ml-3 sm:block">
            <img
              className="object-cover w-16 h-16 rounded-lg shadow-sm"
              src="https://www.designbust.com/download/1060/png/microsoft_logo_transparent512.png"
              alt=""
            />
          </div>
        </div>

        <div className="mt-2 text-gray-600 sm:pr-8 text-sm">
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={job.body}
            textTruncateChild={
              <span
                onClick={() => {
                  toJobViewComponent();
                }}
                className="text-indigo-900 mx-2"
              >
                Read more on full post
              </span>
            }
          />
        </div>

        <dl class="flex mt-6">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">{job.tags}</dt>
            <dd class="text-sm  text-red-800">Deadline: {job.deadline}</dd>
          </div>

          <div class="flex flex-col-reverse ml-3 sm:ml-6">
            <dt class="text-sm font-medium text-indigo-600">{job.jobType}</dt>
            <dd class="text-sm  text-gray-800">Vaccancy: {job.vaccancy}</dd>
          </div>
        </dl>
        <p class="text-xs flex gap-2  text-gray-800">
          <HiOutlineClock className="text-sm" /> {cdate}
        </p>
      </h1>
    </div>
  );
};

export default JobCard;
