import { CSSProperties, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { makeRequest } from "../helper";
import AdminUsersPage from "./AdminUsersPage";
import LatestPostPage from "./LatestPostsPage";
import UserPostsPage from "./UserPostsPage";

export default function UserRoutes() {
  const [authentication, setAuthentication] = useState("LOGGED_IN");

  useEffect(() => {
    const getUserAuthentication = async () => {
      const authentication = await makeRequest("/api/user-role", "GET");
      setAuthentication(authentication);
    };
    getUserAuthentication();
  }, []);

  return (
    <div style={main}>
      <Switch>
        <Route exact path={"/user"} component={UserPostsPage} />
        <Route path={"/user/latest-posts"} component={LatestPostPage} />
        {authentication === "admin" ? (
          <Route path={"/user/users"} component={AdminUsersPage} />
        ) : (
          <Redirect to={"/user"} />
        )}
      </Switch>
    </div>
  );
}

const main: CSSProperties = {
  minHeight: "100%",
  width: "100%",
  backgroundColor: "#111111",
};
