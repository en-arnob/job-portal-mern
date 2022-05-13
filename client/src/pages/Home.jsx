import React, { useContext } from "react";
import { UserContext } from "../hooks/UserContext";

const Home = () => {
  const { value, setValue } = useContext(UserContext);
  return (
    <div className='text-xl'>
      <h1>Hello</h1>
      <h1>{value}</h1>
    </div>
  );
};

export default Home;
