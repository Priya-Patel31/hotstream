export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER": {
      const { isUserloggedIn, token, user } = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { isUserloggedIn, token, user };
    }
    case "LOGOUT_USER": {
      localStorage.removeItem("user");
      return {
        isUserloggedIn: false,
        token: null,
        user: null,
      };
    }
    default:
      return state;
  }
};
