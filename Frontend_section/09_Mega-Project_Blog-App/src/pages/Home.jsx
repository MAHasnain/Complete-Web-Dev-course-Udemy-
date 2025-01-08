import React, { useEffect, useState } from "react";
import { Container, PostCard } from "../components";
import service from "../Appwrite/config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts(posts).then(() => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <>
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h2 className="text-2xl font-bold hover:text-gray-500">
                  Login to read Posts
                </h2>
              </div>
            </div>
          </Container>
        </div>
      </>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap" >
          {posts.map((post) => (
            <div key={post.$id} className="w-1/4 p-2">
              {/* <PostCard post={post} /> */}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
