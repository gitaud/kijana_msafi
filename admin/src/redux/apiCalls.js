import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { 
	getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
	updateOrderStart,
	updateOrderSuccess,
	updateOrderFailure,
	addOrderStart,
	addOrderSuccess,
	addOrderFailure
} from "./orderRedux";
import { publicRequest, userRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user)
		dispatch(loginSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(loginFailure(err));
	}
}

export const getOrders = async (dispatch) => {
	dispatch(getOrderStart());
	try {
		const res = await userRequest.get("/orders");
		dispatch(getOrderSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(getOrderFailure());
	}
}

export const getOneOrder = async(id, dispatch) => {
	dispatch(getOrderStart());
	try {
		const res = await userRequest.get(`/orders/${id}`);
		dispatch(getOrderSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(getOrderFailure);
	}
}

export const deleteOrder = async (id, dispatch) => {
	dispatch(deleteOrderStart());
	try {
		await userRequest.delete(`/orders/${id}`);
		dispatch(deleteOrderSuccess(id));
	} catch(err) {
		console.log(err);
		dispatch(deleteOrderFailure());
	}
}

export const updateOrder = async (id, order, dispatch) => {
	dispatch(updateOrderStart());
	try {
		const res = await userRequest.put(`/orders/${id}`, { order });
		console.log(res.data);
		dispatch(updateOrderSuccess({ id, order: res.data }));
	} catch(err) {
		console.log(err);
		dispatch(updateOrderFailure());
	}
}

export const addOrder = async (order, dispatch) => {
	dispatch(addOrderStart());
	try {
		const res = await publicRequest.post("/orders", order);
		dispatch(addOrderSuccess(res.data));
	} catch(err) {
		console.log(err);
		dispatch(addOrderFailure());
	}
}