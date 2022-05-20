import React, { useState, useContext } from "react";
import axios from "axios";
import { UsersContext } from "../../hooks/UsersContext";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row, Card } from "react-bootstrap";
import EditImg from "../../assets/images/EditCandidates.svg";

const EditCandidatesProfile = () => {
  const [data, setData] = useState({});
  const [user, setUser] = useContext(UsersContext);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://127.0.0.1:8000/userDetails/${user.id}/${user.usertype}`;
      const { data: res } = await axios.patch(url, data);
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.errors[0]);
      }
    }
  };
  return (
    <div>
      <Container>
        <Row>
          <Col lg={3} md={12} sm={12}></Col>
          <Col lg={6} md={12} sm={12}>
            <div className="text-center">
              <img src={EditImg} className="img-fluid" />
            </div>
          </Col>
          <Col lg={3} md={12} sm={12}></Col>
        </Row>
        <form onSubmit={handleSubmit}>
          <Row>
            <div className="text-center">
              <p className="font-mono text-3xl font-extrabold text-blue-700">
                Edit your Profile
              </p>
            </div>

            <Col lg={6} md={6} sm={12}>
              <div className="mt-5">
                <Card.Body className="text-center">
                  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        Full Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-full-name"
                        type="text"
                        placeholder="Enter Name"
                        //   onChange={handleChange}
                        //   value={data.fullname}
                        name="fullname"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-user-name"
                      >
                        Username
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-full-name"
                        type="text"
                        placeholder="Enter username"
                        //   onChange={handleChange}
                        //   value={data.username}
                        name="username"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-email"
                      >
                        Email
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-full-name"
                        type="email"
                        placeholder="Enter email address"
                        //   onChange={handleChange}
                        //   value={data.email}
                        name="email"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-phone"
                      >
                        Phone
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-full-name"
                        type="text"
                        placeholder="Enter phone number"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="phone"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-birthday"
                      >
                        Birthday
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-full-name"
                        type="date"
                        // onChange={handleChange}
                        // value={data.fullname}
                        // name="birthday"
                      />
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-image"
                      >
                        Upload Image
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-image"
                        type="file"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="image"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-gender"
                      >
                        Select Gender
                      </label>
                      <div class="flex">
                        <div>
                          <div class="form-check">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-sky-500 checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="gender"
                              id="flexRadioDefault1"
                              // onChange={handleChange}
                              value="male"
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault1"
                            >
                              Male
                            </label>
                          </div>
                          <div class="form-check">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-sky-500 checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="gender"
                              id="flexRadioDefault2"
                              // onChange={handleChange}
                              value="female"
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault2"
                            >
                              Female
                            </label>
                          </div>

                          <div class="form-check">
                            <input
                              class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-sky-500 checked:bg-blue-800 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                              type="radio"
                              name="gender"
                              id="flexRadioDefault3"
                              // onChange={handleChange}
                              value="other"
                            />
                            <label
                              class="form-check-label inline-block text-gray-800"
                              for="flexRadioDefault3"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                      </div>

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-cover"
                      >
                        Cover letter
                      </label>
                      <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-cover"
                        type="text"
                        // onChange={handleChange}
                        // value={data.fullname}
                        name="cover"
                        placeholder="Write a cover letter"
                      />
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-bio"
                      >
                        Bio
                      </label>
                      <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-experience"
                        type="text"
                        // onChange={handleChange}
                        // value={data.fullname}
                        name="bio"
                        placeholder="Write your bio"
                      />
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <div className="mt-5 md:mt-0 sm:mt-0">
                <Card.Body className="text-center">
                  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-insOrg"
                      >
                        Institute/Organization
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-insOrg"
                        type="text"
                        placeholder="Enter Institute/Organization"
                        //   onChange={handleChange}
                        //   value={data.fullname}
                        name="insOrg"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-designation"
                      >
                        Designation
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-designation"
                        type="text"
                        placeholder="Enter designation"
                        //   onChange={handleChange}
                        //   value={data.username}
                        name="designation"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-skill"
                      >
                        Skills
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-skill"
                        type="text"
                        placeholder="Skill1,Skill2...."
                        //   onChange={handleChange}
                        //   value={data.email}
                        name="skill"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-Expertisee"
                      >
                        Expertise
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-Expertise"
                        type="text"
                        placeholder="Expertise1,Expertise2..."
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="expertise"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-experience"
                      >
                        Experience
                      </label>
                      <textarea
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-experience"
                        type="text"
                        // onChange={handleChange}
                        // value={data.fullname}
                        name="experience"
                        placeholder="Enter experinces"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-portfolio"
                      >
                        Portfolio Link
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-portfolio"
                        type="text"
                        placeholder="Enter portfolio url"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="portfolio"
                      />
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-certificate"
                      >
                        Certificate
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-certificate"
                        type="text"
                        placeholder="Online certificate only"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="certificate"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-resume"
                      >
                        Upload Resume
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-resume"
                        type="file"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="resume"
                      />
                    </div>

                    <div class="mb-6">
                      {/* {error && (
                      <p class="text-red-500 text-xs italic">{error.msg}</p>
                    )} */}
                    </div>
                    <div class="content-center">
                      <button
                        class="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Update Profile
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default EditCandidatesProfile;
