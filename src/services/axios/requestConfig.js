import axios from "axios";

//url api 공통화처리
//instance에 모두 담아서 처리
const instance = axios.create({
  baseURL: "http://localhost:8090",
});
instance.interceptors.request.use(
  (request) => {
    // request.headers["Authorization"] = "토큰값";
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
