import React, { useState, useEffect } from 'react';
import { Visibility } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, resetFetch } from '../../redux/userActions';
import "./WidgetSm.css";

export default function WidgetSm() {

	const dispatch = useDispatch()
	const { otherUsers, authToken } = useSelector(state => state.user);
	const [ users, setUsers ] = useState([])

	useEffect(() => {
		if (authToken) {
			dispatch(getUsers());
		}
	}, [dispatch, authToken]);

	useEffect(() => {
		setUsers([...otherUsers]);
		dispatch(resetFetch());
	}, [dispatch]);

	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Members</span>
			<ul className="widgetSmList">

				{ users.map((user) => (
					<li className="widgetSmListItem" key={user._id}>
						<img src={user.img || "https://static.vecteezy.com/system/resources/previews/001/840/618/large_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg"} alt="" className="widgetSmImg" />
						<div className="widgetSmUser">
							<span className="widgetSmUsername">{user.username}</span>
							<span className="widgetSmUserTitle">{user.email}</span>
						</div>
						<button className="widgetSmButton">
							<Visibility className="widgetSmIcon" />
							Display
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}
