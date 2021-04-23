import { CSSProperties } from "react";

interface Props {}

export default function MobileHeader(props: Props) {
  return (
    <div className="mobileHeader" style={mobileHeader}>
      <h1>Postr</h1>
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
