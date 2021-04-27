import { CSSProperties } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

export default function LandingMobileMenu() {
  return (
    <div style={menu}>
      <h1 style={siteTitle}>Postr</h1>
      <div style={buttonContainer}>
        <Link to={"/login"} style={{ width: "100%" }}>
          <button className="filledButton" style={filledButton}>
            Logga in
          </button>
        </Link>
        <Link to={"/registration"} style={{ width: "100%" }}>
          <button className="outlinedButton" style={outlinedButton}>
            Registrera dig
          </button>
        </Link>
      </div>
      <button className="textButton" style={textButton}>
        Admin? Registrera dig här
      </button>
    </div>
  );
}

const menu: CSSProperties = {
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2D2D2D",
  padding: "3rem 0",
  top: "5rem",
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
};

const siteTitle: CSSProperties = {
  marginBottom: "2rem",
  fontSize: "2rem",
  textAlign: "center",
  fontWeight: 600,
};

const buttonContainer: CSSProperties = {
  width: "100%",
  marginTop: "1rem",
  padding: "0 1.5rem",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const filledButton: CSSProperties = {
  width: "100%",
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
  width: "100%",
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
