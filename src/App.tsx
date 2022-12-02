import { Link, Outlet, RouterProvider } from "@tanstack/react-router";
import router from "./router";

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <div>
          <Link to="/">Overview</Link>
          <Link to="/login">Login</Link>
          <Link to="/requests">Requests</Link>
          <Link to="/form">Form</Link>
        </div>
        <hr />
        <Outlet />
      </RouterProvider>
    </>
  );
}

export default App;
