import { Navigate } from "react-router";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={"home"} replace />,
      },
    ],
  },
];

export default routes;
