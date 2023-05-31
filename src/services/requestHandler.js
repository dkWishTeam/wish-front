import instance from "@/services/axios/requestConfig";

export const wishHistoryList = (data) => {
  console.log(data);
  // const uri = `/wishes/${data.wishId}/wishHistories`;
  const uri = `/wishes/${data}/wishHistories`;
  return instance.get(uri);
};
