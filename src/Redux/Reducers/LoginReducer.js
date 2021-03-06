import LoginActionType from '../ActionTypes/LoginActionType';

//─── initial state ───────────────────────────────────────────────────────────
const INITIAL_STATE = {
  loginData: null,
  isLoggedIn: false,
  error: false,
  message: '',
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
        isLoggedIn: true,
        error: false,
      };
    }
    case LoginActionType.REQ_FAILURE: {
      // failed state of the async call
      console.log('action-->type', action.type);
      console.log('login response failed---> ', action.payload.user_msg);
      return {
        ...state,
        loginData: null,
        isLoggedIn: false,
        error: true,
        message: action.payload.user_msg,
      };
    }

    default:
      console.log('action-->type', action.type);
      return state;
  }
};
