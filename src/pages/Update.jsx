import React from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
	const loadedUser = useLoaderData();
	// console.log(user._id);

	const handleUpdate = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const email = form.email.value;
		const user = { name, email };
		console.log(user);

		fetch(`http://localhost:5000/user/${loadedUser._id}`, {
			method: "PUT",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					alert("Data Updated Successfully");
				}
			});
	};
	return (
		<div>
			<h3>Update Info of {loadedUser.name}</h3>
			<form onSubmit={handleUpdate}>
				<input
					type='text'
					name='name'
					id=''
					defaultValue={loadedUser?.name}
					placeholder='name'
				/>
				<br />
				<input
					type='email'
					name='email'
					id=''
					defaultValue={loadedUser?.email}
					placeholder='email'
				/>
				<br />
				<input type='submit' value='Update' />
			</form>
		</div>
	);
};

export default Update;
