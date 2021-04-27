import { CSSProperties } from "react";
import { Route, Switch } from "react-router-dom";
import AdminUsersPage from "./AdminUsersPage";
import LatestPostPage from "./LatestPostsPage";
import UserPostsPage from "./UserPostsPage";

export default function UserRoutes() {
  return (
    <div style={main}>
      <Switch>
        <Route exact path={"/user"} component={UserPostsPage} />
        <Route path={"/user/latest-posts"} component={LatestPostPage} />
        <Route path={"/user/users"} component={AdminUsersPage} />
      </Switch>
    </div>
  );
}

const main: CSSProperties = {
  minHeight: "100%",
  width: "100%",
  backgroundColor: "#111111",
};
