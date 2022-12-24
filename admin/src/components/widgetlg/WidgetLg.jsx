import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../../redux/orderActions';
import "./WidgetLg.css";

export default function WidgetLg() {
	const dispatch = useDispatch();
	const { authToken } = useSelector(state => state.user);
	const { orders } = useSelector(state => state.order);

	useEffect(() => {
		if (authToken) {
			dispatch(getOrders());
		}
	}, [dispatch, authToken]);
	
	const Button = ({type}) => {
		return <button className={"widgetLgButton " + type}>{type}</button>
	}

	return ( orders &&
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
