import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLoaderData,
} from "react-router-dom";
import logo from "./logo.svg";
import Home from "./views/home/Home";
import Posts from "./views/posts/Posts";
import Products from "./views/products/Products";
import RootLayout from "./routes/RootLayout";
// import LogInPopUp from "./Components/LogInPopUp/LogInPopUp";
// import LoginLink from './Components/LoginLink/LoginLink'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
