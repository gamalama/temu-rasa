const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I })=> {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#items');

  I.see('There are no restaurants to display', '.restaurant-item__not__found');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('There are no restaurants to display', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card a');
  const firstRestaurant = locate('.card a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card__title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I })=>{
  // I.amOnPage('/#/favorite');
  I.see('There are no restaurants to display', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.card a');
  const firstRestaurant = locate('.card a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  // Unlike
  I.seeElement('.card');
  const likedRestaurant = locate('.card a').first();
  const likedRestaurantTitle = await I.grabTextFrom(likedRestaurant);
  I.click(likedRestaurantTitle);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#items');

  I.see('There are no restaurants to display', '.restaurant-item__not__found');
});
