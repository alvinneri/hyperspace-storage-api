/**
 * Main application file
 */
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");
const config = require("./config");

// Connect to MongoDB
mongoose.connect(config.mongo.uri).then(() => console.log("mongodb connected"));
mongoose.connection.on("error", function (err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});

// Setup server
const app = express();
app.use(cors());
const server = http.createServer(app);
server.listen(9000, () => console.log(`The server is listening on port 9000`));
