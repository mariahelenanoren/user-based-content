import { CSSProperties } from "react";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Post } from "../interfaces";

interface Props extends Post {
  isEditModalVisible?: (value: React.SetStateAction<boolean>) => void;
}

export default function PostCard(props: Props) {
  const { post } = props;

  return (
    <>
      <div className="postCard" style={cardStyle}>
        <div className="flexRow" style={userContainer}>
          <img
            className="postCardImage"
            style={profilePicture}
            src={"../../assets/default-user.png"}
            alt={post.userName}
          ></img>
          <p style={userNameStyle}>{post.userName}</p>
        </div>
        <div className="textContainer" style={textContainer}>
          <p style={text}>{post.text}</p>
        </div>
        <div className="flexRow iconContainer" style={iconContainer}>
          <Delete className="icon" style={icon} />
          <EditIcon
            style={icon}
            onClick={() => {
              props.isEditModalVisible!(true);
            }}
          />
        </div>
      </div>
    </>
  );
}

const cardStyle: CSSProperties = {
  width: "100%",
  padding: "1rem 1.5rem",
  marginBottom: "0.5rem",
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "#2D2D2D",
  color: "white",
};

const userContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const textContainer: CSSProperties = {
  padding: "0 1rem",
  margin: "0 1rem",
  flex: 1,
  borderLeft: "1px #4A4A4A solid",
  borderRight: "1px #4A4A4A solid",
};

const profilePicture: CSSProperties = {
  height: "3rem",
  borderRadius: "100%",
  marginBottom: "0.5rem",
};

const userNameStyle: CSSProperties = {
  margin: 0,
  fontSize: "1rem",
  fontWeight: 600,
};

const text: CSSProperties = {
  fontSize: "1rem",
  textAlign: "left",
};

const iconContainer: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const icon: CSSProperties = {
  color: "#4780EE",
};
