import { ReactNode, lazy } from "react";

import { ROUTES } from "./routes.constants";

const AuthLayout = lazy(() => import("../../layout/auth.layout"));
const DefaultLayout = lazy(() => import("../../layout/default.layout"));

const SignIn = lazy(() => import("../../module/Auth/SignIn/SignIn.page"));
const SignUp = lazy(() => import("../../module/Auth/SignUp/SignUp"));

const Interest = lazy(() => import("../../module/Interest/Interest"));

const Skills = lazy(() => import("../../module/Skills/Skills"));

interface RoutesDTO {
  id?: number;
  isLayout?: boolean;
  path?: string;
  component: any;
  children?: RoutesDTO[];
}

// Returns route object as per the arguments
const getRoute = (
  id: number, // unique id of the route
  path: string, // path name of the route
  component: ReactNode, // Functional component of the route
  isLayout: boolean = false, // Layout flag to check if the route is for layout
  children: RoutesDTO[] = [] // Children routes of the layout.
) => {
  return {
    id,
    path,
    component,
    isLayout,
    children,
  };
};

// *  Routes for Authentication Pages
const AuthRoutes = [
  getRoute(21, ROUTES.LOGIN, <SignIn />), // Login Page
  getRoute(22, ROUTES.SIGN_UP, <SignUp />), // Signup Page
];

// * Routes for default pages
const DefaultRoutes = [
  getRoute(16, ROUTES.INTEREST, <Interest />),
  getRoute(17, ROUTES.SKILLS, <Skills />),
];

// Layouts: Default Routes with default layout config.
export const defaultRoutes: RoutesDTO[] = [
  getRoute(1, "", <DefaultLayout />, true, DefaultRoutes),
  getRoute(2, "", <AuthLayout />, true, AuthRoutes),
];
