import axios from "axios";

//url api 공통화처리
//instance에 모두 담아서 처리
const instance = axios.create({
  baseURL: "http://localhost:8090",
});
//axios의 interceptors를 사용하여 요청/응답 시 필요한 동적 처리 & 에러도 한번에 처리
//1. 성공 응답 처리 경우
//2. error
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
