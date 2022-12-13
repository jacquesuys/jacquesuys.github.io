import { ReactLocation, Route } from "@tanstack/react-location";
import Company from "../pages/Company";
import CompanyLast from "../pages/CompanyLast";
import Documents from "../pages/Documents";
import Info from "../pages/Info";
import Login from "../pages/Login";
import MyVault from "../pages/MyVault";
import Overview from "../pages/Overview";
import ProductsServices from "../pages/ProductsServices";
import Profile from "../pages/Profile";
import Requests from "../pages/Requests";
import ShareHistory from "../pages/ShareHistory";
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
  { path: "/my-vault", element: <MyVault /> },
  { path: "/my-info", element: <Info /> },
  { path: "/my-documents", element: <Documents /> },
  { path: "/share-history", element: <ShareHistory /> },
  { path: "/products-services", element: <ProductsServices /> },
];

export { routes, location };
