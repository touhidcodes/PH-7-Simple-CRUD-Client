import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
	const user = useLoaderData();
	return <div>Update Info of {user.name}</div>;
};

export default Update;
