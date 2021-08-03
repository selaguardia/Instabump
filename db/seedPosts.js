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
        userId: "6109c4a7f6a65b2e8bd369ea",
      },
      {
        caption: "Photo 2",
        bumpCount: 0,
        image:
          "https://picsum.photos/200",
        isPinned: false,
        userId: "6109c4a7f6a65b2e8bd369eb",
      },
      {
        caption: "Photo 3",
        bumpCount: 0,
        image:
          "https://picsum.photos/200",
        isPinned: false,
        userId: "6109c4a7f6a65b2e8bd369ec",
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