import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/postCard";
import { makeRequest } from "../helper";

export default function LatestPostPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await makeRequest("/api/posts", "GET");
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header title={"Senaste posts"} postButton={false} />
      <div className="content" style={content}>
        {posts.map((post, id) => (
          <PostCard isButtonsVisible={false} key={id} post={post} />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
