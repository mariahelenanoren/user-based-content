import { CSSProperties } from "react";

export default function LandingDesktopMenu() {
  return (
    <div className="desktopMenu" style={desktopMenu}>
      <h1 style={siteTitle}>Postr</h1>
      <div style={buttonContainer}>
        <div style={innerButtonContainer}>
          <button className="filledButton" style={filledButton}>
            Logga in
          </button>
          <button className="outlinedButton" style={outlinedButton}>
            Registrera dig
          </button>
        </div>
        <button className="textButton" style={textButton}>
          Admin? Registrera dig här
        </button>
      </div>
    </div>
  );
}

const desktopMenu: CSSProperties = {
  position: "fixed",
  display: "flex",
  padding: "4rem 1.5rem 2.5rem 1.5rem",
  width: "16rem",
  height: "100%",
  flexDirection: "column",
  boxShadow: "5px 0px 11px 0px rgba(0,0,0,0.8)",
  backgroundColor: "#2D2D2D",
  zIndex: 1000,
};

const siteTitle: CSSProperties = {
  margin: 0,
  fontSize: "2rem",
  textAlign: "center",
  fontWeight: 600,
};

const buttonContainer: CSSProperties = {
  display: "flex",
  marginTop: "3.5rem",
  flex: 1,
  flexDirection: "column",
  justifyContent: "space-between",
};

const innerButtonContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
};

const filledButton: CSSProperties = {
  marginBottom: "0.8rem",
  padding: "0.5rem 1rem",
  backgroundColor: "#4780EE",
  border: "0.12rem solid #4780EE",
  borderRadius: "0.4rem",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#ffff",
};

const outlinedButton: CSSProperties = {
  padding: "0.5rem 1rem",
  borderColor: "#4780EE",
  backgroundColor: "none",
  background: "none",
  border: "0.12rem solid #4780EE",
  borderRadius: "0.4rem",
  fontSize: "0.9rem",
  fontWeight: 500,
  color: "#4780EE",
};

const textButton: CSSProperties = {
  backgroundColor: "none",
  background: "none",
  border: "none",
  color: "#4780EE",
};
