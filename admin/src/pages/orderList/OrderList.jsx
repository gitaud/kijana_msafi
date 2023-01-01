import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { deleteOrder } from "../../redux/orderActions";
import { resetFetch } from "../../redux/orderRedux";

import "./OrderList.css";

export default function OrderList() {

	const dispatch = useDispatch();
	const allOrders = useSelector((state) => state.order.orders);
	const [ orders, setOrders ] = useState([]);

	useEffect(() => {
		setOrders([...allOrders]);
		dispatch(resetFetch());
	}, [allOrders])

	const handleDelete = (id) => {
		dispatch(deleteOrder(id));
	}

	const columns = [
		{ 
			field: "name",
			headerName: "Name",
			flex: 0.20,
			renderCell: (params) => {
				return(
					<Link className='orderListLink' to={"/order/" + params.row._id}>
						<div>{params.row.name}</div>
					</Link>	
				)
			}
		},
		{
			field: "event",
			headerName: "Event type",
			flex: 0.24
		},
		{
			field: "date",
			headerName: "Date",
			flex: 0.20,
			renderCell: (params) => {
				return(
					<>
						{new Date(params.row.date).toDateString()}
					</>	
				)
			}
		},
		{
			field: "status",
			headerName: "Status",
			flex: 0.11,
			renderCell: (params) => {
				return (
					<>
						<p className={params.row.status}>{params.row.status}</p>
					</>	
				)
			}
		},
		{
			field: "action",
			headerName: "Action",
			flex: 0.25,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/order/" + params.row._id}>
							<button className="orderListEdit">Edit</button>
						</Link>
						<DeleteOutline className="orderListDelete" onClick={ () => handleDelete(params.row._id)} />
					</>			
				)
			}
		}
	];

	return (
		<div className="orderList">
			<DataGrid 
				rows={orders} 
				disableSelectionOnClick 
				columns={columns}
				autoPageSize
				pagination
				getRowId={row => row._id} 
			/>
		</div>
	)
}
