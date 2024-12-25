import axios from "axios";
import queryString from "query-string";

const httpClient = axios.create({
    baseURL: 'https://dummyjson.com/'
})

export const loginUser = (dataUser)=>httpClient.post('/auth/login', dataUser);



//username: 'emilys'
//password: 'emilyspass'

export const getAllUsers = (options)=>{
    const query = queryString.stringify(options);
    console.log(query);
    
    return httpClient.get(`/users?${query}`);
} 
export const getOneUser = (id) => httpClient.get(`/users/${id}`);