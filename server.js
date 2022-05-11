const express = require("express");
var cors = require("cors");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const connect = require("./config/db");
const routes = require("./routes/router");

app.use(cors());
app.use(morgan("dev"));
// db connection
connect();

//middlewares
app.use(bodyParser.json());

//routes
app.use(routes);

app.get("/", (req, res) => {
  res.send("Hello Symstar!");
});
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
