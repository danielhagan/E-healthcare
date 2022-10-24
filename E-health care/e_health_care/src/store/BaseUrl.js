import {Platform} from 'react-native';

export const LocalBaseUrl =
  Platform.OS === 'ios' ? 'http://127:0.0.1:8030' : 'http://10.0.2.2:5000';
const API_URL =
  Platform.OS === 'ios' ? 'http://localhost:5000' : 'http://10.0.2.2:5000';

// import axios from "axios";

// const AxiosInstance = axios.create({
// 	baseURL: `${process.env.REACT_APP_API_URL}`,
// 	// timeout: 3000,
// 	headers: { Authorization: "Bearer " + auth.getToken() },
// });

// export default AxiosInstance;
