import Modal from "../components/Modal";
import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/postCard";
import { makeRequest } from "../helper";


export default function UserPostsPage() {
  const [isModalVisible, setModalIsVisible] = useState(false);
  // const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await makeRequest("/api/posts/user", "GET");
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header title={"Dina posts"} setModalIsVisible={setModalIsVisible} postButton={true} />
      <div className="content" style={content}>
      {isModalVisible && <Modal setModalIsVisible={setModalIsVisible}  />}
        {posts.map((post, id) => (
          <PostCard key={id} post={post} />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
