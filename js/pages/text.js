import { header } from "../components/header.js";

header();

const titleDOM = document.getElementById('title');

console.log(titleDOM.textContent);
console.log(titleDOM.innerText);
console.log(titleDOM.textContent.length);
console.log(titleDOM.innerText.length);

titleDOM.textContent = 'Pomidoras';
titleDOM.innerText = 'Agurkas';


console.clear();

const liDOM = document.querySelectorAll('ul li');

for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].textContent = liDOM[i].textContent.repeat(5) + '!';
}

for (const li of liDOM) {
    li.textContent = li.textContent.repeat(3) + '?';
}

const colors = ['yellow', 'green', 'red'];
const vegsDOM = document.querySelectorAll('ol li');
let index = 0;

for (const vegDOM of vegsDOM) {
    // const colorIndex = Math.floor(Math.random() * colors.length);
    const colorIndex = index++ % colors.length;
    const color = colors[colorIndex];
    vegDOM.style.fontSize = (1 + index * 0.3) + 'rem';
    vegDOM.style.backgroundColor = color;
}

const lrlDOM = document.querySelectorAll('div p');

for (const pDOM of lrlDOM) {
    const { number, color } = pDOM.dataset;
    pDOM.textContent = number + ') ' + pDOM.textContent;
    pDOM.style.backgroundColor = color;
}
