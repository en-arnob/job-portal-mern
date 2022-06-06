import React, { useState, useContext } from "react";
import { UsersContext } from "../hooks/UsersContext";
// import EditCandidatesProfile from "./components/EditCandidatesProfileO";
// import EditClientProfile from "./components/EditClientProfileO";
import EditCandidateProfile from "./components/EditCandidateProfile";
import EditClientProfile from "./components/EditClientProfile";

const EditProfilePage = () => {
  const [user, setUser] = useContext(UsersContext);
  if (user.usertype === "candidate") {
    return (
      <div>
        <EditCandidateProfile />;
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
