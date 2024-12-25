// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Learning_Aggregation_pipeline");

// List of top 5 common favorite fruits among users?
db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$favoriteFruit",
      count: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      count: 1,
    },
  },
  {
    $limit: 5,
  },
]);
