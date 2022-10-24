import {LocalBaseUrl} from './BaseUrl';

const loginApi = () => `${LocalBaseUrl}/api/v1/login`;
const signUpApi = () => `${LocalBaseUrl}/api/v1/signup`;

export {loginApi, signUpApi};
