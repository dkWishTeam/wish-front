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
export const getWishPlaceListCount = (path) => {
  const uri = `/place/${path}/count`;
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
export const getMyPage = (id) => {
  const uri = `/users/${id}`;
  return instance.get(uri);
};

export const checkUserId = (userId) => {
  const uri = `/users/userid-duplicate-check?userId=${userId}`;
  return instance.get(uri);
};

export const checkEmail = (email) => {
  const uri = `/users/email-duplicate-check?email=${email}`;
  return instance.get(uri);
};

export const checkNickname = (nickname) => {
  const uri = `/users/nickname-duplicate-check?nickname=${nickname}`;
  return instance.get(uri);
};

export const checkPhone = (phone) => {
  const uri = `/users/phone-duplicate-check?phone=${phone}`;
  return instance.get(uri);
};

export const getUsersByAdmin = () => {
  const uri = `/users`;
  return instance.get(uri);
};

export const userUpdate = (id, user) => {
  const uri = `/users/${id}`;
  return instance.put(uri, user);
};

export const updateBlockStatus = (id) => {
  const uri = `/users/${id}/block`;
  return instance.put(uri);
};
