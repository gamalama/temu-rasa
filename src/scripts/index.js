import 'regenerator-runtime'; /* for async await transpile */
import '../styles/reset.css';
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent'),
  skipLink: document.querySelector('.skip-link'),
});

window.addEventListener('hashchange', ()=> {
  app.renderPage();
});

window.addEventListener('load', ()=>{
  app.renderPage();
  swRegister();
});
