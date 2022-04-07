import { createContext, useContext, useReducer } from "react";
import { loginApi, signupApi } from "../../services/auth_services";
import { reducer } from "./authReducer";

const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const intialState = user ?? {
    isUserloggedIn: false,
    token: "",
    user: null,
  };
  const [{ isUserloggedIn, token }, dispatch] = useReducer(
    reducer,
    intialState
  );
  const signup = async ({ email, password, firstName, lastName }) => {
    const { data, success } = await signupApi({
      firstName,
      lastName,
      email,
      password
    }); 

    if (success) {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          isUserloggedIn: true,
          token: data.encodedToken,
          user: data.createdUser,
        },
      });
      return true;
    }
    return false;
  };

  const login = async ({ email, password }) => {
    const { data, success } = await loginApi({ email, password });
    if (success) {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          isUserloggedIn: true,
          token: data.encodedToken,
          user: data.foundUser,
        },
      });
      return true;
    }
    return false;
  };
  const logout = () =>{
    dispatch({
      type:"LOGOUT_USER"
    })
  }
  return (
    <AuthContext.Provider value={{ isUserloggedIn, token, signup, login,logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => {
  return useContext(AuthContext);
};
export { useAuth, AuthContextProvider };
