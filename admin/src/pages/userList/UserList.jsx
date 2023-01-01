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
		{ field: "user", 
			headerName: "Username", 
			flex: 0.33,
			renderCell: (params) => {
			return (
				<Link className="userListLink" to={"/user/" + params.row._id}>
					<div className="userListUser">
						{params.row.username}
					</div>
				</Link>
			)
		}},
		{ field: "email", headerName: "Email", flex: 0.33 },
		{
			field: "action",
			headerName: "Action",
			flex: 0.34,
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
