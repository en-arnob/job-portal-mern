import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import { UsersContext } from "../hooks/UsersContext";
import Message from "./components/Message";
import Conversation from "./components/Conversation";
import ChatOnline from "./components/ChatOnline";
const Messenger = () => {
  const [user, setUser] = useContext(UsersContext);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollRef = useRef();
  const socket = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user.id);
    socket.current.on("getUsers", (users) => {
      // setOnlineUsers(
      //   user.followings.filter((f) => users.some((u) => u.userId === f))
      // );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/live-chat/conversation/${user.id}`
        );
        setConversations(res.data.conversation);
        // console.log(res.conversation);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user.id]);
  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/live-chat/message/${currentChat?._id}`
        );
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [currentChat]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = {
      sender: user.id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find((member) => member !== user.id);
    socket.current.emit("sendMessage", {
      senderId: user.id,
      receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(
        `http://127.0.0.1:8000/api/live-chat/message`,
        message
      );
      setMessages([...messages, res.data.savedMessage]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      {user && user.id ? (
        <div className="messenger">
          <div className="chatMenu">
            <div className="chatMenuWrapper">
              <p className="text-gray-600 fwt-bold font-serif chatMenuInput">
                Select a conversation
              </p>
              {/* <input placeholder="Search for friends" className="chatMenuInput" /> */}
              {conversations.map((conversationEl) => (
                <div onClick={() => setCurrentChat(conversationEl)}>
                  <Conversation
                    conversation={conversationEl}
                    currentUser={user}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="chatBox">
            <div className="chatBoxWrapper">
              {currentChat ? (
                <>
                  <div className="chatBoxTop">
                    {messages.map((msg) => (
                      <div ref={scrollRef}>
                        <Message message={msg} own={msg.sender === user.id} />
                      </div>
                    ))}
                  </div>
                  <div className="chatBoxBottom">
                    <textarea
                      className="chatMessageInput"
                      placeholder="write something..."
                      onChange={(e) => setNewMessage(e.target.value)}
                      value={newMessage}
                    ></textarea>
                    <button onClick={handleSubmit} className="chatSubmitButton">
                      Send
                    </button>
                  </div>
                </>
              ) : (
                <span className="noConversationText">
                  Open a conversation to start a chat.
                </span>
              )}
            </div>
          </div>
          <div className="chatOnline">
            <div className="chatOnlineWrapper">
              <ChatOnline
              //   onlineUsers={onlineUsers}
              //   currentId={user._id}
              //   setCurrentChat={setCurrentChat}
              />
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center mt-5 p-4">
            <p className="text-center text-slate-600 text-xl">
              Please login first to enter into messenger.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="text-center px-5 py-3 text-sm font-medium text-white transition bg-blue-600 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring"
              type="button"
            >
              Login
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default Messenger;
