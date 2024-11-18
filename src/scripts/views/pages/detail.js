import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import {  createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import AddReviewButtonInitiator from '../../utils/add-review-button-initiator';

const Detail = {
  async render(){
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    document.querySelector('.hero').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApiSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    const formAddReviewElement = document.querySelector('.add-review');

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        address: restaurant.address,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        menus: restaurant.menus,
        rating: restaurant.rating,
        customerReviews: restaurant.customerReviews,
      },
    });

    AddReviewButtonInitiator.init(formAddReviewElement);
  }
};

export default Detail;
