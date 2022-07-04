import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { MdMessage } from "react-icons/md";
import { Col, Container, Row, Card } from "react-bootstrap";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import axios from "axios";
import NoAccess from "./components/NoAccess";
import TextTruncate from "react-text-truncate";
import { useNavigate } from "react-router-dom";
import Moment from "moment";

const AppliedJobs = () => {
  const navigate = useNavigate();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [errors, setErrors] = useState([]);
  const [msg, setMsg] = useState("");
  const fallback = "/appliedJobs";
  const [status, setStatus] = useState("");

  const token = localStorage.getItem("myToken");
  let usr = "";
  if (token) {
    usr = jwt_decode(token).user;
  }
  useEffect(() => {
    if (usr.usertype === "candidate") {
      getAppliedJobs();
    }
  }, []);

  const getAppliedJobs = () => {
    setStatus("loading");
    axios
      .get(`/api/jobs/applied-jobs/${usr.id}`)
      .then((response) => {
        const jobData = response.data.jobs;
        setAppliedJobs(jobData);
        setStatus("success");
      })
      .catch((error) => {
        setErrors(error);
        setStatus("error");
      });
  };
  const toJobViewComponent = (job) => {
    navigate("/jobView", { state: { job, fallback } });
  };
  const deleteThisApplication = (job) => {
    const jobId = job._id;
    const applicantId = usr.id;
    axios
      .patch(`/api/job/deleteApplication/${jobId}/${applicantId}`)
      .then((response) => {
        setMsg(response.data.msg);
        setAppliedJobs(appliedJobs.filter((item) => item._id !== jobId));
      })
      .catch((error) => {
        setErrors(error);
      });
  };

  if (status === "loading") {
    return (
      <div className=' w-full h-auto md:h-auto flex flex-col mt-10 text-center items-center justify-center'>
        <div className='w-16 h-16 border-4 border-dashed  rounded-full animate-spin dark:border-violet-400'></div>
      </div>
    );
  }

  if (status === "error") {
    return <span>Error</span>;
  }

  return (
    <div>
      {errors && <h1>{errors}</h1>}
      {usr.usertype === "candidate" ? (
        <div>
          <header className='bg-gray-50 mb-6'>
            <div className='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
              <div className='sm:justify-between sm:items-center sm:flex'>
                <div className='text-center sm:text-left'>
                  <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
                    {usr.fullname}
                  </h1>

                  <p className='mt-1.5 text-sm text-gray-500'>
                    Your applied jobs are listed bellow
                  </p>
                </div>

                <div className='flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center'>
                  <button
                    className='flex gap-2  items-center justify-center px-5 py-3 text-gray-500 transition bg-white border border-gray-200 rounded-lg hover:text-gray-700 focus:outline-none focus:ring'
                    type='button'
                  >
                    <span className='text-sm font-medium'> Message Box </span>

                    <MdMessage className='text-xl mt-1' />
                  </button>
                </div>
              </div>
            </div>
          </header>
          <Container>
            <Row>
              <Col lg={12} md={6} sm={12}>
                {appliedJobs.map((job) => {
                  return (
                    <div key={job._id} className='mb-4 rounded-lg bg-gray-100'>
                      <Card.Body
                        onClick={() => {
                          toJobViewComponent(job);
                        }}
                      >
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>
                          <p className='flex gap-3 font-normal text-sm  text-blue-700'>
                            <HiOutlineOfficeBuilding className='text-sm mt-1' />{" "}
                            {job.authorId.organization}
                          </p>
                        </Card.Subtitle>
                        <Card.Text>
                          <TextTruncate
                            line={1}
                            element='span'
                            truncateText='…'
                            text={job.body
                              .replace(/<[^>]+>/g, " ")
                              .replace(/&.*;/g, " ")}
                            textTruncateChild={
                              <span className='text-gray-700 font-normal mx-2 cursor-pointer'>
                                Read more
                              </span>
                            }
                          />
                        </Card.Text>

                        <dl className='flex mt-6'>
                          <div className='flex flex-col-reverse'>
                            <dd className='text-sm  text-red-800'>
                              {Moment(job.deadline).format("d MMM YYYY")}
                            </dd>
                          </div>

                          <div className='flex flex-col-reverse ml-3 sm:ml-6'>
                            <dd className='text-sm  text-gray-800'>
                              Total Applicants: {job.applicants.length}
                            </dd>
                          </div>
                        </dl>
                        <div className='card-footer'>
                          <div className='text-center'>
                            <button
                              onClick={() => {
                                deleteThisApplication(job);
                              }}
                              className='bg-blue-500 hover:bg-red-500 text-white font-semibold mx-1 py-2 px-4 rounded-lg'
                            >
                              Delete Application
                            </button>
                          </div>
                        </div>
                      </Card.Body>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <NoAccess />
      )}
    </div>
  );
};

export default AppliedJobs;
