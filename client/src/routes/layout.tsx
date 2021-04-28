import React, { CSSProperties, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage";
import RegistrationPage from "./registrationPage";
import LoginPage from "./loginPage";
import UserPage from "./UserPage";
import { makeRequest } from "../helper";

interface Props {}

const Layout: React.FC<Props> = () => {
  const [authentication, setAuthentication] = useState("LOGGED_IN");

  useEffect(() => {
    const getUserAuthentication = async () => {
      const authentication = await makeRequest("/api/user-status", "GET");
      setAuthentication(authentication);
    };
    getUserAuthentication();
  }, []);

  return (
    <div style={mainStyle}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/registration" component={RegistrationPage} />
        <Route path="/login" component={LoginPage} />
        {authentication === "LOGGED_IN" ? (
          <Route path="/user" component={UserPage} />
        ) : (
          <Redirect to={"/"} />
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
