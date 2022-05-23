import React, { useState, useContext } from "react";
import { UsersContext } from "../hooks/UsersContext";
import CandidatesProfileDetails from "./CandidatesProfileDetails";
import ClientsProfileDetails from "./components/ClientsProfileDetails";

const ProfilePage = () => {
  const [user, setUser] = useContext(UsersContext);
  if (user.usertype === "candidate") {
    return (
      <div>
        <CandidatesProfileDetails />
      </div>
    );
  } else if (user.usertype === "recruiter") {
    return (
      <div>
        <ClientsProfileDetails />
      </div>
    );
  }
};

export default ProfilePage;
