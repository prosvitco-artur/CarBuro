import * as axios from 'axios';

let instance = axios.create({
    baseURL: "http://localhost:5000/api/",
    withCredentials: true,
    headers: {
    }
})

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
        await instance.post("category/", data)
    )
}