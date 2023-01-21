import { createSlice } from "@reduxjs/toolkit";
import {
	createOrder,
	updateOrder,
	deleteOrder,
	getOrders,
	getOneOrder
} from "./orderActions";

const orderSlice = createSlice({
	name: "order",
	initialState: {
		orders: [],
		isFetching: false,
		error: null,
		order: null,
		fetchSuccessful: null
	},
	reducers: {
		resetFetch: (state) => {
			state.fetchSuccessful = null;
		},
		logoutOrder: (state) => {
			state.orders = [];
			state.isFetching = false;
			state.error = null;
			state.order = null;
			state.fetchSuccessful = null;
		}
	},
	extraReducers: {
		[getOrders.pending]: state => {
			state.isFetching = true;
			state.error = false;
			state.fetchSuccessful = null;
		},
		[getOrders.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.error = false;
			state.orders = payload;
			state.fetchSuccessful = true;
		},
		[getOrders.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[getOneOrder.pending]: state => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[getOneOrder.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.error = false;
			state.fetchSuccessful = true;
			state.order = payload;
		},
		[getOneOrder.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.fetchSuccessful = false;
			state.error = payload;
		},
		[createOrder.pending]: state => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[createOrder.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.error = null;
			state.orders.push(payload);
			state.fetchSuccessful = true;
		},
		[createOrder.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[updateOrder.pending]: (state) => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[updateOrder.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.error = null;
			state.orders[
				state.orders.findIndex(item => item._id === payload._id)
			] = payload;
			state.fetchSuccessful = true;
		},
		[updateOrder.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[deleteOrder.pending]: (state) => {
			state.isFetching = false;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[deleteOrder.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.orders.splice(
				state.orders.findIndex(item => item._id === payload), 1	
			);
			state.error = null;
			state.fetchSuccessful = true;
		},
		[deleteOrder.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload
			state.fetchSuccessful = false;
		},
	}
});


export const { resetFetch, logoutOrder } = orderSlice.actions;
export default orderSlice.reducer;