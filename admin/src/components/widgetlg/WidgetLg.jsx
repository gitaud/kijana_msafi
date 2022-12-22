import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import "./WidgetLg.css";

export default function WidgetLg() {

	const user = useSelector(state => state.user.currentUser);
	let token = user.accessToken;
	const [orders, setOrders] = useState([]);

	const userRequest = axios.create({
		baseURL: "http://localhost:5000/api/",
		headers: { token: `Bearer ${token}`}
	})

	useEffect(() => {
		const getOrders = async () => {
			try {
				const res = await userRequest.get("orders/");
			setOrders(res.data)
			} catch(err) {
				console.log(err);
			}
		};
		getOrders();
	}, []);
	
	const Button = ({type}) => {
		return <button className={"widgetLgButton " + type}>{type}</button>
	}

	return (
		<div className="widgetLg">
			<h3 className="widgetLgTitle">
				Latest Transactions
			</h3>
			<table className="widgetLgTable">
				<thead>
					<tr className="widgetLgTr">
						<th className="widgetLgTh">Customer</th>
						<th className="widgetLgTh">Date</th>
						<th className="widgetLgTh">Location</th>
						<th className="widgetLgTh">Status</th>
					</tr>
				</thead>
				<tbody>
					{ orders.map((order) => (
						<tr className="widgetLgTr" key={order._id}>
							<td className="widgetLgUser">
								<span className="widgetLgName">{order.name}</span>
							</td>
							<td className="widgetLgDate">{order.createdAt}</td>
							<td className="widgetLgLocation">{order.location}</td>
							<td className="widgetLgStatus">
								<Button type={order.status} />
							</td>
						</tr>
					))
					}
				</tbody>
			</table>
		</div>
	)
}
