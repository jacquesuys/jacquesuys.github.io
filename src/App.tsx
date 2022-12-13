import { Router, Outlet } from "@tanstack/react-location";
import { routes, location } from "./router";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router routes={routes} location={location}>
      <Layout>
        <Outlet />
      </Layout>
    </Router>
  );
}

export default App;
