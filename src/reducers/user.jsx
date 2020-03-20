const initialState = {
  username: null,
  email: null,
  cart: [],
  token: null,
  isLogin: false,
  profile: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGGING_IN": {
      return state;
    }
    default:
      return state;
  }
};

export default userReducer;
