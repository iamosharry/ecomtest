import { createBrowserRouter } from "react-router-dom";

import Dishes from "../components/Dishes";

import Layout from "./Layout";

import CartDrop from "../components/CartDrop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <Dishes /> }],
  },

  { path: "cart", element: <CartDrop /> },
]);

export default router;
