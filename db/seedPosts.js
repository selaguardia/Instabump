const { Post } = require("../models");

Post.deleteMany({}, function (error, deletedPosts) {
  if (error) {
    return console.log(error);
  }
  Post.insertMany(
    [
      {
        caption: "Photo 1",
        bumpCount: 0,
        image:
          "https://picsum.photos/200",
        isPinned: false,
        userId: "61086233d293a47694f9c1fe",
      },
      {
        caption: "Photo 2",
        bumpCount: 0,
        image:
          "https://picsum.photos/200",
        isPinned: false,
        userId: "61086233d293a47694f9c1ff",
      },
      {
        caption: "Photo 3",
        bumpCount: 0,
        image:
          "https://picsum.photos/200",
        isPinned: false,
        userId: "61086233d293a47694f9c200",
      },
    
    ],
    function (error, createdPosts) {
      if (error) {
        return console.log(error);
      }
      console.log("=== Seed Complete ===");
      console.log(createdPosts);

      process.exit();
    }
  );
});