import React, { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { User } from "../interfaces";

interface Props {
  user: User;
}

export default function UserDesktopMenu(props: Props) {
  const user = props.user;

  console.log(user);

  return (
    <div className="desktopMenu" style={desktopMenu}>
      <div style={profilePictureContainer}>
        {user.role === "admin" ? <div style={adminBadge}>admin</div> : null}
        <img
          alt={user.userName}
          style={profilePicture}
          src="../../assets/default-user.png"
        ></img>
      </div>
      <h3 style={userName}>{user.userName}</h3>
      <nav style={nav}>
        <ul style={navList}>
          <Link to={"/user"}>
            <li className="navItem" style={navItem}>
              Dina posts
            </li>
          </Link>
          <Link to={"/user/latest-posts"}>
            <li className="navItem" style={navItem}>
              Senaste posts
            </li>
          </Link>
          {user.role === "admin" ? (
            <Link to={"/user/users"}>
              <li className="navItem" style={navItem}>
                Användare
              </li>
            </Link>
          ) : null}
        </ul>
      </nav>
      <div style={buttonContainer}>
        <button className="outlinedButton" style={outlinedButton}>
          Logga ut
        </button>
      </div>
    </div>
  );
}

const desktopMenu: CSSProperties = {
  position: "fixed",
  display: "flex",
  padding: "4rem 0 2.5rem 0",
  width: "16rem",
  height: "100%",
  flexDirection: "column",
  alignItems: "center",
  boxShadow: "5px 0px 11px 0px rgba(0,0,0,0.8)",
  backgroundColor: "#2D2D2D",
  zIndex: 1000,
};

const profilePictureContainer: CSSProperties = {
  position: "relative",
};

const adminBadge: CSSProperties = {
  position: "absolute",
  borderRadius: "0.8rem",
  top: "0.5rem",
  left: "-1rem",
  backgroundColor: "#4780EE",
  fontSize: "0.8rem",
  padding: "0.3rem 0.7rem",
};

const profilePicture: CSSProperties = {
  borderRadius: "100%",
  width: "8rem",
};

const userName: CSSProperties = {
  marginBottom: "2rem",
};

const nav: CSSProperties = {
  width: "100%",
};

const navList: CSSProperties = {
  width: "100%",
  listStyle: "none",
  padding: 0,
  margin: 0,
  borderBottom: "1px #5A5A5A solid",
};

const navItem: CSSProperties = {
  padding: "1rem 1.5rem",
  textAlign: "left",
  borderTop: "1px #5A5A5A solid",
};

const buttonContainer: CSSProperties = {
  marginTop: "1rem",
  padding: "0 1.5rem",
  width: "100%",
  flex: 1,
  display: "flex",
  alignItems: "flex-end",
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
