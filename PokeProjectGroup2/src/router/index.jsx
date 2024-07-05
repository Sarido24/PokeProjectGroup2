import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Evolution from "../pages/Evolution";
import Detail from "../pages/Detail/DetailPage"
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
      {
        path: "/detail/:id",
        element: <Detail />
      },
  ]
   }
]);
export default router;