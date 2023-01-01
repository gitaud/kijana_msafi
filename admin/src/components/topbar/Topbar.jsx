import React from 'react';
import { Link } from 'react-router-dom';
import { 
	PermIdentity,
	Storefront,
} from '@mui/icons-material';
import "./Topbar.css";

export default function Topbar() {
	return(
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className="topLeft">
					<Link to="/" className="link">
						<span className="logo">Kijana Msafi</span>
					</Link>
				</div>
				<div className="topRight">
					<div className="nav">
						<Link to="/users" className="link">
							<PermIdentity />
						</Link>
					</div>
					<div className="nav">
						<Link to="/orders" className="link">
							<Storefront />
						</Link>
					</div>
					<Link to="/" className="link">
						<img src="https://res.cloudinary.com/dctw6ghne/image/upload/v1671541603/kijana_msafi_logo_m1rdia.jpg" alt="Kijana Msafi Logo" className="topAvatar" />
					</Link>
				</div>
			</div>
		</div>
	)
}