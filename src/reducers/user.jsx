const initialState = {
  username: null,
  email: null,
  cart: [],
  token: null,
  profile: null,
  isLogin: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGING_IN": {
      console.log("Logging in user");
      console.log(action.payload);
      return { ...state, isLogIn: true };
    }
    default:
      return state;
  }
};

export default userReducer;
