import React, { CSSProperties, useEffect, useState } from "react";
import LandingDesktopMenu from "../components/LandingDesktopMenu";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PostCard from "../components/postCard";
import LandingMobileMenu from "../components/LandingMobileMenu";
import { makeRequest } from "../helper";

export default function LandingPage() {
  const [menu, setMenuIsOpen] = useState(false);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      /* const login = {
        userName: "test5",
        firstName: "Maria",
        lastName: "Norén",
        email: "4",
        password: "maria123",
        role: "admin",
      };
      const res = await makeRequest("/api/login", "POST", login);
      console.log(res); */
      const posts = await makeRequest("/api/posts", "GET");
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {menu && <LandingMobileMenu />}
      <div style={mainContainer} className="mainContainer">
        <LandingDesktopMenu />
        <div className="contentContainer" style={contentContainer}>
          <MobileHeader menu={menu} setMenuIsOpen={setMenuIsOpen} />
          <Header title={"Senaste inläggen"} postButton={false} />
          <div className="content" style={content}>
            {posts.map((post, id) => (
              <PostCard key={id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const mainContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#2D2D2D",
  height: "100%",
  width: "100%",
};

const contentContainer: CSSProperties = {
  marginLeft: "16rem",
  width: "100%",
  height: "100%",
};

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  minHeight: "100%",
  width: "100%",
  backgroundColor: "#111111",
};
