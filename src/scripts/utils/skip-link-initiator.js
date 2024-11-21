const SkipLinkInitiator = {
  init({ skipLink }) {
    skipLink.addEventListener('click', (event) => {
      this._skipToContent(event);
    });
  },

  _skipToContent(event) {
    event.preventDefault();
    document.querySelector('#mainContent').scrollIntoView({ behavior: 'smooth' });
  },
};

export default SkipLinkInitiator;
