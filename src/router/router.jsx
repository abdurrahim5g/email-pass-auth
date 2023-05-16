import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ResetPassword from "../components/ResetPassword/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);

export default router;
