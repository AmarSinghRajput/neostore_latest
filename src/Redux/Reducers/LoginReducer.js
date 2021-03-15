import LoginActionType from '../ActionTypes/LoginActionType';

//─── initial state ───────────────────────────────────────────────────────────
const INITIAL_STATE = {
  loginData: null,
  loading: false,
  error: false,
  isLoggedIn: false,
};

export default LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionType.REQ_SUCCESS: {
      // success state of the async call
      console.log('action-->type', action.type);
      console.log('login response ---> ', action.payload);
      return {
        ...state,
        loginData: action.payload,
        loading: false,
        error: false,
        isLoggedIn: true,
      };
    }
    case LoginActionType.REQ_FAILURE: {
      // failed state of the async call
      console.log('action-->type', action.type);
      return {
        ...state,
        loginData: null,
        loading: false,
        error: true,
        isLoggedIn: false,
      };
    }

    default:
      console.log('action-->type', action.type);
      return state;
  }
};
