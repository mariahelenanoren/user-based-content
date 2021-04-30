import React, { CSSProperties, useEffect, useState } from "react";
import Header from "../components/Header";
import UserListBar from "../components/UserListBar";
import { makeRequest } from "../helper";

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    updateUsers();
  }, []);

  const updateUsers = async () => {
    const users = await makeRequest("/api/users", "GET");
    setUsers(users);
  };

  const changeUserRole = async (role: string, id: string) => {
    const body = { role: role, _id: id };
    const res = await makeRequest("/api/user/:id", "PUT", body);
    console.log(res);
    updateUsers();
  };

  const deleteUser = async (id: string) => {
    const body = { _id: id };
    const res = await makeRequest("/api/user/:id", "DELETE", body);
    console.log(res);
    updateUsers();
  };

  return (
    <>
      <Header title={"Användare"} />
      <div className="content" style={content}>
        {users.map((user, id) => (
          <UserListBar
            key={id}
            user={user}
            deleteUser={deleteUser}
            changeUserRole={changeUserRole}
          />
        ))}
      </div>
    </>
  );
}

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
