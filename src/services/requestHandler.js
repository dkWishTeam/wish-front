import instance from "@/services/axios/requestConfig";

/* wishHistory 정보 가져오기 (GET) */
export const wishHistoryInfo = (data) => {
  const uri = `/wishes/${data}/wishHistories`;
  return instance.get(uri);
};

/* wishHistory 기록하기 (POST) */
export const wishHistoryRegister = (registerData) => {
  const uri = `/wishes/${registerData.wishId}/wishHistories`;
  return instance.post(uri, registerData);
};

/* wishHistory 수정하기 (UPDATE) */
export const updateWishHistory = (modifyData) => {
  const uri = `/wishes/${modifyData.wishId}/wishHistories`;
  return instance.put(uri, modifyData);
};

/* wishHistory 삭제하기 (DELETE) */
export const deleteWishHistory = (wishId, wishHistoryId) => {
  const uri = `/wishes/${wishId}/wishHistories/${wishHistoryId}`;
  return instance.delete(uri);
};

export const getWishPlaceList = (path, start, size) => {
  const uri = `/place/${path}?start=${start}&size=${size}`;
  return instance.get(uri);
};
export const getSearchWishPlaceList = (search, start, size) => {
  const uri = `/place?search=${search}&start=${start}&size=${size}`;
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
