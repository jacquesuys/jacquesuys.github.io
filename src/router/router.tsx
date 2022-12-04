import { ReactLocation, Route } from "@tanstack/react-location";
import Company from "../pages/Company";
import CompanyLast from "../pages/CompanyLast";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Profile from "../pages/Profile";
import Requests from "../pages/Requests";
import ThankYou from "../pages/ThankYou";

const location = new ReactLocation();

const routes: Route<any>[] = [
  { path: "/", element: <Login /> },
  { path: "/overview", element: <Overview /> },
  { path: "/requests", element: <Requests /> },
  { path: "/company", element: <Company /> },
  { path: "/company-last", element: <CompanyLast /> },
  { path: "/thank-you", element: <ThankYou /> },
  { path: "/profile", element: <Profile /> },
];

export { routes, location };
