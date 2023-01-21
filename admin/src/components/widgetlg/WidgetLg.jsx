import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOrders } from '../../redux/orderActions';
import { resetFetch } from '../../redux/orderRedux';
import "./WidgetLg.css";

export default function WidgetLg() {
	const dispatch = useDispatch();
	const { authToken } = useSelector(state => state.user);
	const { orders } = useSelector(state => state.order);
	const [ allOrders, setAllOrders ] = useState([]);
	

	useEffect(() => {
		if (authToken) {
			dispatch(getOrders());
		}
	}, [dispatch, authToken]);

	useEffect(() => {
		setAllOrders([...orders])
		dispatch(resetFetch());
	}, [dispatch])
	
	const Button = ({type}) => {
		return <button className={"widgetLgButton " + type}>{type}</button>
	}

	return ( allOrders &&
		<div className="widgetLg">
			<h3 className="widgetLgTitle">
				Latest Transactions
			</h3>
			<table className="widgetLgTable">
				<thead>
					<tr className="widgetLgTr">
						<th className="widgetLgTh">Customer</th>
						<th className="widgetLgTh">Date Placed</th>
						<th className="widgetLgTh">Location</th>
						<th className="widgetLgTh">Status</th>
					</tr>
				</thead>
				<tbody>
					{ allOrders.slice(0, 10).map((order) => (
						<tr className="widgetLgTr" key={order._id}>
							<td className="widgetLgUser">
								<span className="widgetLgName"><Link className='orderLink' to={`/order/` + order._id}>{order.name}</Link></span>
							</td>
							<td className="widgetLgDate">{new Date(order.createdAt).toDateString()}</td>
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
