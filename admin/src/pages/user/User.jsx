import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from "../../redux/userActions";
import { MailOutline, PermIdentity } from "@mui/icons-material";
import "./User.css";

export default function User() {

	const appLocation = useLocation();
	const userId = appLocation.pathname.split("/")[2];
	
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const currUser = useSelector(state => 
		state.user.otherUsers.filter(
			user => user._id === userId
		)[0]
	)
	
	const [user, setUser] = useState({...currUser});
	
	const { isFetching, fetchSuccessful, error } = useSelector(state => state.user);

	useEffect(() => {
		if (fetchSuccessful) {
			navigate("/users");
		}
	}, [navigate, fetchSuccessful])

	const [ username, setUserName ] = useState(() => user.username);
	const [ email, setEmail ] = useState(() => user.email);
	const [ password, setPassword ] = useState("");
	const [ admin, setAdmin ] = useState(() => String(user.isAdmin));


	const handleSubmit = () => {
		let isAdmin;
		admin === "true" ? isAdmin = true : isAdmin = false;
		dispatch(updateUser({ userId, username, email, password, isAdmin}))
	}


	return ( user &&
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">
						Create
					</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon"/>
							<span className="userShowInfoTitle">{user.username}</span>
						</div>
						<span className="userShowTitle">Contact Details</span>
						<div className="userShowInfo">
							<MailOutline className="userShowIcon"/>
							<span className="userShowInfoTitle">{user.email}</span>
						</div>
						<div className="userShowInfo">
							<PermIdentity className="userShowIcon"/>
							<span className="userShowInfoTitle">{user.isAdmin ? "Is Admin" : "Not Admin"}</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input type="text" name="username" value={username} placeholder="Name" className="userUpdateInput" onChange={(e) => setUserName(e.target.value)} />
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@email.com" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Password</label>
								<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="strong password" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<select name="admin" id="admin" className="userUpdateInput" value={admin} onChange={(e) => setAdmin(e.target.value)}>
									<option value="true">Yes</option>
									<option value="false">No</option>
								</select>
							</div>
						</div>
						<div className="userUpdateRight">
							<button className="userUpdateButton" disabled={isFetching} onClick={handleSubmit}>Update</button>
						</div>
					</form>
					{ error && <div style={{color: "red", marginTop: "10px"}}>Error! { error.data} </div>}
				</div>
			</div>
		</div>
	);
}
