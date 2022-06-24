import React, { useEffect, useState } from "react";
import axios from "axios";
import dummy from "../../assets/images/blank-profile-picture.webp";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser.id);
    const getUser = async () => {
      let findUserType;
      if (currentUser.usertype === "recruiter") {
        findUserType = "candidate";
      } else if (currentUser.usertype === "candidate") {
        findUserType = "recruiter";
      }
      try {
        const res = await axios.get(`/userDetails/${friendId}/${findUserType}`);
        setUser(res.data.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className='conversation'>
      <img className='conversationImg' alt='profile' src={dummy} />

      {user && <span className='conversationName'>{user.fullname}</span>}
    </div>
  );
};

export default Conversation;
