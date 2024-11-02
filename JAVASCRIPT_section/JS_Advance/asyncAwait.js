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

// getUserData();

function post() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Post Data fetched.");
    }, 3000);
  });
}

function comment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Comment Data fetched.");
    }, 3000);
  });
}

async function blogData() {
  try {
    console.log("blog data fetching...");
    // let postData = await post();
    // let commentData = await comment();

    const [postData, commentData] = await Promise.all([post(), comment()])

    console.log(postData);
    console.log(commentData);
    console.log("fetch complete.");
  } catch (error) {
    console.error(error);
  }
}

blogData();
