import * as axios from 'axios';

let instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    // withCredentials: true,
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
})

export const UserAPI = {
    registerUser({ email, password, role = "USER" }) {
        return instance.post('/user/registration', { email, password, role })
    },
    loginUser({ email, password }) {
        return instance.post('/user/login', { email, password })
    },
}

export const getProduct = {
    getProductCategory() {
        return instance.get("category")
            .then(response => {
                return response.data
            })
    },
}

export class ProductApi {
    create(data) {

    }
}

export const CategoryApiCreate = async (data) => {
    return (
        await instance.post("category", data)
    )
}