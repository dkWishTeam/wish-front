export const url = {
  wishes: "http://localhost:8090/place/all",

  getUserWish: function (userId) {
    return "http://localhost:8090/users/" + userId + "/wishes/json";
  },
};
