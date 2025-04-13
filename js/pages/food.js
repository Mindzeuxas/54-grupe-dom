import { header } from '../components/header.js';
import { foodList } from '../data/pizza.js';
import { foodBlock } from '../components/foodBlock.js';

header();

const currency = 'Eur';
const foodListDOM = document.querySelector('.food-list');

let HTML = '';

for (const item of foodList) {
    HTML += foodBlock(item, currency);
}

foodListDOM.innerHTML = HTML;
