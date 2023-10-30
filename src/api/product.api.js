import axios from "axios";
import { origin } from "./origin";

export const productApi = {
    getProductById: (id) => {
        return axios.get(`${origin()}/api/v1/product/${id}`)
            .then(res => res.data)
            .catch(err => err)
    },
    getProductsByCategory: async (id) => {
        return await axios.get(`${origin()}/api/v1/product?category=${id}`)
            .then(res => res.data)
            .catch(err => err)
    }
}