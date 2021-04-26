import React, { CSSProperties } from "react";
import LandingDesktopMenu from "../components/LandingDesktopMenu";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import PostCard from "../components/PostCard";



export default function LandingPage() {

  return ( 
    <div style={mainContainer} className="mainContainer">
      <LandingDesktopMenu />
      <div className="contentContainer" style={contentContainer}>
        <div style={headerContainer}>
          <MobileHeader />
          <Header title={"Senaste inläggen"} postButton={false} />
        </div>
        <div className="content" style={content}>
          <PostCard/>
          {/* Render of page content */}
        </div>
      </div>
    </div>
  
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

const headerContainer: CSSProperties = {
  position: "fixed",
  width: "100%",
  height: "fit-content",
};

const content: CSSProperties = {
  padding: "2.5rem",
  paddingTop: "4rem",
  height: "100%",
  width: "100%",
  backgroundColor: "#111111",
};
