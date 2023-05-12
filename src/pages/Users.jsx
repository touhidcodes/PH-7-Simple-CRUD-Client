import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
	const users = useLoaderData();
	console.log(users);
	return (
		<div>
			<h1>Users of MongoDB</h1>
			<h5>{users.length}</h5>
			<div>
				{users.map((user) => (
					<p key={user._id}>
						{user.name} : {user.email}
					</p>
				))}
			</div>
		</div>
	);
};

export default Users;
