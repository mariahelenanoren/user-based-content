import { CSSProperties } from "react";

export default function DesktopMenu() {
  return <div className="desktopMenu" style={desktopMenu}></div>;
}

const desktopMenu: CSSProperties = {
  position: "fixed",
  width: "16rem",
  height: "100%",
  boxShadow: "5px 0px 11px 0px rgba(0,0,0,0.8)",
  backgroundColor: "#2D2D2D",
  zIndex: 1000,
};
