import React, { CSSProperties } from "react";
import Header from "../components/Header";
import UserListBar from "../components/UserListBar";

export default function AdminUsersPage() {
  return (
    <>
      <Header title={"Användare"} postButton={false} />
      <div className="content" style={content}>
        <UserListBar />
        <UserListBar />
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "2.5rem",
};
