const express = require("express");
const cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const bodyParser = require("body-parser");
const connect = require("./config/db");
const routes = require("./routes/router");
const path = require("path");

const app = express();

app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(morgan("dev"));

// rate limit of ip req
const limit = rateLimit({
  max: 200,
  windowMs: 15 * 60 * 1000,
  message: "Too many request from this IP, please try again after an hour",
});
// db connection
connect();

//middlewares
app.use("/", limit);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// no sql query sanitization
app.use(mongoSanitize());
// xss sanitization
// app.use(xss());
// parameter pollution prevention will be added in future
//routes
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello Symstar!");
});
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

// socket

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
  console.log(socketId);
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when ceonnect
  console.log("a user connected.");

  //take userId and socketId from user
  socket.on("addUser", (userId) => {
    addUser(userId, socket.id);
    io.emit("getUsers", users);
  });

  //send and get message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    if (user) {
      io.to(user.socketId).emit("getMessage", {
        senderId,
        text,
      });
    }
  });

  //when disconnect
  socket.on("disconnect", () => {
    console.log("a user disconnected!");
    removeUser(socket.id);
    io.emit("getUsers", users);
  });
});
