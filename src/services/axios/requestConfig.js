import axios from "axios";

//url api 공통화처리
//instance에 모두 담아서 처리
const instance = axios.create({
  baseURL: "http://localhost:8090",
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // JWT를 헤더에 포함시킵니다.
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (config) => {
    // console.log(config);
    return config.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
