import axios from "axios";
import { origin } from "./origin";

export const loginSignUpApi = {  
    login: (username, password) => {
        return axios.post(`${origin()}/api/v1/users/login`, {
            email: username,
            password
        })
        .then(res => res.data)
        .catch(err => err)
    }
}