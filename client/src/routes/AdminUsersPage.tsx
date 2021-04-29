import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import UserListBar from "../components/UserListBar";
import { makeRequest } from "../helper";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await makeRequest("/api/users", "GET");
      setUsers(users);
    };
    fetchUsers();
  }, []);

  const changeUserRole = async (role: string, _id: string) => {
    const body = { role: role, _id: _id };
    const res = await makeRequest("/api/user/:id", "PUT", body);
    const users = await makeRequest("/api/users", "GET");
    setUsers(users);
    console.log(res);
  };

  return (
    <>
      <Header title={"Användare"} />
      <div className="content" style={content}>
        {users.map((user, id) => (
          <UserListBar key={id} user={user} changeUserRole={changeUserRole} />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
