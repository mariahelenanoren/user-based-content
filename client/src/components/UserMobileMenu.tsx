import { CSSProperties } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  user: {
    userName: string;
    role: string;
  };
  setMenuIsOpen: (value: React.SetStateAction<boolean>) => void;
}

export default function UserMobileMenu(props: Props) {
  const { user } = props;

  const handleClick = () => {
    props.setMenuIsOpen(false);
  };

  return (
    <div style={menu}>
      <div style={userContainer}>
        <div style={profilePictureContainer}>
          {user.role === "admin" ? <div style={adminBadge}>admin</div> : null}
          <img
            style={profilePicture}
            alt={user.userName}
            src="../../assets/default-user.png"
          ></img>
        </div>
        <h3>{user.userName}</h3>
      </div>
      <nav style={nav}>
        <ul style={navList}>
          <Link to="/user" onClick={handleClick}>
            <li className="navItem" style={navItem}>
              Dina posts
            </li>
          </Link>
          <Link to="/user/latest-posts" onClick={handleClick}>
            <li className="navItem" style={navItem}>
              Senaste posts
            </li>
          </Link>
          {user.role === "admin" ? (
            <Link to="/user/users" onClick={handleClick}>
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

const userContainer: CSSProperties = {
  marginBottom: "1.5rem",
  padding: "0 1.5rem",
  display: "flex",
  alignItems: "center",
};

const profilePictureContainer: CSSProperties = {
  position: "relative",
};

const profilePicture: CSSProperties = {
  width: "5rem",
  borderRadius: "100%",
  marginRight: "1.5rem",
};

const adminBadge: CSSProperties = {
  position: "absolute",
  borderRadius: "0.8rem",
  top: 0,
  left: "3.5rem",
  backgroundColor: "#4780EE",
  fontSize: "0.8rem",
  padding: "0.3rem 0.7rem",
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
