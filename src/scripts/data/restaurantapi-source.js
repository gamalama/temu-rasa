import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.results;
  }
}

export default RestaurantApi;
