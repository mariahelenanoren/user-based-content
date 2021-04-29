import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/postCard";
import { makeRequest } from "../helper";
import NewPostModal from "../components/NewPostModal";
import EditPostModal from "../components/EditPostModal";

export default function UserPostsPage() {
  const [isModalVisible, setNewModalIsVisible] = useState(false);
  const [isEditModalVisible, setEditModalIsVisible] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const fetchPosts = async () => {
      const posts = await makeRequest("/api/posts/user", "GET");
      if (isMounted) {
        setPosts(posts);
      }
    };
    fetchPosts();
    return () => {
      isMounted = false;
    };
  }, [setNewModalIsVisible]);

  return (
    <>
      <Header
        title={"Dina posts"}
        setNewModalIsVisible={setNewModalIsVisible}
        postButton={true}
      />
      <div className="content" style={content}>
        {isModalVisible && (
          <NewPostModal setNewModalIsVisible={setNewModalIsVisible} />
        )}
        {isEditModalVisible && (
          <EditPostModal setEditModalIsVisible={setEditModalIsVisible} />
        )}

        {posts.map((post, id) => (
          <PostCard
            setIsEditModalVisible={setEditModalIsVisible}
            key={id}
            post={post}
          />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
