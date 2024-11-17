import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import {
  createLikeButtonTemplate,
  createRestaurantDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render(){
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    const likeButtonContainer = document.querySelector('#likeButtonContainer');

    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    likeButtonContainer.innerHTML = createLikeButtonTemplate();
  }
};

export default Detail;
