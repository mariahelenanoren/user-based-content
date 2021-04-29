import { CSSProperties } from "react";
import Delete from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Post } from "../interfaces";
import { makeRequest } from "../helper";

interface Props extends Post {
  setIsEditModalVisible?: (value: React.SetStateAction<boolean>) => void;
}

export default function PostCard(props: Props) {
  const { post } = props;

  const handleClick = async () => {
    const body = { _id: post._id };
    await makeRequest("/api/post", "DELETE", body);
  };

  return (
    <>
      <div className="postCard" style={cardStyle}>
        <div className="userContainer" style={userContainer}>
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
        {props.setIsEditModalVisible ? (
          <div className="iconContainer" style={iconContainer}>
            <Delete onClick={handleClick} className="icon" style={icon} />
            <EditIcon
              style={icon}
              onClick={() => {
                props.setIsEditModalVisible!(true);
              }}
            />
          </div>
        ) : null}
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
  width: "8rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const textContainer: CSSProperties = {
  padding: "0 1rem",
  margin: "0 1rem",
  flex: 1,
  borderLeft: "1px #4A4A4A solid",
};

const profilePicture: CSSProperties = {
  height: "3rem",
  borderRadius: "100%",
  marginBottom: "0.5rem",
};

const userNameStyle: CSSProperties = {
  margin: 0,
  fontSize: "0.9rem",
  wordBreak: "break-word",
  fontWeight: 600,
};

const text: CSSProperties = {
  fontSize: "1rem",
  textAlign: "left",
};

const iconContainer: CSSProperties = {
  borderLeft: "1px #4A4A4A solid",
  paddingLeft: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const icon: CSSProperties = {
  color: "#4780EE",
};
