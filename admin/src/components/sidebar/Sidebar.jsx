import React from 'react';
import { Link } from 'react-router-dom';
import { 
	PermIdentity,
	Storefront,
} from '@mui/icons-material';
import "./Sidebar.css";

export default function Sidebar() {
	return(
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h2 className="sidebarTitle">Dashboard</h2>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem">
								<PermIdentity className="sidebarIcon" />
								Users
							</li>
						</Link>
						<Link to="/orders" className="link">
							<li className="sidebarListItem">
								<Storefront className="sidebarIcon" />
								Orders
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</div>
	)
}