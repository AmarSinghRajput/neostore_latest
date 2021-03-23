import ProductListingType from '../ActionTypes/ProductListingType';

//─── initial state ───────────────────────────────────────────────────────────
const INITIAL_STATE = {
  productListingData: [],
  error: false,
};

export default GetProductListingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProductListingType.REQ_SUCCESS: {
      // success state of the async call
      console.log('action-->type', action.type);
      console.log('listing response ---> ', action.payload);
      return {
        ...state,
        productListingData: state.productListingData.concat(
          JSON.parse(action.payload),
        ),
        error: false,
      };
    }
    case ProductListingType.REQ_FAILURE: {
      // failed state of the async call
      console.log('action-->type', action.type);
      return {
        ...state,
        productListingData: [],
        error: true,
      };
    }
    case ProductListingType.REQ_CLEARLISTING: {
      return {
        ...state,
        productListingData: [],
        error: false,
      };
    }
    default:
      console.log('action-->type', action.type);
      return state;
  }
};
