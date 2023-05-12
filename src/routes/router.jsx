import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/users",
		element: <Users />,
		loader: () => fetch("http://localhost:5000/users"),
	},
]);

export default router;
