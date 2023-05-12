import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
	const loadedUsers = useLoaderData();
	const [users, setUsers] = useState(loadedUsers);
	console.log(users);

	const handleDelete = (id) => {
		fetch(`http://localhost:5000/user/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					alert("deleted successfully");
					const remaining = users.filter((user) => user._id !== id);
					setUsers(remaining);
				}
			});
	};
	return (
		<div>
			<h1>Users of MongoDB</h1>
			<h5>{users.length}</h5>
			<div>
				{users.map((user) => (
					<p key={user._id}>
						{user.name} : {user.email}{" "}
						<button onClick={() => handleDelete(user._id)}>X</button>
					</p>
				))}
			</div>
		</div>
	);
};

export default Users;
