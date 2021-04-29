import MobileHeader from "../components/MobileHeader";
import { CSSProperties, useState } from "react";
import UserDesktopMenu from "../components/UserDesktopMenu";
import UserMobileMenu from "../components/UserMobileMenu";
import UserRoutes from "./UserRoutes";
import { makeRequest } from "../helper";

export default function UserPage() {
  const [menu, setMenuIsOpen] = useState(false);
  const [user, setUser] = useState({
    userName: "",
    role: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const users = await makeRequest("/api/user", "GET");
      setUser(users[0]);
    };
    fetchUser();
  }, []);

  return (
    <>
      {menu && <UserMobileMenu user={user} setMenuIsOpen={setMenuIsOpen} />}
      <div style={mainContainer} className="mainContainer">
        <UserDesktopMenu user={user} />
        <div className="contentContainer" style={contentContainer}>
          <MobileHeader menu={menu} setMenuIsOpen={setMenuIsOpen} />
          <UserRoutes />
        </div>
      </div>
    </>
  );
}

const mainContainer: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#2D2D2D",
  height: "100%",
  width: "100%",
};

const contentContainer: CSSProperties = {
  marginLeft: "16rem",
  width: "calc(100% - 16rem)",
  height: "100%",
};
