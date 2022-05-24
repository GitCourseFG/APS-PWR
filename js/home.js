import { InViewPortHandler } from './index.js';

const slider = document.querySelector('#main-slider');
const about = document.querySelector('#main-about');
const cards = document.querySelectorAll('.card');

const viewHandler = () => {
  InViewPortHandler([
    slider,
    about,
    ...cards,
  ], 'home__fade-in');
}

window.addEventListener('load', viewHandler, false);
window.addEventListener('scroll', viewHandler, false);
