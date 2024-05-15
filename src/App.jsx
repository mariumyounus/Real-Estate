import { useState } from "react";
import "./layout.scss";
import Layout from "./routes/layout/Layout";
import Homepage from "./routes/homepage/Homepage";
import Listpage from "./routes/listpage/Listpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Singlepage from "./routes/singlepage/Singlepage";
import Profile from "./routes/profile/Profile";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/list", element: <Listpage /> },
        { path: "/:id", element: <Singlepage /> },
        { path: "/Profile", element: <Profile /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
