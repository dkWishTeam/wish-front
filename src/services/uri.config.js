export const url = {
  wishes: "http://localhost:8090/place/all",

  getUserWishes: function (userId) {
    return "http://localhost:8090/users/" + userId + "/wishes";
  },
  getUserWish: function (userId, wishId) {
    return "http://localhost:8090/users/" + userId + "/wishes/" + wishId;
  },
};
