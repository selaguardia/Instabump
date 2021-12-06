const mongoose = require("mongoose");

require("dotenv").config();
const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/picbump";
// const connectionString = "mongodb://localhost:27017/picbump";


mongoose.connect(connectionString);

mongoose.connection.on("Connected", () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("error", (error) => {
  console.log(`Mongoose connected error ${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});