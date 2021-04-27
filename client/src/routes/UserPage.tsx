import MobileHeader from "../components/MobileHeader";
import Header from "../components/Header";
import { CSSProperties, useState } from "react";
import UserDesktopMenu from "../components/UserDesktopMenu";
import UserMobileMenu from "../components/UserMobileMenu";

export default function UserPage() {
  const [menu, setMenuIsOpen] = useState(false);
  const user = {
    userName: "User123321",
    role: "admin",
  };

  return (
    <>
      {menu && <UserMobileMenu user={user} />}
      <div style={mainContainer} className="mainContainer">
        <UserDesktopMenu user={user} />
        <div className="contentContainer" style={contentContainer}>
          <MobileHeader menu={menu} setMenuIsOpen={setMenuIsOpen} />
          <Header title={"Dina inlägg"} postButton={true} />
          <div className="content" style={content}>
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
  width: "calc(100% - 16rem)",
  height: "100%",
};

const content: CSSProperties = {
  padding: "2.5rem",
  paddingTop: "4rem",
  height: "100%",
  width: "100%",
  backgroundColor: "#111111",
};
