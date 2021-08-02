
const { User } = require("../models");

User.deleteMany({}, function (error, deletedUsers) {
  if (error) {
    return console.log(error);
  }
  User.insertMany(
    [
      {
        email: "1234abcd@gmail.com",
        password: "password",
        username: "User 1",
        avatar: "https://picsum.photos/200",
        fullName: "John Smith"
      },
      {
        email: "234abcd@gmail.com",
        password: "password",
        username: "User 2",
        avatar: "https://picsum.photos/200",
        fullName: "Sam Smith"
      },
      {
        email: "34abcd@gmail.com",
        password: "password",
        username: "User 3",
        avatar: "https://picsum.photos/200",
        fullName: "Will Smith"
      },
    ],
    function (error, createdUsers) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdUsers);
    }
  );
});