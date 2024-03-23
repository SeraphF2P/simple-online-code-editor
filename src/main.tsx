import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "./lib/myToast";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
	{
		path: "/",
		Component: App,
	},
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ToastContainer />
		<RouterProvider router={routers} />
	</React.StrictMode>
);
