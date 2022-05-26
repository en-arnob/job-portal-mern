import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ClientPosts = (props) => {
  const arrEl = props.totalPost;
  return (
    <div>
      <Container>
        <Row>
          {arrEl.map((arrEl) => {
            return (
              <>
                <Col lg={12} md={6} sm={12}>
                  <div className=" bg-gray-100 shadow-xl  hover:shadow-2xl">
                    <Card.Body>
                      <Card.Title>{arrEl.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        <p className="flex gap-3 font-normal text-sm  text-blue-700">
                          <HiOutlineOfficeBuilding className="text-sm mt-1" />{" "}
                          {arrEl.jobType}
                        </p>
                      </Card.Subtitle>
                      <Card.Text className="text-justify">
                        {arrEl.body}
                      </Card.Text>

                      <dl class="flex mt-6">
                        <div class="flex flex-col-reverse">
                          <dd class="text-sm  text-red-800">
                            {arrEl.deadline}
                          </dd>
                        </div>

                        <div class="flex flex-col-reverse ml-3 sm:ml-6">
                          <dd class="text-sm  text-gray-800">
                            Total Applicants: {arrEl.applicants}
                          </dd>
                        </div>
                      </dl>
                      <div className="card-footer">
                        <div className="text-center">
                          <button class="bg-sky-300 hover:bg-sky-400 text-white font-bold mx-1 py-2 px-3 rounded-full">
                            Applicants
                          </button>
                          <button class="bg-green-600 hover:bg-green-700 text-white font-bold mx-1 py-2 px-3 rounded-full">
                            Extend Deadline
                          </button>
                          <button class="bg-red-600 hover:bg-red-700 text-white font-bold mx-1 py-2 px-4 rounded-full">
                            Delete Post
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
