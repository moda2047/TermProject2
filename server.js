const express = require("express");
const mongoose = require("mongoose");
const houseController = require("./routers/houseController");
const { generateDummyData } = require("./faker");

const app = express();
const hostname = "localhost";
const port = 3000;
const DB_URI = "mongodb://127.0.0.1:27017/testdb";
const options = {
  autoIndex: false, // Don't build indexes
  maxPoolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};

const server = async () => {
  try {
    await mongoose.connect(DB_URI, options);
    generateDummyData();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/house", houseController);
    app.listen(port, hostname, function () {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  } catch (err) {
    console.log(err);
  }
};

server();
