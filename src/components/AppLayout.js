import Header from "./Header";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    let data = {
      name: "Pradeep Etika",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;
