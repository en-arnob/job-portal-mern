import React from "react";
import CandidatesProfileDetails from "./CandidatesProfileDetails";
import ClientsProfileDetails from "./components/ClientsProfileDetails";

const ProfilePage = () => {
  return (
    <div>
      {/* toggle two type of user under construction */}
      {/* <CandidatesProfileDetails /> */}
      <ClientsProfileDetails />
    </div>
  );
};

export default ProfilePage;
