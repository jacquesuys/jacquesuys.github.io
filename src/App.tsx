import { routes, location } from "./router/router";
import Layout from "./layout/Layout";

import { Router, Outlet } from "@tanstack/react-location";

function App() {
  return (
    <>
      <Router routes={routes} location={location}>
        <Layout>
          <Outlet />
        </Layout>
      </Router>
    </>
  );
}

export default App;
