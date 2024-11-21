import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
     <form class="input-bar">
          <label for="search-input"></label>
          <input id="search-input" type="text" placeholder="Search.." name="search">
          <button type="submit"><i class="fa fa-search"></i></button>
     </form>
     <div id="items" class="items"></div>
    `;
  }

  showFavoriteRestaurants(restaurants) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) =>
        carry.concat(createRestaurantItemTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
    }

    const items = document.getElementById('items');
    items.innerHTML = html;
    items.dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `
        <div class="restaurant-item__not__found">
            There are no restaurants to display
        </div>
      `;
  }
}

export default FavoriteRestaurantView;
