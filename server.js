const express = require("express");
var cors = require("cors");
require("dotenv").config();
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const app = express();
const bodyParser = require("body-parser");
const connect = require("./config/db");
const routes = require("./routes/router");

app.use(cors());
app.use(morgan("dev"));

// rate limit of ip req
const limit = rateLimit({
  max: 100,
  windowMs: 1 * 60 * 1000,
  message: "Too many request from this IP, please try again after an hour",
});
// db connection
connect();

//middlewares
app.use("/", limit);
app.use(bodyParser.json());
// no sql query sanitization
app.use(mongoSanitize());
// xss sanitization
app.use(xss());
// parameter pollution prevention will be added in future
//routes
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello Symstar!");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
