import { header } from '../components/header.js';

header();

const countDOM = document.querySelector('.count');
const btnMinusDOM = document.querySelector('.btn');
const btnPlusDOM = document.querySelector('.btn:last-child');

let sum = 0;

function minus() {
    countDOM.textContent = --sum;
}

function plus() {
    countDOM.textContent = ++sum;
}

btnMinusDOM.addEventListener('click', minus);
btnPlusDOM.addEventListener('click', plus);
