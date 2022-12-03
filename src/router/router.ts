import { createReactRouter, createRouteConfig } from "@tanstack/react-router";
import Company from "../pages/Company";
import CompanyLast from "../pages/CompanyLast";
import Login from "../pages/Login";
import Overview from "../pages/Overview";
import Profile from "../pages/Profile";
import Requests from "../pages/Requests";
import ThankYou from "../pages/ThankYou";

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

const companyStep1Route = rootRoute.createRoute({
  path: "/company",
  component: Company,
});

const companyStep2Route = rootRoute.createRoute({
  path: "/company-last",
  component: CompanyLast,
});

const thankYouRoute = rootRoute.createRoute({
  path: "/thank-you",
  component: ThankYou,
});

const profileRoute = rootRoute.createRoute({
  path: "/profile",
  component: Profile,
});

const routeConfig = rootRoute.addChildren([
  indexRoute,
  overviewRoute,
  requestsRoute,
  companyStep1Route,
  companyStep2Route,
  thankYouRoute,
  profileRoute,
]);

const router = createReactRouter({ routeConfig });

export default router;
