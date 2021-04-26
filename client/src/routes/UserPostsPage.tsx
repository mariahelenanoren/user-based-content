import React, { CSSProperties } from "react";
import Header from "../components/Header";

export default function UserPostsPage() {
  return (
    <>
      <Header title={"Dina posts"} postButton={true} />
      <div className="content" style={content}>
        <p>User</p>
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "2.5rem",
  overflowY: "auto",
};
