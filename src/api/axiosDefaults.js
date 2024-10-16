import axios from "axios";

axios.defaults.baseURL = "https://drf-api-1-17088e476ea9.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();