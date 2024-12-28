// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("Learning_Aggregation_pipeline");

// what is the average number of tags per user?
db.getCollection("users").aggregate([
  //  {
  //     $addFields: {
  //       numOfTags: {
  //         $size: {$ifNull: ["$tags", []]}
  //       }
  //     }
  //  },{
  //     $group: {
  //       _id: null,
  //       avgNumOfTags: {
  //         $avg: "$numOfTags"
  //       }
  //     }
  //  }

  {
    $unwind: {
      path: "$tags",
    },
  },
  {
    $group: {
      _id: "$_id",
      numOfTags: {
        $sum: 1,
      },
    },
  },
  {
    $group: {
      _id: null,
      avgNumOfTags: {
        $avg: "$numOfTags",
      },
    },
  },
]);
