import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import CompanyForm from "../pages/CompanyForm";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Requests from "../pages/Requests";

const rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({
  path: "/",
  component: Login,
});

const overviewRoute = rootRoute.createRoute({
  path: "/overview",
  component: Overview,
});

const requestsRoute = rootRoute.createRoute({
  path: "/requests",
  component: Requests,
});

const companyFormRoute = rootRoute.createRoute({
  path: "/form",
  component: CompanyForm,
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  overviewRoute,
  requestsRoute,
  companyFormRoute,
]);

const router = createReactRouter({ routeConfig });

export default router;
