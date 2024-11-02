// function fetchData() {
//   return new Promise((resolve, reject) => {
//     let success = true;
//     setTimeout(() => {
//       if (success) {
//         resolve("Data Fetched Successfully.");
//       } else {
//         reject("error data fetching.");
//       }
//     }, 3000);
//   });
// }

// fetchData()
//     .then((data)=>{
//         console.log(data)
//         return data.toLowerCase()
//     }).then((value)=>console.log(value))
//     .catch((error)=>console.error(error));

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data Fetched Successfully.");
      } else {
        reject("error data fetching.");
      }
    }, 3000);
  });
}

fetchData()
  .then((data) => {
    console.log(data)
    return data.toLowerCase()
  }).then((value)=> {
    console.log(value)
    
  })
  .catch((error) => console.log(error));
