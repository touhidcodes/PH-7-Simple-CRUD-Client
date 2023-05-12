import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Users from "../pages/Users";
import Update from "../pages/Update";

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
	{
		path: "/update/:id",
		element: <Update />,
		loader: ({ params }) => fetch(`http://localhost:5000/user/${params.id}`),
	},
]);

export default router;
