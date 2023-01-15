import { createBrowserRouter } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import Orders from "../Orders/Orders";
import "../PrivateRoute/PrivateRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// all the child elemnts will be inserted into the Outlet
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
      {
        path: "orders",
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://genious-auto-server2.vercel.app/services/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
