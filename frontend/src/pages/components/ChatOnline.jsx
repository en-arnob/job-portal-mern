import React from "react";
import dummy from "../../assets/images/blank-profile-picture.webp";

const ChatOnline = () => {
  //     const [friends, setFriends] = useState([]);
  //   const [onlineFriends, setOnlineFriends] = useState([]);
  //   const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  //   useEffect(() => {
  //     const getFriends = async () => {
  //       const res = await axios.get("/users/friends/" + currentId);
  //       setFriends(res.data);
  //     };

  //     getFriends();
  //   }, [currentId]);

  //   useEffect(() => {
  //     setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  //   }, [friends, onlineUsers]);

  //   const handleClick = async (user) => {
  //     try {
  //       const res = await axios.get(
  //         `/conversations/find/${currentId}/${user._id}`
  //       );
  //       setCurrentChat(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div className="chatOnline">
      {/* {onlineFriends.map((o) => ( */}
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src={dummy} alt="" />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">User</span>
      </div>
    </div>
  );
};

export default ChatOnline;
