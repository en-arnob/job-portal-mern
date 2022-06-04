import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { UsersContext } from "../hooks/UsersContext";

const Logout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  const [user, setUser] = useContext(UsersContext);
  let token = localStorage.removeItem("myToken");
  setUser({});
  // navigate("/login");

  token = false;
  if (!token) {
    dispatch({ type: "USER", payload: false });
  }
  useEffect(() => {
    navigate("/login");
  });
  // return alert("Logout Success");
};

export default Logout;
