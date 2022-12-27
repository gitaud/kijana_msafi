import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

let BASEURL

if (process.env.NODE_ENV === 'production') {
  BASEURL = process.env.REACT_APP_PROD_API_URL
} else {
  BASEURL = process.env.REACT_APP_DEV_API_URL;
}


export const getOrders = createAsyncThunk(
  "order/get",
  async (arg, { getState, rejectWithValue}) => {
    const { user } = getState();
    try {
      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${user.authToken}`
        }
      }
      const { data } = await axios.get(
        "/orders",
        config
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message)
      } else {
        return rejectWithValue(err.message);
      }
    }
  }  
)

export const getOneOrder = createAsyncThunk(
  "order/getOne",
  async (id, { getState, rejectWithValue}) => {
    const { user } = getState();

    try {
      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${user.authToken}`
        }
      }
      const { data } = await axios.get(
        `/orders/${id}`,
        config
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message)
      } else {
        return rejectWithValue(err.message);
      }
    }
  }  
)

export const createOrder = createAsyncThunk(
  "order/create",
  async (orderData, { getState, rejectWithValue}) => {
    const { user } = getState();

    try {
      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${user.authToken}`
        }
      }
      const { data } = await axios.post(
        "/orders",
        orderData,
        config 
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message)
      } else {
        return rejectWithValue(err.message);
      }
    }
  }  
)

export const updateOrder = createAsyncThunk(
  "order/update",
  async (orderData, { getState, rejectWithValue}) => {
    const { user } = getState();

    try {
      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${user.authToken}`
        }
      }
      const { data } = await axios.put(
        `/orders/${orderData.orderId}`,
        {...orderData},
        config 
      )
      return data;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message)
      } else {
        return rejectWithValue(err.message);
      }
    }
  }  
)

export const deleteOrder = createAsyncThunk(
  "order/delete",
  async (id, { getState, rejectWithValue}) => {
    const { user } = getState();

    try {
      const config = {
        baseURL: BASEURL,
        headers: {
          token: `Bearer ${user.authToken}`
        }
      }
      const { data } = await axios.delete(
        `/orders/${id}`,
        config
      )
      return id;
    } catch(err) {
      if (err.response && err.response.data.message) {
        return rejectWithValue(err.response.data.message)
      } else {
        return rejectWithValue(err.message);
      }
    }
  }
)