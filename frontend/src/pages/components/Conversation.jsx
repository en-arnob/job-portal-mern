import React, { useEffect, useState } from "react";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);

  console.log(currentUser.usertype);
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
        const res = await axios.get(
          `http://127.0.0.1:8000/userDetails/${friendId}/${findUserType}`
        );
        setUser(res.data.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://images.pexels.com/photos/3686769/pexels-photo-3686769.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      {user && <span className="conversationName">{user.fullname}</span>}
    </div>
  );
};

export default Conversation;
