import DeleteIcon from "@material-ui/icons/Delete";
import { CSSProperties } from "@material-ui/styles";
import React from "react";

export default function UserListBar() {
  const user = {
    userName: "User123321",
    role: "admin",
  };
  return (
    <div style={bar}>
      <div style={flexRow}>
        <img
          style={profilePicture}
          alt={user.userName}
          src="../../assets/default-user.png"
        ></img>
        <p>{user.userName}</p>
      </div>
      <div style={flexRow}>
        <p>User</p>
        <DeleteIcon style={deleteIcon} />
      </div>
    </div>
  );
}

const bar: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem 1.5rem",
  backgroundColor: "#2D2D2D",
  marginBottom: "0.5rem",
};

const flexRow: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const profilePicture: CSSProperties = {
  width: "3rem",
  borderRadius: "100%",
  marginRight: "1.5rem",
};

const deleteIcon: CSSProperties = {
  color: "#4780EE",
  marginLeft: "1.5rem",
};
