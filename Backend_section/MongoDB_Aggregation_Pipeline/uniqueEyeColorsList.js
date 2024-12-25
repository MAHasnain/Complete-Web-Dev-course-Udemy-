// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Learning_Aggregation_pipeline");

// List all unique eye colors present in the collection.

db.getCollection("users").aggregate([
  {
    $group: {
      _id: "$eyeColor",
    },
  },
]);

// db.getCollection("users").aggregate([
//   {
//     $group: {
//       _id: "$eyeColor",
//       totalUser: {
//         $sum: 1,
//       },
//     },
//   },
// ]);
