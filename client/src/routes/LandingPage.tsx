import React, { CSSProperties, useState } from "react";
import LandingDesktopMenu from "../components/LandingDesktopMenu";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PostCard from "../components/postCard";
import LandingMobileMenu from "../components/LandingMobileMenu";

export default function LandingPage() {
  const [menu, setMenuIsOpen] = useState(false);

  return (
    <>
      {menu && <LandingMobileMenu />}
      <div style={mainContainer} className="mainContainer">
        <LandingDesktopMenu />
        <div className="contentContainer" style={contentContainer}>
          <MobileHeader menu={menu} setMenuIsOpen={setMenuIsOpen} />
          <Header title={"Senaste inläggen"} postButton={false} />
          <div className="content" style={content}>
            <PostCard />
            {/* Render of page content */}
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
  height: "100%",
  width: "100%",
  backgroundColor: "#111111",
};
