import React, { useContext, useEffect } from "react";
import { UsersContext } from "../hooks/UsersContext";
import jwt_decode from "jwt-decode";

const Home = () => {
  const [user, setUser] = useContext(UsersContext);

  return (
    <div className='text-xl'>
      <h1>Hello</h1>
      <h1>{user.username}</h1>
    </div>
  );
};

export default Home;
