import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "./router";
import Layout from "./layout/Layout";
import Context from "./context";
import { useMemo, useState } from "react";

function App() {
  const [productService, setProductService] = useState({});

  const value = useMemo(
    () => ({ productService, setProductService }),
    [productService]
  );

  return (
    // @ts-ignore
    <Context.Provider value={value}>
      <Router routes={routes} location={location}>
        <Layout>
          <Outlet />
        </Layout>
      </Router>
    </Context.Provider>
  );
}

export default App;
