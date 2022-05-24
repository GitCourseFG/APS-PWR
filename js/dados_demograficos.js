import { InViewPortHandler } from './index.js';

const articles = document.querySelectorAll('.demografico__main-article');

const viewHandler = () => {
  InViewPortHandler(articles, 'demografico__fade-in');
}

window.addEventListener('load', viewHandler, false);
window.addEventListener('scroll', viewHandler, false);
