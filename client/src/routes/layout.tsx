import React, { CSSProperties, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import RegistrationPage from "./registrationPage";
import LoginPage from "./loginPage";
import UserPage from "./UserPage";
import { makeRequest } from "../helper";
import { User } from "../interfaces";

interface Props {}

const Layout: React.FC<Props> = () => {
  const [user, setUser] = useState<User | null>();

  useEffect(() => {
    const getUserAuthentication = async () => {
      const user = await makeRequest("/api/user", "GET");
      if (user) {
        setUser(user[0]);
      } else {
        setUser(user);
      }
    };
    getUserAuthentication();
  }, []);

  return (
    <div style={mainStyle}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        {user === null ? (
          <Redirect to={"/"} />
        ) : user === undefined ? null : (
          <Route path="/user">
            <UserPage user={user} />
          </Route>
        )}
      </Switch>
    </div>
  );
};

export default Layout;

const mainStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "#1f1f1f",
};
