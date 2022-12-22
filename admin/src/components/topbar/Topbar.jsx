import React from 'react';
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import "./Topbar.css";

export default function Topbar() {
	return(
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className="topLeft">
					<span className="logo">Kijana Msafi</span>
				</div>
				<div className="topRight">
					<img src="https://res.cloudinary.com/dctw6ghne/image/upload/v1671541603/kijana_msafi_logo_m1rdia.jpg" alt="Kijana Msafi Logo" className="topAvatar" />
				</div>
			</div>
		</div>
	)
}