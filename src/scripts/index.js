import 'regenerator-runtime'; /* for async await transpile */
import '../styles/reset.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  hero: document.querySelector('.hero'),
});

// const menu = document.querySelector('#menu');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });
