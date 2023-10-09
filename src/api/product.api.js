import axios from "axios";

export const productApi = {
    getProductById: (id) => {
        return axios.get(`http://localhost:8000/api/v1/product/${id}`)
            .then(res => res.data)
            .catch(err => err)
    },
    getProductCategorysById: (id) => {
        return axios.get(`http://localhost:8000/api/v1/product?category=businessCard`)
            .then(res => res.data)
            .catch(err => err)
    }
}