import { CSSProperties } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { User } from "../interfaces";
import AdminUsersPage from "./AdminUsersPage";
import LatestPostPage from "./LatestPostsPage";
import UserPostsPage from "./UserPostsPage";

interface Props {
  user: User;
}

export default function UserRoutes(props: Props) {
  const { user } = props;

  return (
    <div style={main}>
      <Switch>
        <Route exact path={"/user"}>
          <UserPostsPage user={user} />
        </Route>
        <Route path={"/user/latest-posts"}>
          <LatestPostPage user={user} />
        </Route>
        {user.role === "admin" ? (
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
