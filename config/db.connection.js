const mongoose = require("mongoose");

require("dotenv").config();
const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017/instaBump";

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on("Connected", () => {
  console.log(`Mongoose connected to ${connectionString}`);
});

mongoose.connection.on("error", (error) => {
  console.log(`Mongoose connected error ${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});