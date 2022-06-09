import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ClientPosts = (props) => {
  const user = props.user;
  const navigate = useNavigate();
  const [jobData, setJobData] = useState([]);
  const [data, setData] = useState({});
  useEffect(() => {
    const getJobDtails = () => {
      axios
        .get(`http://127.0.0.1:8000/api/jobs/client-job/${user.id}`)
        .then((response) => {
          const catchData = response.data.job;
          setJobData(catchData);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getJobDtails();
  }, [user]);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const deleteJob = async (postId, e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://127.0.0.1:8000/api/jobs/client-job/${postId}`);
      setJobData(jobData.filter((item) => item._id !== postId));
      navigate("/mypost");
    } catch (error) {
      // console.log(error);
    }
  };

  const applicantsButton = (postDetails) => {
    navigate("/applicants", { state: { jobDetails: postDetails } });
  };

  const extendDeadline = async (postId, e) => {
    e.preventDefault();
    try {
      const url = `http://127.0.0.1:8000/api/jobs/client-job/${postId}`;
      // eslint-disable-next-line no-unused-vars
      const { data: res } = await axios.patch(url, data);
      window.location.reload(false);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        // setError(error.response.data.errors[0]);
      }
    }
  };

  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12}>
            <div className='bg-sky-400 p-4 rounded-lg text-center my-3'>
              <h5 className='userName text-center text-white'>
                Total Post: {jobData.length}
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          {jobData.map((arrEl) => {
            return (
              <>
                <Col lg={12} md={6} sm={12}>
                  <div className=' bg-gray-200 rounded-lg mb-3'>
                    <Card.Body>
                      <Card.Title>{arrEl.title}</Card.Title>
                      <Card.Subtitle className='mb-2 text-muted'>
                        <p className='flex gap-3 font-normal text-sm  text-blue-700'>
                          <HiOutlineOfficeBuilding className='text-sm mt-1' />{" "}
                          {arrEl.jobType}
                        </p>
                      </Card.Subtitle>
                      <Card.Text className='text-justify'>
                        {arrEl.body}
                      </Card.Text>

                      <dl class='flex mt-6'>
                        <div class='flex flex-col-reverse'>
                          <dd class='text-sm  text-red-800'>
                            {arrEl.deadline}
                          </dd>
                        </div>

                        <div class='flex flex-col-reverse ml-3 sm:ml-6'>
                          <dd class='text-sm  text-gray-800'>
                            Total Applicants: {arrEl.applicants.length}
                          </dd>
                        </div>
                      </dl>
                      <div className='card-footer'>
                        <div className='text-center'>
                          <input
                            class=' appearance-none border my-2 w-30 py-2 px-3  text-gray-700 rounded-full leading-tight '
                            id='deadline'
                            type='text'
                            onChange={handleChange}
                            value={data.deadline}
                            placeholder='E.g. 10-Feb-2022'
                            name='deadline'
                          />

                          <button
                            class='bg-purple-500 hover:bg-purple-700 my-2 text-white font-bold mx-1 py-2 px-3 rounded-full'
                            onClick={(e) => extendDeadline(arrEl._id, e)}
                          >
                            Extend Deadline
                          </button>
                          <button
                            class='bg-rose-600 my-2 hover:bg-rose-700 text-white font-bold mx-1 py-2 px-4 rounded-full'
                            onClick={(e) => deleteJob(arrEl._id, e)}
                          >
                            Delete Post
                          </button>
                          <button
                            class='bg-sky-300 my-2 hover:bg-sky-400 text-white font-bold mx-1 py-2 px-3 rounded-full'
                            onClick={() => {
                              applicantsButton(arrEl);
                            }}
                          >
                            Applicants
                          </button>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ClientPosts;
