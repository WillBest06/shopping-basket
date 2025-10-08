import { Navigate } from "react-router";
import App from "./App";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Basket from "./components/Basket/Basket";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];

export default routes;
