import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';
const api = axios.create({
    baseURL: API_BASE_URL,
})

api.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem('token');
        if(token){
            config.headers.Authorization ='Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export const login = async(username, password) => {
    try{
        const response = await api.post("/auth/login", {username, password});
        return response.data;
    }
    catch(error){
        throw (error)
    }
}

export const register = async(username, password, email) => {
    try{
        const response = await api.post("/auth/register", {username, password, email});
        return response.data;
    }
    catch(error){
        throw (error)
    }
}