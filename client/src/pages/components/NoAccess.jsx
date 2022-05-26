import React from "react";
import wrn from "../../assets/images/wrn.svg";

const NoAccess = () => {
  return (
    <h2 className='p-2 mt-10 mx-10 font-normal text-2xl  text-pink-500'>
      You don't have access to this page
      <img src={wrn} className=' mt-10 p-4 img-fluid' alt='userImage' />
    </h2>
  );
};

export default NoAccess;
