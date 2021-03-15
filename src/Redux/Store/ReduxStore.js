import {combineReducers} from 'redux';
//import all the reducers
import LoginReducer from '../Reducers/LoginReducer';

//combine all the reducers
export default rootReducer = combineReducers({
  loginReducer: LoginReducer,
});
