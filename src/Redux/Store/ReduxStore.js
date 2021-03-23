import {combineReducers} from 'redux';
//import all the reducers
import LoginReducer from '../Reducers/LoginReducer';
import GetProductListingReducer from '../Reducers/GetProductListingReducer';
//combine all the reducers
export default rootReducer = combineReducers({
  loginReducer: LoginReducer,
  productListingReducer: GetProductListingReducer,
});
