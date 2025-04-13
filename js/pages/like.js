import { header } from "../components/header.js";

header();

const templateHTML = document.getElementById('item').innerHTML;
const mainAddBtnDOM = document.getElementById('add');
const listDOM = document.getElementById('list');

let index = 0;

mainAddBtnDOM.addEventListener('click', () => {
    const HTML = templateHTML.replace('{{text}}', 'Labas rytas ' + ++index);
    listDOM.insertAdjacentHTML('afterbegin', HTML);

    const countDOM = listDOM.querySelector('.count');
    const minusDOM = listDOM.querySelector('.btn');
    const plusDOM = listDOM.querySelector('.btn:last-child');

    let count = 0;

    minusDOM.addEventListener('click', () => {
        countDOM.textContent = --count;
    });

    plusDOM.addEventListener('click', () => {
        countDOM.textContent = ++count;
    });
});
