import React from 'react';
import WidgetLg from '../../components/widgetlg/WidgetLg';
import WidgetSm from '../../components/widgetsm/WidgetSm';
import './Home.css';


export default function Home() {

	return (
		<div className='home'>
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	)
}
