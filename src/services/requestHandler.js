import instance from "@/services/axios/requestConfig";

//====================================================

// export const get = (url) => {
//   return instance.get(url);
// };
//
// export const post = (url, data) => {
//   return instance.post(url, data);
// };
//
// export const put = (url, data) => {
//   return instance.put(url, data);
// };
//
// export const deleteData = (url) => {
//   return instance.delete(url);
// };

//====================================================

/* wishHistory 정보 가져오기 (GET) */
export const wishHistoryInfo = (data) => {
  const uri = `/wishes/${data}/wishHistories`;
  return instance.get(uri);
};

export const findPagedWishHistory = (data, size) => {
  const uri = `/wishes/${data}/wishHistories/page`;
  console.log(data, size);
  let requestBody = {
    page: size,
    pageSize: 10,
  };
  return instance.get(uri, { params: requestBody });
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

export const getUserWishes = (id) => {
  const uri = `/users/${id}/wishes`;
  return instance.get(uri);
};

export const getUserWish = (id, wishId) => {
  const uri = `/users/${id}/wishes/${wishId}`;
  return instance.get(uri);
};

export const createWish = (id, data) => {
  const uri = `/users/${id}/wishes`;
  return instance.post(uri, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      charset: "utf-8",
    },
  });
};
