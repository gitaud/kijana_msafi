import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { getOrders, deleteOrder } from "../../redux/apiCalls";

import "./OrderList.css";

export default function OrderList() {

	const dispatch = useDispatch();
	const orders = useSelector((state) => state.order.orders);

	useEffect(() => {
		getOrders(dispatch);
	}, [dispatch]);


	const handleDelete = (id) => {
		deleteOrder(id, dispatch)
	}

	const columns = [
		{ 
			field: "name",
			headerName: "Name",
			width: 150
		},
		{ 
			field: "email",
			headerName: "Email",
			width: 200
		},
		{
			field: "location",
			headerName: "Location",
			width: 150
		},
		{
			field: "event",
			headerName: "Event type",
			width: 200
		},
		{
			field: "date",
			headerName: "Date",
			width: 130,
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
			width: 100,
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
			width: 100,
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
