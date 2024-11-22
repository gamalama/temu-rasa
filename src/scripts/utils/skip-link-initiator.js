const SkipLinkInitiator = {
  init({ skipLink }) {
    skipLink.addEventListener('click', (event) => {
      this._skipToContent(event, skipLink);
    });
  },

  _skipToContent(event, skipLink) {
    event.preventDefault();
    document.querySelector('#mainContent').scrollIntoView({ behavior: 'smooth' });
    skipLink.blur();
  },
};

export default SkipLinkInitiator;
