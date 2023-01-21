import {createSlice} from "@reduxjs/toolkit";
import { 
	createUser,
	userLogin,
	deleteUser,
	updateUser,
	getUsers,
} from "./userActions";

const authToken = localStorage.getItem('authToken') 
	? localStorage.getItem('authToken')
	: null

const userSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: null,
		otherUsers: [],
		isFetching: false,
		error: null,
		authToken,
		loginSuccess: null,
		fetchSuccessful: null,
	},
	reducers: {
		resetFetch: (state) => {
			state.fetchSuccessful = null;
		},
		logoutUser: (state) => {
			state.currentUser = null;
			state.otherUsers = [],
			state.isFetching = false;
			state.error = null;
			state.authToken = null;
			state.loginSuccess = null;
			state.fetchSuccessful = null;
		}
	},
	extraReducers: {
		// CREATE USER
		[createUser.pending]: (state) => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null
		},
		[createUser.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.otherUsers.push(payload);
			state.error = null;
			state.fetchSuccessful = true; 
		},
		[createUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[userLogin.pending]: (state) => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[userLogin.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.currentUser = payload;
			state.authToken = payload.accessToken;
			state.error = null;
			state.loginSuccess = true;
			state.fetchSuccessful = null;
		},
		[userLogin.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[deleteUser.pending]: (state) => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[deleteUser.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.otherUsers.splice(
				state.otherUsers.findIndex(item => item._id === payload), 1
			)
			state.error = null;
			state.fetchSuccessful = true;
		},
		[deleteUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[updateUser.pending]: (state) => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[updateUser.fulfilled]: (state, { payload }) => {
			state.isFetching = false;
			state.error = null;
			state.otherUsers[
			state.otherUsers.findIndex(item => item._id === payload._id)
			] = payload;
			state.fetchSuccessful = true;
		},
		[updateUser.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		},
		[getUsers.pending]: state => {
			state.isFetching = true;
			state.error = null;
			state.fetchSuccessful = null;
		},
		[getUsers.fulfilled]: (state, { payload }) => {
			state.error = false;
			state.isFetching = false;
			state.otherUsers = payload;
			state.fetchSuccessful = true;
		},
		[getUsers.rejected]: (state, { payload }) => {
			state.isFetching = false;
			state.error = payload;
			state.fetchSuccessful = false;
		}
	}
});
export const { resetFetch, logoutUser } = userSlice.actions; 
export default userSlice.reducer;