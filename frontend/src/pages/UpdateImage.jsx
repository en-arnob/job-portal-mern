import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UpdateImage = () => {
  const location = useLocation();
  const userData = location.state.userData;
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post(
        "http://localhost:8000/client/62998d010e0b8f98b5d00abb/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      console.log("ji");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='min-h-screen p-4'>
      <h1 className='text-center'>{userData.fullname}</h1>
      <div className='container mt-4 text-center'>
        <form onSubmit={onSubmit}>
          <div className='custom-file'>
            <input
              onChange={onChangeFile}
              type='file'
              className='custom-file-input border-2'
              id='customFile'
            />
          </div>
          <input
            type='submit'
            value='Upload'
            className='bg-green-400 mt-4 py-2 px-4 text-white'
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateImage;
