import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Technology from "./pages/Technology.jsx";
import Crew from "./pages/Crew.jsx";
import Destination from "./pages/Destination.jsx";
import Home from "./pages/Home.jsx";
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/destination", element: <Destination /> },
			{ path: "/crew", element: <Crew /> },
			{ path: "/technology", element: <Technology /> },
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
