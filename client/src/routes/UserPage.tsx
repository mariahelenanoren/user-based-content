import MobileHeader from "../components/MobileHeader"
import Header from "../components/Header"
import { CSSProperties } from "react";
import UserDesktopMenu from "../components/UserDesktopMenu";

export default function UserPage() {
    const user = {
        userName: "User123321",
        role: "admin"
    }
    
    return(
    <div style={mainContainer} className="mainContainer">
        <UserDesktopMenu user={user} />
      <div className="contentContainer" style={contentContainer}>
        <div style={headerContainer}>
          <MobileHeader />
          <Header title={"Dina inlägg"} postButton={true} />
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