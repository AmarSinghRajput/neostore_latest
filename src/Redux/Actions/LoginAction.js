import LoginActionType from '../ActionTypes/LoginActionType';
import LoginService from '../../Services/LoginService';

//
// ─── LOGIN USER ASYNC CALL ───────────────────────────────────────────────────────────
//

export const loginUser = (email, password) => {
  return (dispatch) => {
    LoginService(email, password, (response, data) => {
      // ─── storing data in Redux store ───────────────────────────────────────────────────────────
      response && data != undefined
        ? dispatch({type: LoginActionType.REQ_SUCCESS, payload: data})
        : dispatch({type: LoginActionType.REQ_FAILURE});
    });
  };
};
