import React, { useState, useContext, useEffect } from "react";
import { UsersContext } from "../hooks/UsersContext";
// import EditCandidatesProfile from "./components/EditCandidatesProfileO";
// import EditClientProfile from "./components/EditClientProfileO";
import EditCandidateProfile from "./components/EditCandidateProfile";
import EditClientProfile from "./components/EditClientProfile";

const EditProfilePage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
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
