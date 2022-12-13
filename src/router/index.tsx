import { ReactLocation, Route } from "@tanstack/react-location";
import Company from "../pages/Company";
import CompanyLast from "../pages/CompanyLast";
import MyDocuments from "../pages/MyDocuments";
import Info from "../pages/Info";
import Login from "../pages/Login";
import MyVault from "../pages/MyVault";
import Overview from "../pages/Overview";
import ProductsServices from "../pages/ProductsServices";
import ProductsServicesSubPage from "../pages/ProductsServicesSubPage";
import Profile from "../pages/Profile";
import Requests from "../pages/Requests";
import ShareHistory from "../pages/ShareHistory";
import ThankYou from "../pages/ThankYou";
import ShareHistorySubPage from "../pages/ShareHistorySubPage";

const location = new ReactLocation();

const routes: Route<any>[] = [
  { path: "/", element: <Login /> },
  { path: "/overview", element: <Overview /> },
  { path: "/requests", element: <Requests /> },
  {
    path: "/company",
    children: [
      { path: "/", element: <Company /> },
      { path: "/last", element: <CompanyLast /> },
    ],
  },
  { path: "/thank-you", element: <ThankYou /> },
  { path: "/profile", element: <Profile /> },
  {
    path: "/my-vault",
    children: [
      { path: "/", element: <MyVault /> },
      { path: "/my-info", element: <Info /> },
      { path: "/my-documents", element: <MyDocuments /> },
    ],
  },
  {
    path: "/share-history",
    children: [
      { path: "/", element: <ShareHistory /> },
      { path: ":companyId", element: <ShareHistorySubPage /> },
    ],
  },
  {
    path: "/products-services",
    children: [
      { path: "/", element: <ProductsServices /> },
      { path: ":companyId", element: <ProductsServicesSubPage /> },
    ],
  },
];

export { routes, location };
