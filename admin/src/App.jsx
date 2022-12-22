import React, { useEffect } from 'react';
import {  BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from "./pages/user/User";
import NewOrder from "./pages/newOrder/NewOrder";
import Order from "./pages/order/Order";
import OrderList from "./pages/orderList/OrderList";
import NewUser from './pages/newUser/NewUser';
import './App.css';
import Login from "./pages/login/Login";

const HomePage = () => {

	return(
		<>
			<Topbar />
			<div className="container">
				<Sidebar />
				<Outlet />
			</div>
		</>
	)
}

const App = () => {
	let user = useSelector((state) => state.user.currentUser);
	
	return(
		<Router>
			<Routes>
				<Route path="/" element={ user ? <HomePage /> : <Login /> }>
					<Route path="/" element={<Home />} />
					<Route path="/users" element={<UserList />} />
					<Route path="/user/:userId" element={<User />} />
					<Route path="/newUser" element={<NewUser />} />
					<Route path="/orders" element={<OrderList />} />
					<Route path="/order/:orderId" element={<Order />} />
					<Route path="/orders/new" element={<NewOrder/> } />
				</Route>
			</Routes>
		</Router>
	)
}

export default App;