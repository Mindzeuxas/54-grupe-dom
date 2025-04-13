import { header } from '../components/header.js';

header();

console.log('home');

const h1DOM = document.getElementsByTagName('h1');
console.log(h1DOM);

const ulDOM = document.getElementsByTagName('ul');
console.log(ulDOM);

const liDOM1 = document.getElementsByTagName('li');
console.log(liDOM1);

const liDOM2 = ulDOM[0].getElementsByTagName('li');
console.log(liDOM2);

const liDOM3 = ulDOM[1].getElementsByTagName('li');
console.log(liDOM3);

console.log(liDOM2[1]);

console.clear();

const titleDOM = document.getElementById('title');
console.log(titleDOM);
console.log([titleDOM]);

const errorDOM = document.getElementById('error');
console.log(errorDOM);

const listDOM = document.getElementsByClassName('list');
console.log(listDOM);

const itemDOM = document.getElementsByClassName('item');
console.log(itemDOM);

const itemDOM1 = listDOM[0].getElementsByClassName('item');
console.log(itemDOM1);

const itemDOM2 = listDOM[1].getElementsByClassName('item');
console.log(itemDOM2);

console.clear();

const pomidorasDOM = document
    .querySelector('.list:nth-of-type(2) .item:nth-child(2)');
console.log(pomidorasDOM);

const darzovesDOM = document
    .querySelectorAll('.list:nth-of-type(1) > .item');
console.log(darzovesDOM);