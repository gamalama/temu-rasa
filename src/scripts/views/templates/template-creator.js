import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
  <div class="card">
    <div class="card__image">
      <img src="${CONFIG.BASE_URL}images/medium/${restaurant.pictureId}" alt="${restaurant.name} Photo">
    </div>
    <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
    <i class="fa fa-star"></i><span>${restaurant.rating}</span>
    <p class="location">${restaurant.city}</p>
    <p class="card__description">${restaurant.description.substring(0, 100)}</p>
    <button>Reserve</button>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
   <section class="restaurant-detail">
        <div class="restaurant__image">
            <img src="${CONFIG.BASE_URL}images/large/${restaurant.pictureId}" alt="${restaurant.name} Photo">
        </div>
        <div id="restaurant-info" class="restaurant__info">
          <h1>${restaurant.name}</h1>
          <p><i class="fa fa-map-marker"></i>${restaurant.city}</p>
          <p><i class="fa fa-star"></i>${restaurant.rating}</p>
          <p>${restaurant.description}</p>           
        </div>
    </section>

    <!-- Menu Restoran -->
    <section class="restaurant-menu">
        <h2>Menu</h2>
        <div class="menu">
            <div class="menu__category">
                <h3>Makanan</h3>
                <ul>
${restaurant.menus.foods.map((food) => (`<li>${food.name}</li>`)).join('')}
                </ul>
            </div>
            <div class="menu__category">
                <h3>Minuman</h3>
                <ul>
${restaurant.menus.drinks.map((drink) => (`<li>${drink.name}</li>`)).join('')}
                </ul>
            </div>
        </div>
    </section>

    <!-- Ulasan Pelanggan -->
    <section class="customer-review">
        <h2>Ulasan Pelanggan</h2>
        <div class="review">
${restaurant.customerReviews.map((review) => (
    `<div class="review__item">
      <p><strong>${review.name}</strong></p>
      <p>${review.date}</p>
      <p>${review.review}</p>
    </div>`
  )).join('')}        
        </div>
    </section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
