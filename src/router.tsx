import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "users",
        children: [
          {
            path: "",
            element: <h1>List of users</h1>,
          },
          {
            path: "add",
            element: <h1>Add new user</h1>,
          },
          {
            path: ":userId",
            element: <h1>Individual user page</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
