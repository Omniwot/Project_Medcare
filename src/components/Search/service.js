import http from "../../mongodb/http-common";

class RestaurantDataService {

  find(query, by = "q", page = 0) {
    return http.get(`prices?${by}=${query}&page=${page}`);
  } 
  createSupportRequest(data) {
    return http.post("/support", data);
  }

}

export default new RestaurantDataService();