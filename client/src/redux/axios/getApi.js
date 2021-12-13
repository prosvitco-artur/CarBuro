import * as axios from 'axios';

let instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    // withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

export class User {
    registerUser = async ({ email, password, role = "USER" }) => {
        return await instance.post('/user/registration', { email, password, role })
    }
    loginUser = async ({ email, password }) => {
        return await instance.post('user/login', { email, password })
    }
}


export class Category {
    getAll = async () => {
        return await instance.get("category");
    }
    getAllFirst = async () => {
        return await instance.get("category/parent");
    }
    getChildCategory = async (parentID) => {
        return await instance.get("category/parent/?parentId="+parentID);
    }
}