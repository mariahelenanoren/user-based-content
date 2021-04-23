import { CSSProperties } from "react";
import MenuIcon from "@material-ui/icons/Menu";

interface Props {}

export default function MobileHeader(props: Props) {
  return (
    <div className="mobileHeader" style={mobileHeader}>
      <h1 style={siteTitle}>Postr</h1>
      <MenuIcon style={menuIcon} />
    </div>
  );
}

const mobileHeader: CSSProperties = {
  position: "relative",
  display: "none",
  height: "5rem",
  width: "100%",
  padding: "0 2rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "0px 5px 11px 0px rgba(0,0,0,0.8)",
  backgroundColor: "#2D2D2D",
  zIndex: 100,
};

const siteTitle: CSSProperties = {
  fontSize: "1.5rem",
};

const menuIcon: CSSProperties = {
  fontSize: "1.6rem",
};
