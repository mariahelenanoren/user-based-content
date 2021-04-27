import MobileHeader from "../components/MobileHeader";
import { CSSProperties } from "react";
import UserDesktopMenu from "../components/UserDesktopMenu";
import UserRoutes from "./UserRoutes";

export default function UserPage() {
  const user = {
    userName: "User123321",
    role: "admin",
  };

  return (
    <div style={mainContainer} className="mainContainer">
      <UserDesktopMenu user={user} />
      <div className="contentContainer" style={contentContainer}>
        <MobileHeader />
        <UserRoutes />
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
  width: "calc(100% - 16rem)",
  height: "100%",
};
