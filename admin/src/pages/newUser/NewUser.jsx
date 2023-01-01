import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { createUser } from '../../redux/userActions';
import "./NewUser.css";

export default function NewUser() {

	const draftUsr = {
		username: "",
		email: "",
		password: "",
		isAdmin: "true"
	}

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [ input, setInputs ] = useState(() => draftUsr);

	const handleChange = (e) => {
		setInputs(prev => {
			return {...prev, [e.target.name]: e.target.value }
		})
	}

	const { fetchSuccessful, error } = useSelector(state => state.user);


	const handleSubmit = async (e) => {
		e.preventDefault();
		const userItem = { ...input }
		dispatch(createUser(userItem));
	}

	useEffect(() => {
		if (fetchSuccessful) {
			navigate("/users");
		}
	}, [navigate, fetchSuccessful])

	return (
		<div className="newUser">
			<h1 className="newUserTitle">
				New User
			</h1>
			<form className="newUserForm">
				<div className="newUserItem">
					<label> Full name </label>
					<input type="text" name="username" value={input.username} onChange={handleChange} placeholder='John Smith' />
				</div>
				<div className="newUserItem">
					<label> Email </label>
					<input type="email" name="email" value={input.email} onChange={handleChange} placeholder='johntez@gmail.com' />
				</div>
				<div className="newUserItem">
					<label> Password </label>
					<input type="text" name="password" value={input.password} onChange={handleChange} placeholder='password' />
				</div>
				<div className="newUserItem">
					<label>Admin</label>
					<select name="isAdmin" value={input.isAdmin} onChange={handleChange} id="isAdmin" className="userSelect">
						<option value="true">Yes</option>
						<option value="false">No</option>
					</select>
				</div>
				<button className="newUserButton" onClick={handleSubmit}>Create</button>
				{ error && <div className="error">Error! { error.data } </div>}
			</form>
		</div>
	)
}
