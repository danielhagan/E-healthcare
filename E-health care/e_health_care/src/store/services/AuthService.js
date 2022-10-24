import axios from 'axios';
import {LocalBaseUrl} from '../BaseUrl';

import {parseJwt} from './ModuleFunctions';

export const Login = async payload => {
  try {
    const res = await axios({
      method: 'post',
      withCredentials: true,
      credentials: 'include',
      url: `${LocalBaseUrl}/api/v1/users/login`,

      headers: {
        'Content-Type': 'application/json',
      },
      data: payload,
    });
    if (res.data.status === 'success') {
      console.log('login successful');
      return res;
    }
  } catch (err) {
    if (err.response) {
      console.log('response', err.response.data.message);
      console.log('response status', err.response.status);
      console.log('response request', err.response.headers);
      throw Error(err.response.data.message);
    } else if (err.request) {
      console.log('response,request', err.request);
      // throw  Error(err.request);
    } else if (axios.isCancel(err)) {
    } else {
      console.log('Error- message', err.message);

      throw new Error(err.message);
    }
    console.log(err);
  }
};

// authVerify(token) {
//   if (!token) {
//     this.logOut();
//   }
//   const decodedJwt = parseJwt(token);
//   if (decodedJwt.exp * 1000 < Date.now()) {
//     this.logOut();
//   }
// }

export const logOut = () => {};
