import { LoaderFunction, createBrowserRouter } from "react-router-dom";
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AuthenticationPage from "./pages/AuthPage";
import authAction from "./actions/AuthAction";
import logoutAction from "./actions/logoutAction";
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import { getUserLoader, getUsersLoader } from "./utils/user";
import UsersPage from "./pages/UsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    loader: tokenLoader,
    id: "root",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction,
      },
      {
        path: "logout",
        element: <p>You have been logged out</p>,
        action: logoutAction,
      },
      {
        path: "users",
        children: [
          {
            path: "",
            element: <UsersPage />,
            loader: getUsersLoader as LoaderFunction<Response>,
          },
          {
            path: "add",
            element: <h1>Add new user</h1>,
            loader: checkAuthLoader as LoaderFunction<Response>,
          },
          {
            path: ":userId",
            element: <h1>Individual user page</h1>,
            loader: getUserLoader as LoaderFunction<Response>,
          },
        ],
      },
    ],
  },
]);

export default router;
