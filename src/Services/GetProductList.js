import {Base_Url, Endpoints} from '../Constants/ServiceConstants';
import CommonHelper from '../commonHelpers/CommonHelper';
import AsysncConst from '../Constants/StorageConstants';

export default GetProductListService = (categoryId, limit, page, callBack) => {
  var axios = require('axios');

  var config = {
    method: 'get',
    url:
      Base_Url +
      Endpoints.getProductList +
      'product_category_id=' +
      categoryId +
      '&limit=' +
      limit +
      '&page=' +
      page,
    headers: {},
  };
  console.log('calling service');
  axios(config)
    .then(function (response) {
      if (response.status == 200) {
        // ─── saving data in Aysnc storage ───────────────────────────────────────────────────────────
        const productsData = JSON.stringify(response.data['data']);
        console.log(productsData);
        // ─── returning data to store in Redux store ─────────────────────────────────────────────────
        response
          ? callBack(response, productsData)
          : callBack(response, 'error');
      }
    })
    .catch(function (error) {
      callBack(error);
    });
};
