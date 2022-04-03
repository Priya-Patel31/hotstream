import {fetchApi} from "../shared/utils/fetchApi";

export const signupApi = async({ firstName,lastName,email, password }) => {
  return await fetchApi({
    url: "/api/auth/signup",
    method: "post",
    body: { email, password,firstName,lastName },
    propertyName: "signup",
  });
};

export const loginApi = async({ email, password }) => {
  return await fetchApi({
    url: "/api/auth/login",
    method: "post",
    body: { email, password },
    propertyName: "login",
  });
};
