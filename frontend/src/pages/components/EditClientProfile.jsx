import React, { useState, useContext } from "react";
import axios from "axios";
import { UsersContext } from "../../hooks/UsersContext";
import { useNavigate, useLocation } from "react-router-dom";
const EditClientProfile = () => {
  const [data, setData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useContext(UsersContext);
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const currentData = location.state.userData;

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `http://127.0.0.1:8000/userDetails/${user.id}/${user.usertype}`;
      // eslint-disable-next-line no-unused-vars
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
    <div className=''>
      <form onSubmit={handleSubmit}>
        <div className='mx-6 mt-4 '>
          <div class='bg-white  p-3 shadow-sm rounded-lg'>
            <div class='flex items-center space-x-2 font-semibold text-gray-900 leading-8'>
              <span clas='text-green-500'>
                <svg
                  class='h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
                  />
                </svg>
              </span>
              <span class='tracking-wide'>About</span>
            </div>
            <div class='text-gray-700'>
              <div class='grid md:grid-cols-2 text-sm'>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Full Name</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3 focus:bg-slate-200 focus:text-slate-700'
                      type='text'
                      placeholder={currentData.fullname}
                      onChange={handleChange}
                      value={data.fullname}
                      name='fullname'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Address</div>
                  <div class='px-4 py-2'>{currentData.officeAdress}</div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Gender</div>
                  <div class='px-4 py-2'>
                    <div class='form-check'>
                      <input
                        class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 focus:bg-slate-200 focus:text-slate-700 checked:bg-blue-600 checked:border-blue-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                        type='radio'
                        name='gender'
                        id='flexRadioDefault1'
                        onChange={handleChange}
                        value='male'
                      />
                      <label
                        class='form-check-label inline-block text-gray-800'
                        for='flexRadioDefault1'
                      >
                        Male
                      </label>
                    </div>
                    <div class='form-check'>
                      <input
                        class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 focus:bg-slate-200 focus:text-slate-700 checked:bg-blue-600 checked:border-blue-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                        type='radio'
                        name='gender'
                        id='flexRadioDefault2'
                        onChange={handleChange}
                        value='female'
                      />
                      <label
                        class='form-check-label inline-block text-gray-800'
                        for='flexRadioDefault2'
                      >
                        Female
                      </label>
                    </div>
                    <div class='form-check'>
                      <input
                        class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 focus:bg-slate-200 focus:text-slate-700 checked:bg-blue-600 checked:border-blue-600 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                        type='radio'
                        name='gender'
                        id='flexRadioDefault3'
                        onChange={handleChange}
                        value='other'
                      />
                      <label
                        class='form-check-label inline-block text-gray-800'
                        for='flexRadioDefault2'
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Contact No.</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      type='text'
                      placeholder={currentData.phone}
                      onChange={handleChange}
                      value={data.phone}
                      name='phone'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>NID</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      id='grid-nid'
                      type='text'
                      placeholder={currentData.nid}
                      onChange={handleChange}
                      value={data.nid}
                      name='nid'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>
                    Last/Current Organization
                  </div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      id='grid-insOrg'
                      type='text'
                      placeholder={currentData.organization}
                      onChange={handleChange}
                      value={data.organization}
                      name='organization'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Designation</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      id='grid-designation'
                      type='text'
                      placeholder={currentData.designation}
                      onChange={handleChange}
                      value={data.designation}
                      name='designation'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Email</div>
                  <div class='px-4 py-2'>
                    <a class='text-blue-800' href='mailto:jane@example.com'>
                      {currentData.email}
                    </a>
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Birthday</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      type='date'
                      onChange={handleChange}
                      value={data.birthday}
                      name='birthday'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Office Address</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      id='grid-address'
                      type='text'
                      placeholder={currentData.officeAdress}
                      onChange={handleChange}
                      value={data.officeAdress}
                      name='officeAdress'
                    />
                  </div>
                </div>
                <div class='grid grid-cols-2'>
                  <div class='px-4 py-2 font-semibold'>Website link</div>
                  <div class='px-4 py-2'>
                    <input
                      className='appearance-none block w-full h-5 rounded-md p-3  focus:bg-slate-200 focus:text-slate-700'
                      id='grid-website'
                      type='text'
                      placeholder={currentData.website}
                      onChange={handleChange}
                      value={data.website}
                      name='website'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class='mb-6'>
              {error && <p class='text-red-500 text-xs italic'>{error.msg}</p>}
            </div>
            <button
              type='submit'
              class='block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4'
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditClientProfile;
