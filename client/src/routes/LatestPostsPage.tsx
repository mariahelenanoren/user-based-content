import React, { CSSProperties } from "react";
import Header from "../components/Header";

export default function LatestPostPage() {
  return (
    <>
      <Header title={"Senaste posts"} postButton={true} />
      <div className="content" style={content}>
        <p>Senaste posts</p>
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
