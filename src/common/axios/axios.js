import axios from "axios";
import { API, API_LOGIN, DELETE, GET, POST, PUT } from "../../constant/axios";

export const setAuth = (token) => {
    if (token) {
        return axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export const thisAxios = (url, method, endPoint = "", body = null) => {
    if (url === API) {
        if (method === GET) {
            return axios.get(`${url}/${endPoint}`);
        } 
        else if (method === POST) {
            return axios.post(`${url}/${endPoint}`, body);
        }
        else if (method === PUT) {
            return axios.put(`${url}/${endPoint}`, body);
        }
        else if (method === DELETE) {
            return axios.delete(`${url}/${endPoint}`);
        }
    } 
    else if (url === API_LOGIN) {
        if (method === POST) {
            return axios.post(`${url}/${endPoint}`, body);
        }
    }
};
