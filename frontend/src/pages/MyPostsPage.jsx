import React, { useContext } from "react";
import { UsersContext } from "../hooks/UsersContext";
import { Col, Container, Row } from "react-bootstrap";
import UserImage from "../assets/images/blank-profile-picture.webp";
import ClientPosts from "./components/ClientPosts";

const MyPostsPage = () => {
  const [user, setUser] = useContext(UsersContext);
  return (
    <div>
      {user && (
        <Container>
          <Row>
            <Col
              lg={3}
              md={4}
              sm={12}
              className="bg-slate-500 p-6 userImagePrev rounded-lg"
            >
              <div className="text-center my-3">
                <img
                  src={UserImage}
                  className="img-fluid rounded-circle"
                  alt="CandidatesIamge"
                />
              </div>
              <h5 className="userName text-center text-gray-200 text-uppercase">
                {user.fullname}
              </h5>
            </Col>
            <Col lg={9} md={8} sm={12} className="userDetails md:mt-3">
              <ClientPosts user={user} />
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MyPostsPage;
