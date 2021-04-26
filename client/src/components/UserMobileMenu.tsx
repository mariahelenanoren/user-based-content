import { CSSProperties } from "@material-ui/styles";

interface Props {
  user: {
    userName: string;
    role: string;
  };
}

export default function UserMobileMenu(props: Props) {
  const { user } = props;

  return (
    <div style={menu}>
      <div style={userContainer}>
        <img
          style={profilePicture}
          alt={user.userName}
          src="../../assets/default-user.png"
        ></img>
        <h3>{user.userName}</h3>
      </div>
      <nav style={nav}>
        <ul style={navList}>
          <li className="navItem" style={navItem}>
            Dina posts
          </li>
          <li className="navItem" style={navItem}>
            Senaste posts
          </li>
          {user.role === "admin" ? (
            <li className="navItem" style={navItem}>
              Användare
            </li>
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
  padding: "1.5rem 0",
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

const profilePicture: CSSProperties = {
  width: "5rem",
  borderRadius: "100%",
  marginRight: "1.5rem",
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
