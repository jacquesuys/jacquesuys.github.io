import { useState, useEffect } from "react";
import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "./router";
import Layout from "./layout/Layout";
import Context from "./context";
import { UserType } from "./types";

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((resp) => resp.json())
      .then((data) => {
        setUser(data);
      })
      .catch(console.error);
  }, []);

  const valueProvider = {
    user,
  };

  return (
    // @ts-ignore
    <Context.Provider value={valueProvider}>
      <Router routes={routes} location={location}>
        <Layout>
          <Outlet />
        </Layout>
      </Router>
    </Context.Provider>
  );
}

export default App;
