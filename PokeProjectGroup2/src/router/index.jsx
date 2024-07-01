import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Evolution from "../pages/Evolution";
const router = createBrowserRouter([
   {
    element: <Layout />,
    children: [
      {
          path: "/",
          element: <Home />,
      },
      {
          path: "/evolution",
          element: <Evolution />,
      },
  ]
   }
]);
export default router;