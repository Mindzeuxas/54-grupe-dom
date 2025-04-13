export function foodBlock(item, currency) {
    if (item.price < 0) {
        return '';
    }

    return `
        <li class="food">
            <img class="img" src="./food/${item.photo}" alt="${item.name} pizza">
            <p class="title">${item.name}</p>
            <p class="price">${item.price / 100} ${currency}</p>
            <p class="availability"><span>${item.availability}</span> available</p>
        </li>`;
}
