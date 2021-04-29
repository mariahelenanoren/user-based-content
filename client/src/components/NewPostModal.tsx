import { CSSProperties } from "@material-ui/styles";
import { useState } from "react";
import { makeRequest } from "../helper";

interface Props {
  setNewModalIsVisible: (value: React.SetStateAction<boolean>) => void;
}

export default function NewPostModal(props: Props) {
  const [text, setText] = useState("");

  function handleChange(value: string) {
    setText(value);
  }

  async function handleClick() {
    const body = { text: text };
    const res = await makeRequest("/api/post", "POST", body);
    props.setNewModalIsVisible(false);
  }

  return (
    <div className="modalContainer" style={modalContainer}>
      <div style={buttonContainer}>
        <button
          onClick={() => props.setNewModalIsVisible(false)}
          style={closeButton}
        >
          Avbryt
        </button>
        ¨
        <button style={modalButtons} onClick={handleClick}>
          Posta
        </button>
      </div>
      <textarea
        placeholder={"Vad händer?"}
        style={textArea}
        rows={5}
        onChange={(event) => handleChange(event.target.value)}
      ></textarea>
    </div>
  );
}

const modalContainer: CSSProperties = {
  position: "absolute",
  height: "12rem",
  width: "calc(100% - 21rem)",
  background: "white",

  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const buttonContainer: CSSProperties = {
  display: "flex",
  width: "90%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
  margin: "0.5rem",
  borderBottom: "0.1rem solid lightgrey",
};

const modalButtons: CSSProperties = {
  backgroundColor: "#4780EE",
  color: "#ffff",
  border: "none",
  borderRadius: "0.5rem",
  fontSize: "0.9rem",
  fontWeight: 600,
  margin: "0.3rem",
  width: "7rem",
  height: "2rem",

  alignItems: "center",
  justifyContent: "center",
};
const textArea: CSSProperties = {
  width: "90%",
  height: "7.5rem",
  border: "none",
  fontSize: "0.9rem",
};

const closeButton: CSSProperties = {
  border: "none",
  color: "#4780EE",
  background: "white",
  textDecoration: "underline",
};
