/**
 * Main application file
 */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const config = require("./config");
const router = require("./routes");

// Connect to MongoDB
mongoose.connect(config.mongo.uri).then(() => console.log("mongodb connected"));
mongoose.connection.on("error", function (err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

// Setup server
const app = express();
require("./middleware/auth");
app.use(express.json());
app.use(cors());
const server = http.createServer(app);
app.use(router);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  if (error.code === 11000) {
    res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  } else {
    res.status(200).json({
      success: false,
      message: error.message,
    });
  }
});

server.listen(9000, () => console.log(`The server is listening on port 9000`));
