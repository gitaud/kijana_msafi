import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { addOrder } from "../../redux/apiCalls";
import "./NewOrder.css";

export default function NewOrder() {

	const dispatch = useDispatch();

	const [ inputs, setInputs] = useState({});

	const handleChange = (e) => {
		setInputs(prev => {
			return {...prev, [e.target.name]: e.target.value}
		})
	}

	const handleClick = (e) => {
		e.preventDefault();
		addOrder(order, dispatch);
		const order = {...inputs };
	}

	return (
		<div className="newOrder">
			<h1 className="addOrderTitle">New Order</h1>
			<form className="addOrderForm">
				<div className="orderLeft">
					<div className="addOrderItem">
						<label>Name</label>
						<input type="text" name="name" placeholder="Customer's Name" onChange={handleChange} />
					</div>
					<div className="addOrderItem">
						<label>Email</label>
						<input type="email" name="email" placeholder="email@example.com" onChange={handleChange} />
					</div>
					<div className="addOrderItem">
						<label>Phone</label>
						<input type="text" name="phone" placeholder="0712 345 678" onChange={handleChange} />
					</div>
					<div className="addOrderItem">
						<label>Event</label>
						<input type="text" name="event" placeholder="Birthday, wedding etc" onChange={handleChange}/>
					</div>
				</div>
				<div className="orderRight">
					<div className="addOrderItem">
						<label>Location</label>
						<input type="text" name="location" placeholder="Town, County" onChange={handleChange}/>
					</div>
					<div className="addOrderItem">
						<label>Date</label>
						<input type="date" name="date" onChange={handleChange}/>
					</div>
					<div className="addOrderItem">
						<label>Status</label>
						<select name="status" id="status" onChange={handleChange}>
							<option value="pending">Pending</option>
							<option value="accepted">Accepted</option>
							<option value="fulfilled">Fulfilled</option>
						</select>
					</div>
					<button onClick={handleClick} className="addOrderButton">
						Create
					</button>
				</div>
			</form>
		</div>
	)
}