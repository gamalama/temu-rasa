import 'regenerator-runtime'; /* for async await transpile */
import '../styles/reset.css';
import '../styles/main.css';
import '../styles/responsive.css';

const menu = document.querySelector('#menu');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  // navList.classList.toggle('open');
  event.stopPropagation();
});
