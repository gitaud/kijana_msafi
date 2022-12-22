import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from "../../redux/apiCalls";

export default function Login(props) {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const { error } = useSelector((state) => state.user);

	let user = props.user;
	const handleClick = async (e) => {
		e.preventDefault();
		// Send login data
		await login(dispatch, {email, password});
	}
	
	return (
		<div style={
			{
				display: "flex",
				flexDirection: "column",
				alignItems:"center",
				justifyContent: "center",
				height: "100vh",
			}
		}>
			<input style={{padding: 10, marginBottom: 20}} type="text" placeholder="admin@gmail.com" onChange={(e) => setEmail(e.target.value)} />
			<input style={{padding: 10, marginBottom: 20}} type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
			<button style={{ padding: 10, width: 100}} onClick={handleClick}>Login</button>
			{ error && <div style={{color: "red"}}>Error! </div> }
		</div>
	)
}