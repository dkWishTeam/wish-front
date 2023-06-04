import instance from "@/services/axios/requestConfig";

export const wishHistoryList = (data) => {
  console.log(data);
  // const uri = `/wishes/${data.wishId}/wishHistories`;
  const uri = `/wishes/${data}/wishHistories`;
  return instance.get(uri);
};

export const getWishPlaceList = (path) => {
  const uri = `/place/${path}`;
  return instance.get(uri);
};
export const BASE_URL = "http://localhost:8090";
export const getLoginUser = (user) => {
  const uri = `/login`;
  return instance.post(uri, user);
};
export const userLogout = () => {
  const uri = `/logout`;
  return instance.get(uri);
};
