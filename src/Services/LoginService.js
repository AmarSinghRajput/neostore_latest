import {Base_Url, Endpoints} from '../Constants/ServiceConstants';
import CommonHelper from '../commonHelpers/CommonHelper';
import AsysncConst from '../Constants/StorageConstants';

export default LoginService = (email, password, callBack) => {
  var axios = require('axios');
  var FormData = require('form-data');
  var data = new FormData();
  data.append('email', email);
  data.append('password', password);

  var config = {
    method: 'post',
    url: Base_Url + Endpoints.login,
    data: data,
  };

  axios(config)
    .then(function (response) {
      if (response.status == 200) {
        // ─── saving data in Aysnc storage ───────────────────────────────────────────────────────────
        const loginData = JSON.stringify(response.data['data']);
        CommonHelper.SaveData(AsysncConst.userData, loginData, (response) => {
          console.log(loginData);
          // ─── returning data to store in Redux store ───────────────────────────────────────────────────────────
          response
            ? callBack(response, loginData)
            : callBack(response, 'error');
        });
      }
    })
    .catch(function (error) {
      callBack(error);
    });
};
