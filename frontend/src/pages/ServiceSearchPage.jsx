import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Map from "./components/Map";
import axios from "axios";

const ServiceSearchPage = () => {
  const location = useLocation();
  const [prop, setProp] = useState({});

  useEffect(() => {
    if (location.state) {
      setProp(location.state.inp);
    }
  }, [location]);

  const getOtsCand = () => {};

  return (
    <div className='min-h-screen grid md:grid-cols-3 gap-4'>
      <div className=''>
        <h4 className='ml-4'>
          {prop.serviceType} providers in {prop.location}
        </h4>
      </div>
      <div className='col-span-2'>
        <Map />
      </div>
    </div>
  );
};

export default ServiceSearchPage;
