import axios from 'axios';
let BASEURL

if (process.env.NODE_ENV === 'production') {
  BASEURL = process.env.REACT_APP_PROD_API_URL
} else {
  BASEURL = process.env.REACT_APP_DEV_API_URL;
}

export const publicRequest = axios.create({
	baseURL: BASEURL
})