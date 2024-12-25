// MongoDB Playground


// The current database to use.
use("Learning_Aggregation_pipeline");

// how many users are active ?
db.getCollection("users").aggregate([
  {
    $match: {
      isActive: true,
    },
  },
  {
    $count: "activeUsers"
  }
]);
