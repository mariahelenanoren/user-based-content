import { CSSProperties } from "react";

interface Props {
  title: string;
  postButton: boolean;
  setModalIsVisible?: (value: React.SetStateAction<boolean>) => void;
}


export default function Header(props: Props) {
  return (
    <div className="header" style={header}>
      <h2 style={title}>{props.title}</h2>
      {props.postButton ? (
        <button className="filledButton" style={postButton} onClick={() => props.setModalIsVisible!(true)}>
          Ny post
        </button>
      ) : null}
    </div>
  );
 }

const header: CSSProperties = {
  position: "fixed",
  display: "flex",
  width: "calc(100% - 16rem)",
  height: "4rem",
  padding: "0 2rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "#2D2D2D",
};

const postButton: CSSProperties = {
  backgroundColor: "#4780EE",
  color: "#ffff",
  padding: "0.7rem 3.5rem",
  border: "none",
  borderRadius: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  cursor: "pointer",
};

const title: CSSProperties = {
  fontSize: "1rem",
};
