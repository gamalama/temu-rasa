import RestaurantApi from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render(){
    return `
        <form class="input-bar">
          <label for="search-input"></label>
          <input id="search-input" type="text" placeholder="Search.." name="search">
          <button type="submit"><i class="fa fa-search"></i></button>
        </form>
        <div id="items" class="items"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.restaurants();
    const restaurantContainer = document.querySelector('#items');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  }
};

export default Restaurants;
