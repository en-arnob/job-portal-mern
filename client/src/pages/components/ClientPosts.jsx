import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { HiOutlineOfficeBuilding } from "react-icons/hi";

const ClientPosts = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={12} md={6} sm={12}>
            <div className=" bg-gray-100 shadow-xl  hover:shadow-2xl">
              <Card.Body>
                <Card.Title>Cyber Security Specialist</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p className="flex gap-3 font-normal text-sm  text-blue-700">
                    <HiOutlineOfficeBuilding className="text-sm mt-1" /> Google
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>

                <dl class="flex mt-6">
                  <div class="flex flex-col-reverse">
                    <dd class="text-sm  text-red-800">Deadline: 20-11-2022</dd>
                  </div>

                  <div class="flex flex-col-reverse ml-3 sm:ml-6">
                    <dd class="text-sm  text-gray-800">
                      Total Applicants: 100
                    </dd>
                  </div>
                </dl>
                <div className="card-footer">
                  <div className="text-center">
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
          <Col lg={12} md={6} sm={12} className="gy-5">
            <div className=" bg-gray-100 shadow-xl  hover:shadow-2xl">
              <Card.Body>
                <Card.Title>Cyber Security Specialist</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p className="flex gap-3 font-normal text-sm  text-blue-700">
                    <HiOutlineOfficeBuilding className="text-sm mt-1" /> Google
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia sed minima architecto? Quia dolore non quae ab
                  reiciendis mollitia pariatur a aut voluptatibus debitis amet
                  nihil officiis qui enim officia, tempora incidunt veritatis
                  ipsa iure ratione sint. Porro, temporibus et?
                </Card.Text>

                <dl class="flex mt-6">
                  <div class="flex flex-col-reverse">
                    <dd class="text-sm  text-red-800">Deadline: 20-11-2022</dd>
                  </div>

                  <div class="flex flex-col-reverse ml-3 sm:ml-6">
                    <dd class="text-sm  text-gray-800">
                      Total Applicants: 100
                    </dd>
                  </div>
                </dl>
                <div className="card-footer">
                  <div className="text-center">
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

          <Col lg={12} md={6} sm={12} className="gy-5">
            <div className=" bg-gray-100 shadow-xl  hover:shadow-2xl">
              <Card.Body>
                <Card.Title>Cyber Security Specialist</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <p className="flex gap-3 font-normal text-sm  text-blue-700">
                    <HiOutlineOfficeBuilding className="text-sm mt-1" /> Google
                  </p>
                </Card.Subtitle>
                <Card.Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aliquid deserunt at nisi, reiciendis laudantium minima impedit
                  animi eos veritatis! Perferendis.
                </Card.Text>

                <dl class="flex mt-6">
                  <div class="flex flex-col-reverse">
                    <dd class="text-sm  text-red-800">Deadline: 20-11-2022</dd>
                  </div>

                  <div class="flex flex-col-reverse ml-3 sm:ml-6">
                    <dd class="text-sm  text-gray-800">
                      Total Applicants: 100
                    </dd>
                  </div>
                </dl>
                <div className="card-footer">
                  <div className="text-center">
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
        </Row>
      </Container>
    </div>
  );
};

export default ClientPosts;
