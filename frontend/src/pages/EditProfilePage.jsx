import React, { useState, useContext } from "react";
import { UsersContext } from "../hooks/UsersContext";
import EditCandidatesProfile from "./components/EditCandidatesProfile";
import EditClientProfile from "./components/EditClientProfile";

const EditProfilePage = () => {
  const [user, setUser] = useContext(UsersContext);
  if (user.usertype === "candidate") {
    return (
      <div>
        <EditCandidatesProfile />
      </div>
    );
  } else if (user.usertype === "recruiter") {
    return (
      <div>
        <EditClientProfile />
      </div>
    );
  }
};

export default EditProfilePage;
