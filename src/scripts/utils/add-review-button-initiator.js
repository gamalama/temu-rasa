import RestaurantApi from '../data/restaurantapi-source';

const AddReviewButtonInitiator = {
  async init(formElement) {
    formElement.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('submit button clicked');
      const restaurantId = formElement.elements.restaurantId;
      const inputName = formElement.elements.name;
      const inputReview = formElement.elements.review;

      const review = {
        id: restaurantId.value,
        name: inputName.value,
        review: inputReview.value,
      };

      console.log(review);
      await RestaurantApi.addReview(review);
      inputName.value = '';
      inputReview.value = '';
      // document.dispatchEvent(new Event('load'));
      location.reload();
    }
    );
  },
};

export default AddReviewButtonInitiator;
