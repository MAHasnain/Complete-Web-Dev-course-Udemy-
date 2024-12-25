// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Learning_Aggregation_pipeline");

// which country has the highest number of registered users ?

db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $limit: 5,
  },
  {
    $sort: {
      userCount: -1,
    },
  },
]);
