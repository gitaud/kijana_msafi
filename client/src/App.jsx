import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

// Components
import Success from "./pages/Success";


const App = () => {
	
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/success" element={<Success />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</Router>
	)
};

export default App;