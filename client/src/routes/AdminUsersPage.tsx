import React, { CSSProperties, useEffect, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import Header from "../components/Header";
import UserListBar from "../components/UserListBar";
import { makeRequest } from "../helper";
import { User } from "../interfaces";

interface Props extends RouteComponentProps {
  user: User;
}

function AdminUsersPage(props: Props) {
  const [users, setUsers] = useState([]);
  const { user } = props;
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
    const body = { _id: id, _user: user._id };
    const res = await makeRequest("/api/user/:id", "DELETE", body);
    console.log(res);

    if (id === user._id) {
      props.history.push("/");
    } else {
      updateUsers();
    }
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

export default withRouter(AdminUsersPage);

const content: CSSProperties = {
  padding: "5.5rem 2.5rem 2.5rem 2.5rem",
  overflowY: "auto",
};
