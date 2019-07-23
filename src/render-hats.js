function renderHats(hat) {
    const li = document.createElement('li');
    li.className = hat.code;
    li.title = hat.description;

    const h3 = document.createElement('h3');
    h3.textContent = hat.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = hat.image;
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = hat.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = hat.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderHats;