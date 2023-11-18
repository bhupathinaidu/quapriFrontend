import axios from "axios";
import { origin } from "./origin";

export const loginSignUpApi = {
  login: (username, password) => {
    return axios
      .post(`${origin()}/api/v1/users/login`, {
        email: username,
        password,
      })
      .then((res) => res.data)
      .catch((err) => err);
  },
  signup: (name, email, password, passwordConfirm) => {
    return axios
      .post(`${origin()}/api/v1/users/signup`, {
        name,
        email,
        password,
        passwordConfirm,
      })
      .then((res) => res.data)
      .catch((err) => err);
  },
};
