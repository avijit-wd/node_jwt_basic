const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

mongoose.connect(
  process.env.CONNECT_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("DB connected");
  }
);

const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

app.use("/api/user", authRoute);
app.use("/api/post", postRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
