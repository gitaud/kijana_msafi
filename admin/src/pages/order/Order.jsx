import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateOrder } from "../../redux/apiCalls";
import "./Order.css";

export default function Order() {
	const dispatch = useDispatch();

	const appLocation = useLocation();
	const orderId = appLocation.pathname.split("/")[2];
	const { error, isFetching } = useSelector((state) => state.order);

	const order = useSelector( (state) => 
		state.order.orders.find((order) => order._id === orderId)	
	);
	console.log(order.date);

	const [ name, setName ] = useState(() => order.name);
	const [ email, setEmail ] = useState(() => order.email);
	const [ phone, setPhone ] = useState(() => order.phone);
	const [ location, setLocation ] = useState(() => order.location);
	const [ event, setEvent ] = useState(() => order.event);
	const [ date, setDate ] = useState(() => new Date(order.date).toISOString().slice(0, 10));
	const [ status, setStatus ] = useState(() => order.status);
	
	const handleUpdate = (e) => {
		e.preventDefault();
		console.log(event);
		updateOrder(orderId, { name, email, location, event, date, status}, dispatch);
	}

	return (
		<div className="order">
			<div className="orderTitleContainer">
				<h1 className="orderTitle">Order Details</h1>
				<Link to="/orders/new">
					<button className="orderAddButton">Create</button>
				</Link>
			</div>
			<div className="orderBottom">
				<form className="orderForm">
					<div className="orderFormLeft">
						<label>Name</label>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
						<label>Email</label>
						<input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
						<label>Phone</label>
						<input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}/>
						<label>Order Location</label>
						<input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
						
					</div>
					<div className="orderFormRight">
						<label>Order Date</label>
						<input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
						<label>Order Event</label>
						<input type="text" value={event} onChange={(e) => setEvent(e.target.value)}/>
						<label>Status</label>
						<select name="status" id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
							<option value="pending">Pending</option>
							<option value="accepted">Accepted</option>
							<option value="fulfilled" >Fulfilled</option>
						</select>
						<button className="orderButton" onClick={handleUpdate}>Update</button>
						{ isFetching && <div>Sending... </div>}
						{ error && <div className="error">Error! Could not update</div>}
					</div>
				</form>
			</div>
		</div>
	)
}
