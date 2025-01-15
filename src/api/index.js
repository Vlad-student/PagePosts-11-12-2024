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


export const getAllPosts = (options) => {
const query = queryString.stringify(options);
return httpClient.get(`/posts?${query}`)
}

export const getOnePost = (id) => httpClient.get(`/posts/${id}`);

export const getAllCommentsByPost = (id) => httpClient.get(`/comments/post/${id}`) ;

export const getAllPostsByUser = (id) => httpClient.get(`/posts/user/${id}`)
 export const getAllTags = () => httpClient.get('/posts/tag-list')