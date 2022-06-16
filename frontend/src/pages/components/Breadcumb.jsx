import React from "react";
// import useBreadcrumbs from "use-react-router-breadcrumbs";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const Breadcumb = (props) => {
  const navigate = useNavigate();

  // const breadcrumbs = useBreadcrumbs();
  return (
    <React.Fragment>
      <div className='mx-4 flex gap-2 px-2 '>
        <h1
          onClick={() => {
            navigate(props.back, { state: { pageNum: props.pageNum } });
          }}
          className='text-lg bg-gray-100 px-2 rounded cursor-pointer flex hover:bg-red-200'
        >
          <TiArrowBack className='mt-1' /> Back
        </h1>
        <h1 className='text-lg bg-gray-100 px-2 rounded'>/{props.pageName}</h1>
      </div>
    </React.Fragment>
  );
};

export default Breadcumb;
