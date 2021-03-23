import ProductListingType from '../ActionTypes/ProductListingType';
import GetProductListService from '../../Services/GetProductList';
//
// ─── LOGIN USER ASYNC CALL ───────────────────────────────────────────────────────────
//
export const fetchproductListing = (categoryId, limit, page) => {
  return (dispatch) => {
    GetProductListService(categoryId, limit, page, (response, data) => {
      // ─── storing data in Redux store ───────────────────────────────────────────────────────────
      console.log(data);
      response && data != undefined
        ? dispatch({type: ProductListingType.REQ_SUCCESS, payload: data})
        : dispatch({type: ProductListingType.REQ_FAILURE});
    });
  };
};

export const clearProductListing = () => {
  return (dispatch) => {
    console.log('called');
    // ─── storing data in Redux store ───────────────────────────────────────────────────────────
    dispatch({type: ProductListingType.REQ_CLEARLISTING});
  };
};
