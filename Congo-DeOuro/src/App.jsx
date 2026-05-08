import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutMaster from "./layouts/LayoutMaster";
import Menu from "./pages/Menu";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutMaster />,
    children: [
      { index: true, element: <Menu /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}