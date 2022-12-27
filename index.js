const mongoose = require("mongoose");
const express = require("express");
const app = express();
require("dotenv/config");
const auth = require("./routes/auth");
const user = require("./routes/user");

// connection with database
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, () => {
  console.log("Connected with database");
});

// middlewares
app.use(express.json());

// routes
app.use("/api/auth", auth);
app.use("/api/users", user);

// server listen
app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started at ${process.env.PORT} port`);
});