// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`http://api.github.com/users/MAHasnain`)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  return (
    <>
      <img src={data.avatar_url} alt="github profile" />
      <div>GitHub followers: {data.followers}</div>
      <div>GitHub following: {data.following}</div>
      <p>Full Name: {data.name}</p>
      <p>username: {data.login}</p>
      <p>Bio: {data.bio}</p>
      <p>Github Repositories: {data.public_repos}</p>
    </>
  );
};

export default Github;

export const githubLoaderInfo = async () => {
  const res = await fetch(`http://api.github.com/users/MAHasnain`);

  console.log(res);

  return res.json();
};
