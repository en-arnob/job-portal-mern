import axios from "axios";
import React, { useState } from "react";
import parse from "html-react-parser";
import { useNavigate } from "react-router-dom";
import RichTextEditor from "./RichTextEditor";
import { VscNote } from "react-icons/vsc";
import Breadcumb from "./Breadcumb";
import Select from "react-select";

const type = [
  { value: "Onsite", label: "Onsite" },
  { value: "Remote", label: "Remote" },
];

const CreateJobSection = () => {
  const [data, setData] = useState({
    token: localStorage.getItem("myToken"),
    title: "",
    body: "",
    tags: "",
    logoUrl: "",
    vaccancy: "",
    deadline: "",
    jobType: "",
    cityName: "",
    zip: "",
    address: "",
  });

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("clicked");
    // console.log(data);

    try {
      const apiUrl = "/api/job-post";
      // eslint-disable-next-line no-unused-vars
      const { data: res } = await axios.post(apiUrl, data);

      //   window.location.reload();
      navigate("/");
    } catch (err) {
      if (err) {
        setError(err);
      }
    }
  };

  return (
    <div>
      <Breadcumb pageName='Post Job' back={"/"} pageNum={0} />
      <section className='my-4 rounded-lg md:mx-6 bg-white'>
        <div className='max-w-screen-xl px-3 py-16 mx-auto sm:px-6 lg:px-8'>
          <h1 className='flex gap-2 px-2 mb-5 text-4xl text-rose-600'>
            <VscNote className='mt-1' />
            Post a Job Circular
          </h1>
          <div className='grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5'>
            <div className='p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-4'>
              <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                  <label className='' htmlFor='name'>
                    Title
                  </label>
                  <input
                    className='w-full p-3 text-sm border-gray-200 rounded-lg'
                    placeholder='Job Title'
                    type='text'
                    id='title'
                    onChange={handleChange}
                    value={data.title}
                    name='title'
                    required
                  />
                </div>

                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                  <div>
                    <label className='' for='tag'>
                      Tags
                    </label>
                    <input
                      className='w-full p-3 text-sm border-gray-200 rounded-lg'
                      placeholder='Skills'
                      type='text'
                      id='text'
                      onChange={handleChange}
                      value={data.tags}
                      name='tags'
                      required
                    />
                  </div>

                  <div>
                    <label className='' for='vaccancy'>
                      Vaccancy
                    </label>
                    <input
                      className='w-full p-3 text-sm border-gray-200 rounded-lg'
                      placeholder='Vaccancy'
                      type='number'
                      id='vaccancy'
                      onChange={handleChange}
                      value={data.vaccancy}
                      name='vaccancy'
                      required
                    />
                  </div>
                  <div>
                    <label className='' for='deadline'>
                      Deadline
                    </label>
                    <input
                      className='w-full p-3 text-sm border-gray-200 rounded-lg'
                      placeholder='Deadline'
                      type='date'
                      id='deadline'
                      onChange={handleChange}
                      value={data.deadline}
                      name='deadline'
                      required
                    />
                  </div>

                  <div>
                    <label className='' for='image-url'>
                      Job Type
                    </label>
                    {/* <Select
                      options={type}
                      placeholder='Onsite/Remote'
                      isSearchable
                      isClearable={true}
                      name='jobType'
                      autoFocus
                      onChange={setJType}
                      className='mt-2'
                    /> */}
                    <select
                      className='w-full p-3 text-sm border-gray-200 rounded-lg'
                      onChange={handleChange}
                      name='jobType'
                      id='jobType'
                    >
                      <option value='Remote'>Remote</option>
                      <option value='Onsite'>Onsite</option>
                    </select>
                  </div>
                  {data.jobType && data.jobType === "Onsite" ? (
                    <div>
                      <label className=''>Location</label>
                      <div className='grid md: grid-cols-3 gap-2'>
                        <input
                          className='w-full p-3 text-sm border-gray-200 rounded-lg'
                          placeholder='City Name'
                          type='text'
                          id='cityName'
                          onChange={handleChange}
                          value={data.cityName}
                          name='cityName'
                        />
                        <input
                          className='w-full p-3 text-sm border-gray-200 rounded-lg'
                          placeholder='Zip'
                          type='text'
                          id='zip'
                          onChange={handleChange}
                          value={data.zip}
                          name='zip'
                        />
                        <input
                          className='w-full p-3 text-sm border-gray-200 rounded-lg'
                          placeholder='Address'
                          type='text'
                          id='address'
                          onChange={handleChange}
                          value={data.address}
                          name='address'
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <label className='' for='image-url'>
                      Catagory
                    </label>
                    <select
                      className='w-full p-3 text-sm border-gray-200 rounded-lg'
                      onChange={handleChange}
                      name='category'
                      id='category'
                    >
                      <option value='IT-Software-Web'>IT-Software-Web</option>
                      <option value='Accounting-Finance'>
                        Accounting-Finance
                      </option>
                      <option value='Bank'>Bank</option>
                      <option value='Engineer-Architects'>
                        Engineer-Architects
                      </option>
                      <option value='Textile'>Textile</option>
                      <option value='HR'>HR</option>
                      <option value='Management'>Management</option>
                      <option value='Graphic-Design'>Graphic-Design</option>
                      <option value='Product-Operation'>
                        Product/Operation
                      </option>
                      <option value='Digital-Marketing'>
                        Digital-Marketing
                      </option>
                      <option value='Sales-Marketing'>Sales-Marketing</option>
                      <option value='Security-Consultant'>
                        Security-Consultant
                      </option>
                      <option value='Research'>Research</option>
                      <option value='Electrical'>Electrical</option>
                      <option value='Telecommunications'>
                        Telecommunications
                      </option>
                      <option value='Medical'>Medical</option>
                      <option value='Pharmaceuticals'>Pharmaceuticals</option>
                      <option value='NGO'>NGO</option>
                      <option value='Data-Entry'>Data-Entry</option>
                      <option value='Driving'>Driving</option>
                      <option value='Law'>Law</option>
                    </select>
                  </div>
                </div>

                {/* <div className='grid grid-cols-1 gap-4 text-center sm:grid-cols-3'>
                <div>
                  <input
                    className='sr-only'
                    id='option1'
                    type='radio'
                    tabindex='-1'
                  />
                  <label
                    for='option1'
                    className='block w-full p-3 border border-gray-200 rounded-lg'
                    tabindex='0'
                  >
                    <span className='text-sm font-medium'> Onsite </span>
                  </label>
                </div>

                <div>
                  <input
                    className='sr-only'
                    id='option2'
                    type='radio'
                    tabindex='-1'
                  />
                  <label
                    for='option2'
                    className='block w-full p-3 border border-gray-200 rounded-lg'
                    tabindex='0'
                  >
                    <span className='text-sm font-medium'> Remote </span>
                  </label>
                </div>

                <div>
                  <input
                    className='sr-only'
                    id='option3'
                    type='radio'
                    tabindex='-1'
                  />
                  <label
                    for='option3'
                    className='block w-full p-3 border border-gray-200 rounded-lg'
                    tabindex='0'
                  >
                    <span className='text-sm font-medium'> Contractual </span>
                  </label>
                </div>
              </div> */}

                {/* <div>
                <label className='sr-only' for='body'>
                  Post Body
                </label>
                <textarea
                  className='w-full p-3 text-sm border-gray-200 rounded-lg'
                  placeholder='Post Body'
                  rows='8'
                  id='message'
                  onChange={handleChange}
                  value={data.body}
                  name='body'
                ></textarea>
              </div> */}
                <div>
                  <RichTextEditor data={data} setData={setData} />
                </div>
                <div>
                  <h1 className='text-lg  inline text-stone-600 p-2'>
                    Preview
                  </h1>
                  <p className='mt-4 py-4 px-2 rounded bg-stone-100'>
                    {parse(data.body)}
                  </p>
                </div>

                <div className='mt-4'>
                  <button
                    type='submit'
                    className='inline-flex items-center justify-center w-full px-5 py-3 text-white bg-indigo-700 rounded-lg sm:w-auto'
                  >
                    <span className='font-medium'> Post Job </span>

                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='w-5 h-5 ml-3'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M14 5l7 7m0 0l-7 7m7-7H3'
                      />
                    </svg>
                  </button>
                  {error && (
                    <p className='text-red-500 italic mt-4'>
                      Failed to post the job, Check and fill all the fields.
                    </p>
                  )}
                </div>
              </form>
            </div>
            <div className='lg:py-2 lg:col-span-6 my-10'>
              <br />
              <div className='text-center items-center justify-center'>
                <h1 className='text-3xl font-extrabold sm:text-5xl'>
                  Let us boost your
                  <strong className='font-extrabold text-rose-700 sm:block'>
                    Job Post.
                  </strong>
                </h1>
                <p className=' text-center items-center justify-centermax-w-lg mt-4 sm:leading-relaxed sm:text-xl'>
                  You can post a sponsored job that appears as one of the very
                  first job cards in ICT.jobs
                </p>
                <div className='flex flex-wrap gap-4 mt-8 text-center items-center justify-center'>
                  <a
                    className='block w-full no-underline px-12 py-3 text-sm font-medium text-white rounded shadow bg-rose-600 sm:w-auto active:bg-rose-500 hover:bg-rose-700 focus:outline-none focus:ring'
                    href='/get-started'
                  >
                    Get Started
                  </a>

                  <a
                    className='block no-underline w-full px-12 py-3 text-sm font-medium bg-white rounded shadow text-rose-600 sm:w-auto hover:text-rose-700 active:text-rose-500 focus:outline-none focus:ring'
                    href='/about'
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreateJobSection;
