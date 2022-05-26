import React from "react";
import jwt_decode from "jwt-decode";
import { MdMessage } from "react-icons/md";
import { Col, Container, Row, Card } from "react-bootstrap";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const AppliedJobs = () => {
  const token = localStorage.getItem("myToken");
  let usr = "";
  if (token) {
    usr = jwt_decode(token).user;
  }

  return (
    <div>
      <header className='bg-gray-50 mb-6'>
        <div class='max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8'>
          <div class='sm:justify-between sm:items-center sm:flex'>
            <div class='text-center sm:text-left'>
              <h1 class='text-2xl font-bold text-gray-900 sm:text-3xl'>
                {usr.fullname}
              </h1>

              <p class='mt-1.5 text-sm text-gray-500'>
                Your applied jobs are listed bellow
              </p>
            </div>

            <div class='flex flex-col gap-4 mt-4 sm:flex-row sm:mt-0 sm:items-center'>
              <button
                class='flex gap-2  items-center justify-center px-5 py-3 text-gray-500 transition bg-white border border-gray-200 rounded-lg hover:text-gray-700 focus:outline-none focus:ring'
                type='button'
              >
                <span class='text-sm font-medium'> Message Box </span>

                <MdMessage className='text-xl mt-1' />
              </button>
            </div>
          </div>
        </div>
      </header>
      <Container>
        <Row>
          <Col lg={12} md={6} sm={12}>
            <div className=' rounded-lg bg-gray-100'>
              <Card.Body>
                <Card.Title>Cyber Security Specialist</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>
                  <p className='flex gap-3 font-normal text-sm  text-blue-700'>
                    <HiOutlineOfficeBuilding className='text-sm mt-1' /> Google
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <dl class='flex mt-6'>
                  <div class='flex flex-col-reverse'>
                    <dd class='text-sm  text-red-800'>Deadline: 20-11-2022</dd>
                  </div>

                  <div class='flex flex-col-reverse ml-3 sm:ml-6'>
                    <dd class='text-sm  text-gray-800'>
                      Total Applicants: 100
                    </dd>
                  </div>
                </dl>
                <div className='card-footer'>
                  <div className='text-center'>
                    <button class='bg-green-600 hover:bg-green-700 text-white font-bold mx-1 py-2 px-3 rounded-full'>
                      View Job
                    </button>
                    <button class='bg-red-600 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 rounded-full'>
                      Delete Application
                    </button>
                  </div>
                </div>
              </Card.Body>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AppliedJobs;
