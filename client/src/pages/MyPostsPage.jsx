import React, { useContext } from "react";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserImage from "../assets/images/dummy-member.jpg";
import ClientPosts from "./components/ClientPosts";

const MyPostsPage = () => {
  const [user, setUser] = useContext(UsersContext);
  return (
    <div>
      {user && (
        <Container>
          <Row>
            <Col lg={3} md={4} sm={12} className="bg-blue-300 userImagePrev">
              <div className="text-center my-3">
                <img
                  src={UserImage}
                  className="img-fluid rounded-circle"
                  alt="CandidatesIamge"
                />
              </div>
              <h5 className="userName text-center text-uppercase">
                {user.fullname}
              </h5>
              <p className="userName text-center mt-3">Total Post: </p>
            </Col>
            <Col lg={9} md={8} sm={12} className="userDetails md:mt-3">
              <ClientPosts />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MyPostsPage;
