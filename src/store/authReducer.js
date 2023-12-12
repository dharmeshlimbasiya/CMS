const initialState = {
  isAuthenticated: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        isAuthenticated: true,
        token: action.payload,
      };
    case 'LOGOUT':
      return {
        isAuthenticated: false,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
