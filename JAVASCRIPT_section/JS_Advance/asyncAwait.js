function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "MAH", url: "https://mah.com" });
    }, 3000);
  });
}

async function getUserData() {
  try {
    console.log("Data fetching...");
    let userData = await fetchData();
    console.log("user data: ", userData);
    console.log("user data fetched successfully.");
  } catch (error) {
    console.log(error);
  }
}

getUserData();
