import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

let BASEURL

if (process.env.NODE_ENV === 'production') {
  BASEURL = process.env.REACT_APP_PROD_API_URL
} else {
  BASEURL = process.env.REACT_APP_DEV_API_URL;
}

export const userLogin = createAsyncThunk(
  "user/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        baseURL: BASEURL,
        headers: {
          'Content-Type': "application/json"
        }
      }
  
      const { data } = await axios.post(
        "/auth/login",
        { email, password },
        config
      )
      localStorage.setItem("authToken", data.accessToken)
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
)

export const createUser = createAsyncThunk(
  "user/create",
  async ({ username, email, password, isAdmin }, { getState, rejectWithValue }) => {
    try {
      const { user } = getState();
      const config = {
        baseURL: BASEURL,
        headers: {
          'Content-Type': "application/json",
          token: `Bearer ${user.authToken}`
        }
      }
  
      const { data } = await axios.post(
        "/users/",
        { username, email, password, isAdmin },
        config
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
)

export const getUsers = createAsyncThunk(
  "user/getAll",
  async (arg, { getState, rejectWithValue}) => {
    try {
      const { user } = getState();

      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${ user.authToken }`
        }
      }
      const { data } = await axios.get(
        `/users/`,
        config  
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  } 
)

export const deleteUser = createAsyncThunk(
  "user/delete",
  async (id, { getState, rejectWithValue}) => {
    try {
      const { user } = getState();

      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${ user.authToken }`
        }
      }
      await axios.delete(
        `/users/${id}`,
        config  
      )
      return id;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  } 
)

export const updateUser = createAsyncThunk(
  "user/update",
  async (userData, { getState, rejectWithValue}) => {
    try {
      const { user } = getState();

      const config = {
        baseURL: BASEURL,
        headers: {
          'Content-Type': "application/json",
          token: `Bearer ${ user.authToken }`
        }
      }
      const { data } = await axios.put(
        `/users/${userData.userId}`,
        userData,
        config  
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message);
      } else {
        return rejectWithValue(err.message);
      }
    }
  } 
)