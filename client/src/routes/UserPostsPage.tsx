import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import PostCard from "../components/postCard";
import { makeRequest } from "../helper";
import NewPostModal from "../components/NewPostModal";
import EditPostModal from "../components/EditPostModal";
import { Post } from "../interfaces";

export default function UserPostsPage() {
  const [isNewModalVisible, setNewModalIsVisible] = useState(false);
  const [isEditModalVisible, setEditModalIsVisible] = useState(false);
  const [editPost, setEditPost] = useState<Post>({
    userName: "",
    text: "",
    _id: "",
    _user: "",
  });
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
  }, [isEditModalVisible, isNewModalVisible]);

  return (
    <>
      <Header
        title={"Dina posts"}
        setNewModalIsVisible={setNewModalIsVisible}
        postButton={true}
      />
      <div className="content" style={content}>
        {isNewModalVisible && (
          <NewPostModal setNewModalIsVisible={setNewModalIsVisible} />
        )}
        {isEditModalVisible && (
          <EditPostModal
            post={editPost}
            setEditModalIsVisible={setEditModalIsVisible}
          />
        )}
        {posts.map((post: Post, id) => (
          <PostCard
            setIsEditModalVisible={setEditModalIsVisible}
            setEditPost={setEditPost}
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
