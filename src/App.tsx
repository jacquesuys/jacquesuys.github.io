import { Outlet, RouterProvider } from "@tanstack/react-router";
import router from "./router/router";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Layout>
          <Outlet />
        </Layout>
      </RouterProvider>
    </>
  );
}

export default App;
