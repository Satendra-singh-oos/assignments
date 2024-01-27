import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Verifyotp from "./components/Verifyotp.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import Layout from "./Layout.jsx";
import Hello from "./components/Hello.jsx";
import Error from "./components/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/verify-otp",
        element: <Verifyotp />,
      },
      {
        path: "/hello",
        element: <Hello />,
      },
      {
        path: "/error",
        element: <Error />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
