import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantView
  from './liked-restaurants/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter
  from './liked-restaurants/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter(
      { view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
