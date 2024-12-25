// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Learning_Aggregation_pipeline");

// What is the average age of all users?

db.getCollection("users").aggregate([
  {
    $group: {
      //   _id: "$gender",
      _id: "null",
      averageAge: {
        $avg: "$age",
      },
    },
  },
]);
