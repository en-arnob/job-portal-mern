import React, { Fragment } from "react";

const FileUpload = () => {
  return (
    <Fragment>
      <form>
        <div className='custom-file'>
          <input
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
    </Fragment>
  );
};

export default FileUpload;
