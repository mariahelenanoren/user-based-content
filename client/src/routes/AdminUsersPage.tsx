import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import UserListBar from "../components/UserListBar";
import { makeRequest } from "../helper";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await makeRequest("/api/user", "GET");
      setUsers(users);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <Header title={"Användare"} postButton={false} />
      <div className="content" style={content}>
        {users.map((user, id) => (
          <UserListBar key={id} user={user} />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
