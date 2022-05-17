import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(UserContext);
  let token = localStorage.removeItem("myToken");
  // navigate("/login");

  token = false;
  if (!token) {
    dispatch({ type: "USER", payload: false });
  }
  useEffect(() => {
    navigate("/login");
  });
  return alert("Logout Success");
};

export default Logout;
