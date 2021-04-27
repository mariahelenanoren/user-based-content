import { CSSProperties } from "react";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Post } from "../../interfaces";

export default function PostCard(props: Post) {
  const { post } = props;
  return (
    <>
      <div style={cardStyle}>
        <p style={userNameStyle}></p>
        <p style={text}>{post.text}</p>
        <div style={Icons}>
          <Delete style={DeleteIcon} />
          <EditIcon />
        </div>
      </div>
    </>
  );
}

const cardStyle: CSSProperties = {
  height: "8rem",
  width: "100%",
  marginTop: "1rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#2D2D2D",
  color: "white",
};

const userNameStyle: CSSProperties = {
  marginTop: "1rem",
  color: "white",
  fontSize: "1rem",
};

const text: CSSProperties = {
  color: "white",
  fontSize: "1rem",
  width: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const Icons: CSSProperties = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "flex-end",
  margin: "1rem",
};

const DeleteIcon: CSSProperties = {};
