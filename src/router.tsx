import { LoaderFunction, createBrowserRouter } from "react-router-dom";

/* Pages */
import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import UsersPage from "./pages/UsersPage";
import RegisterPage from "./pages/RegisterPage";
import AddUserPage from "./pages/AddUserPage";
import UserPage from "./pages/UserPage";

/* Actions */
import loginAction from "./actions/loginAction";
import registerAction from "./actions/registerAction";
import addUserAction from "./actions/addUserAction";
import logoutAction from "./actions/logoutAction";

/* Loaders */
import { checkAuthLoader, tokenLoader } from "./utils/auth";
import { getUsersLoader } from "./utils/user";

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
        path: "login",
        element: <LoginPage />,
        action: loginAction,
      },
      {
        path: "register",
        element: <RegisterPage />,
        action: registerAction,
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
            id: "users",
          },
          {
            path: "add",
            element: <AddUserPage />,
            loader: checkAuthLoader as LoaderFunction<Response>,
            action: addUserAction,
          },
          {
            path: ":userId",
            element: <UserPage />,
            loader: getUsersLoader as LoaderFunction<Response>,
          },
        ],
      },
    ],
  },
]);

export default router;
