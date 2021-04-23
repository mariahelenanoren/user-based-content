import React, { CSSProperties } from "react";
import DesktopMenu from "./DesktopMenu";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function landingPage() {
  return (
    <div style={mainContainer} className="mainContainer">
      <DesktopMenu />
      <div className="contentContainer" style={contentContainer}>
        <div style={headerContainer}>
          <MobileHeader />
          <Header title={"Senaste inläggen"} postButton={false} />
        </div>
        <div className="content" style={content}>
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
