import * as axios from 'axios';

let instance = axios.create({
    baseURL: "http://car-buro/wp-json/myplugin/v1/",
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