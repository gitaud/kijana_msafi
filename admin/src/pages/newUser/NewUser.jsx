import React from 'react'
import "./NewUser.css";

export default function NewUser() {
	return (
		<div className="newUser">
			<h1 className="newUserTitle">
				New User
			</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label> Full name </label>
					<input type="text" placeholder='John Smith' />
				</div>
				<div className="newUserItem">
					<label> Email </label>
					<input type="email" placeholder='johntez@gmail.com' />
				</div>
				<div className="newUserItem">
					<label> Password </label>
					<input type="password" placeholder='password' />
				</div>
				<div className="newUserItem">
					<label> Phone </label>
					<input type="phone" placeholder='+254 111 222 333' />
				</div>
				<div className="newUserItem">
					<label> Address </label>
					<input type="text" placeholder='Nairobi, CBD' />
				</div>
				<div className="newUserItem">
					<label>Admin</label>
					<select name="is_admin" id="is_admin" className="userSelect">
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
				<button className="newUserButton">Create</button>
			</form>
		</div>
	)
}
