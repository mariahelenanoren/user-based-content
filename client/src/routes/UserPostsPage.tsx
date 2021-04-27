import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/postCard";
import { makeRequest } from "../helper";

export default function UserPostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const login = {
        userName: "test5",
        firstName: "Maria",
        lastName: "Norén",
        email: "4",
        password: "maria123",
        role: "admin",
      };
      const res = await makeRequest("/api/login", "POST", login);
      console.log(res);
      const posts = await makeRequest("/api/posts/user", "GET");
      setPosts(posts);
      console.log(posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header title={"Dina posts"} postButton={true} />
      <div className="content" style={content}>
        {posts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
