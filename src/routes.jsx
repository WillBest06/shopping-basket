import { Navigate } from "react-router";
import App from "./App";
import Home from "./components/Home";

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
    ],
  },
];

export default routes;
