import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import EditImg from "../../assets/images/EditClients.svg";

const EditClientProfile = () => {
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
        <form>
          <Row>
            <div className="text-center">
              <p className="font-mono text-3xl font-extrabold text-blue-700">
                Edit your Profile
              </p>
            </div>

            <Col lg={6} md={6} sm={12}>
              <div className="mt-5">
                <Card.Body className="text-center">
                  <div
                    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                    //   onSubmit={handleSubmit}
                  >
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
                    </div>

                    <div class="mb-6">
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                        //   onChange={handleChange}
                        //   value={data.password}
                        name="password"
                      />
                      <label
                        class="block text-gray-700 text-sm font-bold mb-2"
                        for="password"
                      >
                        Confirm Password
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-password"
                        type="password"
                        placeholder="******************"
                        // onChange={handleChange}
                        // value={data.confirmPassword}
                        // name="confirmPassword"
                      />
                      {/* {error && (
                    <p class="text-red-500 text-xs italic">{error.msg}</p>
                  )} */}
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
                        Organization
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-insOrg"
                        type="text"
                        placeholder="Enter Organization"
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
                        for="grid-nid"
                      >
                        Nid
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-nid"
                        type="text"
                        placeholder="nid number of account holder"
                        //   onChange={handleChange}
                        //   value={data.email}
                        name="nid"
                      />

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-address"
                      >
                        Office Address
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-address"
                        type="text"
                        placeholder="Proper address of office"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="address"
                      />

                      <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-city"
                          >
                            City
                          </label>
                          <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Dhaka"
                          />
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-state"
                          >
                            State
                          </label>
                          <div class="relative">
                            <select
                              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                            >
                              <option>Dhanmondi</option>
                              <option>Mohammadpur</option>
                              <option>Basundhora</option>
                            </select>
                          </div>
                        </div>
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-zip"
                          >
                            Zip
                          </label>
                          <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="1215"
                          />
                        </div>
                      </div>

                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-website"
                      >
                        Website Link
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-website"
                        type="text"
                        placeholder="Enter website url"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="website"
                      />
                      <label
                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-image"
                      >
                        Upload Company logo or image
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-image"
                        type="file"
                        //   onChange={handleChange}
                        //   value={data.phone}
                        name="image"
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

export default EditClientProfile;
