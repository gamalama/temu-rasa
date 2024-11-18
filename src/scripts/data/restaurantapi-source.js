import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async restaurants() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson= await response.json();
    return responseJson.restaurant;
  }

  static async addReview(review){
    try {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(review)
      };
      console.log(options.body);
      const response = await fetch(API_ENDPOINT.ADD_REVIEW, options);
      const responseJson = await response.json();
      return responseJson.message;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default RestaurantApi;
