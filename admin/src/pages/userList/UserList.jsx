import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { deleteUser } from "../../redux/userActions"
import { resetFetch } from "../../redux/userRedux";
import './UserList.css';

export default function UserList() {
	const allUsers = useSelector(state => state.user.otherUsers);
	const [ users, setUsers ] = useState([]);
	const dispatch = useDispatch();
	dispatch(resetFetch());
	const handleDelete = (id) => {
		dispatch(deleteUser(id));
	}

	useEffect(() => {
		setUsers([...allUsers]);
	}, [allUsers])

	const columns = [
		{ field: "id", headerName: "ID", width: 90 },
		{ field: "user", headerName: "user", width: 200, renderCell: (params) => {
			return (
				<div className="userListUser">
					{params.row.username}
				</div>
			)
		}},
		{ field: "email", headerName: "Email", width: 130},
		{ field: "status",
			headerName: "Status",
			width: 100
		},
		{ field: "isAdmin",
			headerName: "isAdmin",
			width: 100,
			renderCell: (params) => {
				return(
					<>
						{params.row.isAdmin ? <p>Yes </p> : <p>No</p>}
					</>	
				)
			}
		},
		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/user/" + params.row._id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutline className="userListDelete" onClick={ () => handleDelete(params.row._id)} />
					</>			
				)
			}
		}
	];
	return (users && 
		<div className="userList">
			<DataGrid 
				rows={users} 
				disableSelectionOnClick 
				columns={columns} 
				autoPageSize
				pagination 
				checkboxSelection 
				getRowId={row => row._id}/>
		</div>
	)
}
